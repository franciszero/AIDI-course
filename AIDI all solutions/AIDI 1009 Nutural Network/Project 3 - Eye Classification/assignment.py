# coding=utf-8
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import cv2
import tensorflow as tf
from keras.activations import relu
from keras.callbacks import ModelCheckpoint, EarlyStopping
from keras.regularizers import l2
from tensorflow import keras
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from skimage.transform import resize
from sklearn.utils import shuffle
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.utils import resample
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import confusion_matrix, classification_report, recall_score, precision_score, f1_score, \
    roc_auc_score, roc_curve
from PIL import Image
from keras.callbacks import EarlyStopping
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Dropout, Flatten, Dense, BatchNormalization, Activation, ZeroPadding2D

import visualkeras
import os

import warnings

warnings.filterwarnings('ignore')
pd.set_option('display.max_columns', 30)
pd.set_option('display.width', 2000)

from collections import defaultdict
import glob

# resize all images into 64，64
df = pd.DataFrame(columns=['image', 'label'])
for label, gender in enumerate(['femaleeyes', 'maleeyes']):
    files = glob.glob("./images/" + gender + "/*")
    for i, file in enumerate(files):
        img = cv2.imread(file)
        img = cv2.resize(img, (64, 64))
        print("[%d/%d] %d %s" % (i, len(files), label, file))
        df.loc[df.index.size, 'image':'label'] = [img, label]

x_modeling, x_test, y_modeling, y_test = train_test_split(df['image'], df['label'], test_size=0.2, random_state=100)
x_train, x_val, y_train, y_val = train_test_split(x_modeling, y_modeling, test_size=0.25, random_state=100)
x_train_tensor, x_val_tensor, x_test_tensor, y_train_tensor, y_val_tensor, y_test_tensor = [
    (lambda x: tf.convert_to_tensor(np.stack(x.values)))(xx) for xx in [x_train, x_val, x_test, y_train, y_val, y_test]]
x_train_tensor.shape, x_val_tensor.shape, x_test_tensor.shape, y_train_tensor.shape, y_val_tensor.shape, y_test_tensor.shape

x_train_flatten, x_val_flatten, x_test_flatten, y_train_flatten, y_val_flatten, y_test_flatten = [
    (lambda f: np.array([d if isinstance(d,int) else d.flatten() for d in f]))(xx) for xx in [x_train, x_val, x_test, y_train, y_val, y_test]]

image_shape=(64, 64, 3)
predict_classes = 1

from keras.activations import relu
from keras.optimizers import Adam

mlp_clf = Sequential([
    Dense(128, activation=relu),
    Dropout(0.2),
    Dense(128, activation=relu),
    Dropout(0.2),
    Dense(predict_classes, activation='sigmoid')
])

mlp_clf.compile(optimizer=Adam(), loss='binary_crossentropy')




image_shape = (64, 64, 3)
predict_classes = 2
model2 = Sequential([
    # Layer 1
    Conv2D(128, (11, 11), input_shape=image_shape, strides=(1, 1), activation='relu', padding='same',
           kernel_regularizer=l2(0)),
    BatchNormalization(),
    MaxPooling2D(pool_size=(3, 3)),

    # Layer 2
    Conv2D(256, (5, 5), padding='same'),
    BatchNormalization(),
    Activation('relu'),
    MaxPooling2D(pool_size=(2, 2)),

    # Layer 3
    ZeroPadding2D((1, 1)),
    Conv2D(512, (3, 3), padding='same'),
    BatchNormalization(),
    Activation('relu'),
    MaxPooling2D(pool_size=(2, 2)),

    # Layer 4
    ZeroPadding2D((1, 1)),
    Conv2D(1024, (3, 3), padding='same'),
    BatchNormalization(),
    Activation('relu'),

    # Layer 5
    ZeroPadding2D((1, 1)),
    Conv2D(1024, (3, 3), padding='same'),
    BatchNormalization(),
    Activation('relu'),
    MaxPooling2D(pool_size=(2, 2)),

    # Layer 6
    Flatten(),
    Dense(3072),
    BatchNormalization(),
    Activation('relu'),
    Dropout(0.5),

    # Layer 7
    Dense(4096),
    BatchNormalization(),
    Activation('relu'),
    Dropout(0.5),

    # Layer 8
    Dense(predict_classes),
    BatchNormalization(),
    Activation('softmax')
])


