import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

import seaborn as sns
import os
import category_encoders as ce
from sklearn.preprocessing import *
from keras.utils import to_categorical
from sklearn.model_selection import train_test_split

from sklearn.preprocessing import LabelEncoder
from keras.models import Sequential
from keras import layers
from keras import losses
from keras.optimizers import SGD, Adam
from keras import callbacks
from keras.callbacks import Callback, EarlyStopping
from keras import backend as K
from keras import metrics
from sklearn.metrics import accuracy_score, precision_score, recall_score, confusion_matrix
from sklearn.utils.class_weight import compute_class_weight
from sklearn.metrics import roc_curve, auc, roc_auc_score

# from keras.layers import Flatten, Dense, Dropout
# from sklearn.metrics import confusion_matrix, f1_score, precision_score, recall_score
# from keras.preprocessing.text import Tokenizer
# from keras.datasets import imdb
# from keras import preprocessing
# from keras import models
# from keras import optimizers
# from keras.layers import Embedding
# from keras.layers import LSTM
# from keras.layers import GRU

import warnings

os.environ["CUDA_VISIBLE_DEVICES"] = "-1"  # Force TF to use only the CPU
warnings.filterwarnings("ignore")
pd.set_option('display.max_rows', 100)
pd.set_option('display.max_columns', 100)
pd.set_option('display.width', 5000)


