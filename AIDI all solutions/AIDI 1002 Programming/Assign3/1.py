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

# from keras.layers import Flatten, Dense, Dropout
# from sklearn.metrics import confusion_matrix, f1_score, precision_score, recall_score
# from keras.preprocessing.text import Tokenizer
# from keras.datasets import imdb
# from keras import preprocessing
# from keras import models
# from keras import optimizers
# from keras import metrics
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
        pass

    def getXy(self, f):
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

    def scaling_plot(self, tmp, title, color):
        plt.figure(figsize=(7, 2), dpi=70)
        sns.histplot(tmp, kde=True, color=color)
        plt.title("%s scaling: (%.2f, %.2f)" % (title, tmp.min(), tmp.max()))
        plt.show()

    def onehot_encoding(self, x_train, x_test):
        categorical_data = [var for var in x_train.columns if x_train[var].dtype == 'O']

        encoder = ce.OneHotEncoder(cols=categorical_data)
        x_train = encoder.fit_transform(x_train)
        x_test = encoder.transform(x_test)

        #         scaler = RobustScaler()
        #         x_train = scaler.fit_transform(x_train)
        #         x_test = scaler.transform(x_test)
        return x_train, x_test


foo = Foo()
foo.label_encoding(method='onehot')
foo.log_scaling()
foo.feature_scaling(plot=False)


# model = Sequential()
# model.add(Dense(128, activation='ReLU'))
# model.add(Dense(8, activation='ReLU'))
# model.add(Dropout(0.2))
# model.add(Dense(foo.n_classes, activation='sigmoid'))

def f1(y_true, y_pred):
    def recall(t, p):
        true_positives = K.sum(K.round(K.clip(t * p, 0, 1)))
        possible_positives = K.sum(K.round(K.clip(t, 0, 1)))
        return true_positives / (possible_positives + K.epsilon())

    def precision(t, p):
        true_positives = K.sum(K.round(K.clip(t * p, 0, 1)))
        predicted_positives = K.sum(K.round(K.clip(p, 0, 1)))
        return true_positives / (predicted_positives + K.epsilon())

    precision = precision(y_true, y_pred)
    recall = recall(y_true, y_pred)
    return 2 * ((precision * recall) / (precision + recall + K.epsilon()))


input_shape = np.shape(foo.X_train)[0]
print("input_shape : ", input_shape)
model = Sequential()
model.add(layers.ReLU(64))
model.add(layers.Dropout(0.5))
model.add(layers.ReLU(foo.n_classes))
model.add(layers.Dense(foo.n_classes, activation='softmax', bias_initializer=None))  # foo.n_classes
model.compile(loss=losses.categorical_crossentropy, optimizer=Adam(lr=0.01), metrics=[f1])
early_stopping = EarlyStopping(monitor='f1', verbose=2, patience=10, mode='max', restore_best_weights=True)
training_history = model.fit(foo.X_train, foo.y_train, batch_size=512, epochs=100, verbose=2,
                             callbacks=callbacks,
                             validation_data=(foo.X_valid, foo.y_valid)
                             )
i = None