# def func(df, gender, label):
#     files = glob.glob("./images/" + gender + "/*")
#     for i, file in enumerate(files):
#         img = cv2.imread(file)
#         print("[%d/%d] %d %s" % (i, len(files), label, file))
#         df.loc[df.index.size, 'image':'shape'] = [img, label, img.shape[0], img.shape[1], img.shape[2], str(img.shape)]
#
#
# df0 = pd.DataFrame(columns=['image', 'label', 'w', 'h', 'c', 'shape'])
# func(df0, 'femaleeyes', 0)
# func(df0, 'maleeyes', 1)
#
# # most of the images are size of 50-60
# df0.groupby('shape').count()['image'].sort_values(ascending=False)
#
# # plot distribution of image size
# df0.groupby('w').count()['image'].sort_index(ascending=False).plot()
#
# # display scatter, visualize the relationship between image w,h and it's scale
# df1 = df0.groupby(['w', 'h']).count()['image'].reset_index()
# sns.scatterplot(df1, x='w', y='h', size='image')


# resize all images into 64，64
def func(f, gender, label):
    files = glob.glob("./images/" + gender + "/*")
    for i, file in enumerate(files):
        img = cv2.imread(file)
        img = cv2.resize(img, (64, 64))
        print("[%d/%d] %d %s" % (i, len(files), label, file))
        f.loc[f.index.size, 'image':'label'] = [img, label]


df0 = pd.DataFrame(columns=['image', 'label'])
func(df0, 'femaleeyes', 0)
func(df0, 'maleeyes', 1)

# Alex-Net Architechture
CNN = keras.models.Sequential([
    keras.layers.Conv2D(filters=128, kernel_size=(11, 11), strides=(4, 4), activation='relu', input_shape=(64, 64, 3)),
    keras.layers.BatchNormalization(),
    keras.layers.MaxPool2D(pool_size=(2, 2)),
    keras.layers.Conv2D(filters=256, kernel_size=(5, 5), strides=(1, 1), activation='relu', padding="same"),
    keras.layers.BatchNormalization(),
    keras.layers.MaxPool2D(pool_size=(3, 3)),
    keras.layers.Conv2D(filters=256, kernel_size=(3, 3), strides=(1, 1), activation='relu', padding="same"),
    keras.layers.BatchNormalization(),
    keras.layers.Conv2D(filters=256, kernel_size=(1, 1), strides=(1, 1), activation='relu', padding="same"),
    keras.layers.BatchNormalization(),
    keras.layers.Conv2D(filters=256, kernel_size=(1, 1), strides=(1, 1), activation='relu', padding="same"),
    keras.layers.BatchNormalization(),
    keras.layers.MaxPool2D(pool_size=(2, 2)),
    keras.layers.Flatten(),
    keras.layers.Dense(1024, activation='relu'),
    keras.layers.Dropout(0.5),
    keras.layers.Dense(1024, activation='relu'),
    keras.layers.Dropout(0.5),
    keras.layers.Dense(1, activation='sigmoid')
])

visualkeras.layered_view(CNN, scale_xy=10, scale_z=10, max_z=10, legend=True, spacing=10)

x_modeling, x_teset, y_modeling, y_test = train_test_split(df0['image'], df0['label'], test_size=0.2, random_state=0)
x_train, x_val, y_train, y_val = train_test_split(x_modeling, y_modeling, test_size=0.25, random_state=0)
CNN.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
clf = CNN.fit(x_train, y_train, validation_data=(x_val, y_val), epochs=10)

clf = CNN.fit([tf.convert_to_tensor(x) for x in x_train],
              [tf.convert_to_tensor(y) for y in y_train],
              validation_data=([tf.convert_to_tensor(x) for x in x_val],
                               [tf.convert_to_tensor(y) for y in y_val],
                               ),
              epochs=10)

es = EarlyStopping(monitor='val_loss', mode='min', verbose=1, patience=1)
mc = ModelCheckpoint(filepath='best_model.h5', monitor='val_loss', save_best_only=True)
clf = model.fit(x_train, y_train, validation_data=(x_val, y_val), epochs=5000, verbose=1, callbacks=[es, mc])

plt.figure(figsize=(8, 6))
plt.plot(clf.history['loss'])
plt.plot(clf.history['val_loss'])
plt.title('Loss curve', fontdict={'size': 20})
plt.show()

plt.figure(figsize=(8, 6))
plt.plot(clf.history['accuracy'])
plt.plot(clf.history['val_accuracy'])
plt.title('Accuracy curve', fontdict={'size': 20})
plt.show()