class Foo:
    def __init__(self):
        self.traindf = pd.read_csv('./train.csv')
        self.traindf = self.traindf.drop(['ID', 'Segmentation'], axis=1)
        # self.traindf['source'] = 0
        self.testdf = pd.read_csv('./test.csv')
        self.testdf = self.testdf.drop(['ID'], axis=1)
        # self.testdf['source'] = 1
        # self.testdf = pd.merge(left=self.testdf, right=self.traindf[['ID', 'Segmentation']], how='left', on='ID')
        # self.df = pd.concat([self.traindf, self.testdf])
        self.traindf = self.fillna(self.traindf)
        self.testdf = self.fillna(self.testdf)

        self.X_train, self.y_train, self.n_classes = self.getXy(self.traindf)
        self.X_test, self.y_test, _ = self.getXy(self.testdf)

        self.X_train, self.X_valid, self.y_train, self.y_valid = \
            train_test_split(self.X_train, self.y_train, test_size=0.2, random_state=0, shuffle=True,
                             stratify=self.y_train)

        self.X_train.reset_index(drop=True, inplace=True)
        self.X_valid.reset_index(drop=True, inplace=True)
        self.X_test.reset_index(drop=True, inplace=True)

        print(self.X_train.shape, self.y_train.shape,
              self.X_valid.shape, self.y_valid.shape,
              self.X_test.shape, self.y_test.shape)
        pass

    @staticmethod
    def getXy(f):
        # f = self.df[self.df['source'] == c]
        y = f['Var_1']  # LabelEncoder().fit_transform()
        n = len(np.unique(y))
        y = to_categorical(y, n)
        x = f.drop(['Var_1'], axis=1)
        return x, y, n

    def fillna(self, f):
        f['Ever_Married'].fillna('Yes', inplace=True)
        f['Graduated'].fillna('Yes', inplace=True)
        f['Profession'].fillna('', inplace=True)
        f['Work_Experience'].fillna(f['Work_Experience'].mean(), inplace=True)
        f['Spending_Score'].fillna('Low', inplace=True)
        f['Family_Size'].fillna(f['Family_Size'].mean(), inplace=True)
        f['Var_1'].fillna('Cat_6', inplace=True)
        # f['Segmentation'].fillna(f['Segmentation'].mode().values[0])
        f.loc[(f['Var_1'] != 'Cat_4') & (f['Var_1'] != 'Cat_6'), ['Var_1']] = 'Other'
        f.loc[f['Var_1'] == 'Cat_4', ['Var_1']] = 0
        f.loc[f['Var_1'] == 'Cat_6', ['Var_1']] = 1
        f.loc[f['Var_1'] == 'Other', ['Var_1']] = 2
        return f

    def label_encoding(self, method='onehot'):
        if method == 'onehot':
            categorical_data = [var for var in self.X_train.columns if self.X_train[var].dtype == 'O']
            enc = ce.OneHotEncoder(cols=categorical_data)
            self.X_train = enc.fit_transform(self.X_train)
            self.X_valid = enc.transform(self.X_valid)
            self.X_test = enc.transform(self.X_test)
        elif method == 'labeling':
            for col in self.X_train.columns:
                if self.X_train[col].dtype == 'O':
                    le = LabelEncoder().fit(self.X_train[col])
                    self.X_train[col] = le.transform(self.X_train[col])
                    self.X_valid[col] = le.transform(self.X_valid[col])
                    self.X_test[col] = le.transform(self.X_test[col])
        else:
            pass
        pass

    def log_scaling(self):
        for col in self.X_train.columns:
            if self.X_train[col].dtype != 'O':
                self.X_train[col] = np.log(self.X_train[col].values + 1)
                self.X_valid[col] = np.log(self.X_valid[col].values + 1)
                self.X_test[col] = np.log(self.X_test[col].values + 1)

    def feature_scaling(self, plot=True):
        for col in self.X_train.columns:
            if self.X_train[col].dtype != 'O':
                ss = StandardScaler()
                self.X_train[col] = ss.fit_transform(self.X_train[[col]])
                self.X_valid[col] = ss.transform(self.X_valid[[col]])
                self.X_test[col] = ss.transform(self.X_test[[col]])

                if plot:
                    self.scaling_plot(self.X_train[col], 'X_train %s ' % col, 'r')
                    self.scaling_plot(self.X_valid[col], 'X_valid %s ' % col, 'g')
                    self.scaling_plot(self.X_test[col], 'X_test %s ' % col, 'b')
        pass

    @staticmethod
    def scaling_plot(tmp, title, color):
        plt.figure(figsize=(7, 2), dpi=70)
        sns.histplot(tmp, kde=True, color=color)
        plt.title("%s scaling: (%.2f, %.2f)" % (title, tmp.min(), tmp.max()))
        plt.show()

    @staticmethod
    def onehot_encoding(x_train, x_test):
        categorical_data = [var for var in x_train.columns if x_train[var].dtype == 'O']

        encoder = ce.OneHotEncoder(cols=categorical_data)
        x_train = encoder.fit_transform(x_train)
        x_test = encoder.transform(x_test)

        #         scaler = RobustScaler()
        #         x_train = scaler.fit_transform(x_train)
        #         x_test = scaler.transform(x_test)
        return x_train, x_test

    # see: https://stackoverflow.com/questions/43547402/how-to-calculate-f1-macro-in-keras/45305384#45305384
    @staticmethod
    def f1(_y_true, _y_pred):
        def recall(t, p):
            true_positives = K.sum(K.round(K.clip(t * p, 0, 1)))
            possible_positives = K.sum(K.round(K.clip(t, 0, 1)))
            return true_positives / (possible_positives + K.epsilon())

        def precision(t, p):
            true_positives = K.sum(K.round(K.clip(t * p, 0, 1)))
            predicted_positives = K.sum(K.round(K.clip(p, 0, 1)))
            return true_positives / (predicted_positives + K.epsilon())

        precision = precision(_y_true, _y_pred)
        recall = recall(_y_true, _y_pred)
        return 2 * ((precision * recall) / (precision + recall + K.epsilon()))

    def make_model(self, l0=256, l1=256, dropout=0.5, l2=64, l3=16):
        METRICS = [
            metrics.TruePositives(name='tp'),
            metrics.FalsePositives(name='fp'),
            metrics.TrueNegatives(name='tn'),
            metrics.FalseNegatives(name='fn'),
            metrics.BinaryAccuracy(name='accuracy'),
            metrics.Precision(name='precision'),
            metrics.Recall(name='recall'),
            metrics.AUC(name='auc'),
            metrics.AUC(name='prc', curve='PR'),  # precision-recall curve
            self.f1
        ]
        input_shape = np.shape(self.X_train)[0]
        print("input_shape : ", input_shape)
        mdl = Sequential()
        mdl.add(layers.ReLU(l0))
        mdl.add(layers.ReLU(l1))
        # mdl.add(layers.Dropout(dropout))
        mdl.add(layers.ReLU(l2))
        mdl.add(layers.ReLU(l3))
        mdl.add(layers.ReLU(self.n_classes))
        mdl.add(layers.Dense(self.n_classes, activation='softmax', bias_initializer=None))  # self.n_classes
        mdl.compile(loss=losses.categorical_crossentropy, optimizer=Adam(lr=0.01), metrics=METRICS)
        return mdl

    def training(self, mdl, class_weight=None, verbose=2):
        # early_stopping
        early_stopping = EarlyStopping(monitor='f1', verbose=2, patience=10,
                                       mode='max',
                                       restore_best_weights=True)

        # training model
        _history = mdl.fit(self.X_train, self.y_train, batch_size=512, epochs=100, verbose=verbose,
                           callbacks=early_stopping,
                           validation_data=(self.X_valid, self.y_valid),
                           class_weight=class_weight  # The class weights
                           )
        return _history

    def predict(self, mdl):
        _y_pred = mdl.predict(self.X_test)
        shape1 = np.shape(_y_pred)[1]
        result = []
        for idx in range(len(_y_pred)):
            idx = np.argmax(_y_pred[idx])
            arr = [0] * shape1
            arr[idx] = 1
            result.append(arr)
        result = np.array(result)
        pred_result = np.array([result.T[0].sum(), result.T[1].sum(), result.T[2].sum()])
        test_labels = np.array([self.y_test.T[0].sum(), self.y_test.T[1].sum(), self.y_test.T[2].sum()])
        # print(_y_pred, result)
        print(pred_result, test_labels)
        print("accuracy : ", accuracy_score(self.y_test, result))
        print("precision : ", precision_score(self.y_test, result, average=None))
        print("recall : ", recall_score(self.y_test, result, average=None))
        return _y_pred

    @staticmethod
    def plot_metric(history, metric, label='', title=''):
        plt.plot(history.epoch, history.history[metric], label='Train ' + label)  # semilogy
        plt.plot(history.epoch, history.history['val_' + metric], label='Val ' + label, linestyle="--")  # semilogy
        plt.title(title)
        plt.xlabel('Epoch')
        plt.ylabel(metric)
        plt.legend()
        plt.show()
        pass

    @staticmethod
    def plot_metrics(history):
        _metrics = ['precision', 'recall']  # 'loss', 'prc',
        plt.figure(figsize=(10, 8), dpi=80)
        for n, metric in enumerate(_metrics):
            name = metric.replace("_", " ").capitalize()
            plt.subplot(2, 2, n + 1)
            plt.plot(history.epoch, history.history[metric], label='Train')
            plt.plot(history.epoch, history.history['val_' + metric], linestyle="--", label='Val')
            plt.xlabel('Epoch')
            plt.ylabel(name)
            #         if metric == 'loss':
            #             plt.ylim([0, plt.ylim()[1]])
            #         elif metric == 'auc':
            #             plt.ylim([0.8,1])
            #         else:
            #             plt.ylim([0,1])
            plt.legend()
        pass

    @staticmethod
    def get_y_label(y_categorical):
        return y_categorical.argmax(axis=-1)

    def plot_confusion_matrix(self, _y_pred):
        mat = confusion_matrix(self.get_y_label(self.y_test), self.get_y_label(_y_pred), labels=[0, 1, 2])
        sns.heatmap(mat, annot=True, fmt=".0f")
        pass

    def get_class_weight(self, categorical_y):
        arr = compute_class_weight(class_weight="balanced",
                                   classes=np.unique(self.get_y_label(categorical_y)),
                                   y=self.get_y_label(categorical_y))
        return {0: arr[0], 1: arr[1], 2: arr[2]}

    # function for scoring roc auc score for multi-class
    def plot_multiclass_roc_auc_curve(self, _y_test, _y_pred, average="macro"):
        _y_test = self.get_y_label(_y_test)
        _y_pred = self.get_y_label(_y_pred)
        # set plot figure size
        fig, c_ax = plt.subplots(1, 1, figsize=(8, 8), dpi=80)
        target = [0, 1, 2]
        lb = LabelBinarizer()
        lb.fit(_y_test)
        _y_test = lb.transform(_y_test)
        _y_pred = lb.transform(_y_pred)

        fpr, tpr = None, None
        for (idx, c_label) in enumerate(target):
            fpr, tpr, thresholds = roc_curve(_y_test[:, idx].astype(int), _y_pred[:, idx])
            c_ax.plot(fpr, tpr, label='%s (AUC:%0.2f)' % (c_label, auc(fpr, tpr)))
        c_ax.plot(fpr, tpr, 'b-', label='Random Guessing')
        c_ax.legend()
        c_ax.set_xlabel('False Positive Rate')
        c_ax.set_ylabel('True Positive Rate')
        plt.show()
        return roc_auc_score(_y_test, _y_pred, average=average)

    def over_sampling(self, s0=2, s2=2, plot=False):
        tmp = pd.concat([self.X_train, pd.DataFrame(self.y_train)], axis=1)
        scales = tmp[[0, 1, 2]].sum()
        if plot:
            plt.bar(range(len(scales)), scales)
            plt.show()
        oversampling_0 = tmp[tmp[0] == 1].sample(int(scales[0] * s0), replace=True)
        oversampling_2 = tmp[tmp[2] == 1].sample(int(scales[2] * s2), replace=True)

        oversampling_traindf = pd.concat([oversampling_0, tmp[tmp[1] == 1], oversampling_2])
        if plot:
            scales = oversampling_traindf[[0, 1, 2]].sum()
            plt.bar(range(len(scales)), scales)
            plt.show()
        y_train = oversampling_traindf[[0]]
        y_train[1] = oversampling_traindf[[1]]
        y_train[2] = oversampling_traindf[[2]]
        self.y_train = y_train.values

        oversampling_traindf.pop(0)
        oversampling_traindf.pop(1)
        oversampling_traindf.pop(2)
        self.X_train = oversampling_traindf.reset_index(drop=True, inplace=False)

        print(self.get_class_weight(self.y_train))


foo = Foo()
foo.label_encoding(method='onehot')  # 'onehot', 'labeling'
foo.log_scaling()
foo.feature_scaling(plot=False)
foo.over_sampling(s0=4, s2=2, plot=True)

# build
model = foo.make_model()
training_history = foo.training(model, class_weight=None)
y_pred = foo.predict(model)
foo.plot_confusion_matrix(y_pred)
foo.plot_multiclass_roc_auc_curve(foo.y_test, y_pred)
# plots
foo.plot_metric(training_history, 'loss', label="loss", title='Training and validation loss')
foo.plot_metric(training_history, 'f1', label="f1_score", title='Training and validation f1_score')
foo.plot_metrics(training_history)

# build with weights
model = foo.make_model()
weighted_history = foo.training(model, class_weight=foo.get_class_weight(foo.y_train))
y_pred = foo.predict(model)
foo.plot_confusion_matrix(y_pred)
foo.plot_multiclass_roc_auc_curve(foo.y_test, y_pred)
# plots
foo.plot_metric(weighted_history, 'loss', label="loss", title='Training and validation loss')
foo.plot_metric(weighted_history, 'f1', label="f1_score", title='Training and validation f1_score')
foo.plot_metrics(weighted_history)

i = None