y_pred = model.predict(x_test)
y_pred = np.round(y_pred)
rc = recall_score(y_test, y_pred)
pr = precision_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)
roc = roc_auc_score(y_test, y_pred)

# Confusion Matrix
mat = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(9, 9))
sns.heatmap(mat, annot=True, fmt='.3f', linewidths=.5, square=True, cmap="Pastel1")
plt.ylabel('Actual label')
plt.xlabel('Predicted label')
all_sample_title = 'Accuracy Score: {0}'.format(accuracy_score(y_test, y_pred))
plt.title(all_sample_title, size=15)

# Classification report
CNN_Classification_Report = classification_report(y_test3, y_pred)
print(CNN_Classification_Report)


def func(df, gender, label):
    files = glob.glob("./images/" + gender + "/*")
    for i, file in enumerate(files):
        print("[%d/%d] %d %s" % (i, len(files), label, file))
        img = cv2.imread(file)
        img.size
        img = cv2.resize(img, (64, 64))
        # img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        df.loc[df.index.size, 'image':'label'] = [img, 0]


for dirname, _, filenames in os.walk(dir):
    for filename in filenames:
        label.append(os.path.split(dirname)[1])
        path.append(os.path.join(dirname, filename))

df = pd.DataFrame(columns=['Image', 'Label'])
df['Image'] = path
df['Label'] = label

df = shuffle(df)
df = df.reset_index(drop=True)


class DataExplorer:
    def __init__(self):
        self.df = pd.read_excel('./CreditCardDataset.xlsx')
        self.c_label = 'Class'
        self.dfx = self.df.drop(self.c_label, axis=1)  # original X
        x_cols = self.dfx.columns
        self.dfx = pd.DataFrame(MinMaxScaler().fit(self.dfx).transform(self.dfx), columns=x_cols)
        self.dfy = self.df[[self.c_label]]
        self.dfy_n = self.dfy.value_counts().shape[0]
        self.dfy = self.dfy[self.c_label]  # 1-D
        pass

    def eda_info(self):
        return self.df.info()

    def eda_check_uniques(self):
        return self.df.nunique()

    def eda_df_columns(self):
        return self.df.columns

    def eda_describe(self):
        summary = pd.DataFrame(self.df.describe().T)
        summary = summary.style.background_gradient(cmap='Reds') \
            .set_table_attributes("style = 'display: inline'") \
            .set_caption('Statistics of the Dataset') \
            .set_table_styles([{'selector': 'caption', 'props': [('font-size', '16px')]}])
        return summary

    def eda_check_nan(self):
        is_there_any_null_values = self.df.isnull().values.any()
        print("[EDA] is there any null values: ", is_there_any_null_values)
        plt.figure(figsize=(15, 6))
        sns.heatmap(self.df.isnull(), cmap="viridis")

    def eda_feature_correlations_heatmap(self, x=10, y=10):
        plt.figure(figsize=(x, y))
        sns.heatmap(pd.DataFrame(self.dfx).corr(), annot=True, linewidths=.5, fmt='.1f', cmap="viridis")
        plt.title("feature correlation heatmap")

    def eda_kde_pairplot(self, frac=0.01):
        sns.pairplot(self.df.sample(frac=frac, replace=False, random_state=0), kind="kde")

    def eda_plot_dist_multi_cols(self, column_names_to_plot, gridspec_cols=2, idx=0):
        assert (gridspec_cols >= 2)  # not allowed single col gridspec plot
        assert (len(column_names_to_plot) / gridspec_cols > 1)  # not allowed single row gridspec plot
        gridspec_rows = math.ceil(len(column_names_to_plot) / gridspec_cols)

        fig, axes = plt.subplots(gridspec_rows, gridspec_cols, figsize=(6 * gridspec_cols, 4 * gridspec_rows))
        for i in range(gridspec_rows):
            for j in range(gridspec_cols):
                if idx < len(column_names_to_plot):
                    c = column_names_to_plot[idx]
                    idx += 1
                    f = self.dfx[[c]]
                    ax0 = axes[i][j]
                    sns.distplot(f, kde=True, ax=ax0, color='brown')
                    ax0.set_title("\"%s\" (%.2f, %.2f)" % (c, f.min(), f.max()))
        plt.show()

    def eda_plot_label_dist(self, col, color="brown"):
        plt.figure(figsize=(6, 3))
        sns.distplot(self.dfy, kde=True, color=color)
        plt.title("\"%s\" (%.2f, %.2f)" % (col, self.dfy.min(), self.dfy.max()))
        plt.show()

# eda = DataExplorer()
