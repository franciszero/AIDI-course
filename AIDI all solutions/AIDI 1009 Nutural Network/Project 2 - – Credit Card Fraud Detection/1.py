# coding=utf-8
import os
import math
import time
import joblib
import random
import numpy as np
import pandas as pd
import random as rd
import seaborn as sns
import warnings
import tensorflow as tf
from matplotlib import pyplot as plt
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split
import torch
import torch.nn as nn
import torch.nn.functional as F
from sklearn.utils import shuffle
from torch.autograd import Variable
from sklearn.metrics import r2_score, mean_absolute_error

warnings.filterwarnings("ignore")
pd.set_option('display.max_columns', 30)
pd.set_option('display.width', 2000)


class FraudDetection:
    def __init__(self, model=None, params=(8, 1, 1, 10)):
        self.model = model
        (self.tr, self.v, self.tt, self.g) = params
        self.fold = int(1 / (self.v / (self.tr + self.v)))
        self.df = pd.read_excel('./CreditCardDataset.xlsx')
        self.c_label = 'Class'
        self.dfx = self.df.drop(self.c_label, axis=1)  # original X
        cols = []
        self.df.to_numpy()
        for col in self.dfx.columns:
            new_col = col.replace(' ', '_')
            cols.append(new_col)
        self.dfx.columns = cols
        self.dfy = self.df[[self.c_label]]
        self.dfy[self.c_label] = LabelEncoder().fit_transform(
            self.dfy)  # MinMaxScaler().fit(self.dfy).transform(self.dfy).flatten()
        self.dfy_n = self.dfy.value_counts().shape[0]
        # self.dfy = self.dfy[self.c_label]
        self.x_train, self.x_test, self.y_train, self.y_test \
            = train_test_split(self.dfx, self.dfy, test_size=0.2, random_state=0)
        self.y_train_cat = tf.keras.utils.to_categorical(self.y_train, self.dfy_n)
        self.y_test_cat = tf.keras.utils.to_categorical(self.y_test, self.dfy_n)
        self.rp = None
        self.cm = None
        self.mae = None
        self.r2 = None
        self.mse = None
        self.ac = None
        self.y_pred = None
        self.gs = None

    def eda_check_nan(self):
        is_there_any_null_values = self.df.isnull().values.any()
        print("[EDA] is there any null values: ", is_there_any_null_values)
        plt.figure(figsize=(15, 6))
        sns.heatmap(self.df.isnull(), cmap="viridis")

    def eda_feature_correlations_heatmap(self):
        plt.figure(figsize=(10, 10))
        sns.heatmap(self.dfx.corr(), annot=True, linewidths=.5, fmt='.1f', cmap="viridis")
        plt.title("feature correlation heatmap")

    def eda_feature_distribution_visualization(self, col_idx):
        c = self.dfx.columns[col_idx]
        f = self.dfx[[c]]
        self.dist_plot(f, c)
        return

    @staticmethod
    def dist_plot(f, c, color="brown"):
        plt.figure(figsize=(16, 4))
        sns.distplot(f, kde=True, color=color)
        plt.title("\"%s\" (%.2f, %.2f)" % (c, f.min(), f.max()))
        plt.show()
        pass

    def eda_info(self):
        print(self.df.info())
        return

    def eda_describe(self):
        summary = pd.DataFrame(self.df.describe().T)
        summary = summary.style.background_gradient(cmap='Reds') \
            .set_table_attributes("style = 'display: inline'") \
            .set_caption('Statistics of the Dataset') \
            .set_table_styles([{
            'selector': 'caption',
            'props': [
                ('font-size', '16px')
            ]
        }])
        return summary

    def get_batch_train(self, size=128):
        return self.__get_batch(self.x_train, self.y_train).shuffle(128).repeat().batch(size)

    def get_batch_test(self, size=128):
        return self.__get_batch(self.x_test, self.y_test).batch(size)

    def __get_batch(self, x, y):
        return tf.data.Dataset.from_tensor_slices((dict(self.x_train), self.y_train))

    def train_with_keras(self, batch_size=128, epochs=128):
        nn = tf.keras.models.Sequential()
        nn.add(tf.keras.layers.Input(shape=11))
        nn.add(tf.keras.layers.Dense(units=128, activation="relu"))
        nn.add(tf.keras.layers.Dense(units=128, activation="relu"))
        nn.add(tf.keras.layers.Dense(units=32, activation="relu"))
        nn.add(tf.keras.layers.Dense(units=6, activation="sigmoid"))
        nn.summary()
        nn.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
        history = nn.fit(self.x_train, self.y_train_cat, batch_size=batch_size, epochs=epochs, verbose=0,
                         validation_data=(self.x_test, self.y_test_cat))
        return nn, history


foo = FraudDetection()


# Create the model object
class Net(nn.Module):
    def __init__(self, in_dim=None, out_dim=1):
        super(Net, self).__init__()
        self.l1 = nn.Linear(in_dim, 128)
        self.l2 = nn.Linear(128, 8)
        self.l3 = nn.Linear(8, out_dim)

    def forward(self, x):
        x = F.relu(self.l1(x))
        x = F.relu(self.l2(x))
        x = self.l3(x)
        return x


input_dim = foo.x_train.columns.shape[0]
output_dim = foo.dfy_n
clf = Net(input_dim, output_dim)

batch_num = 0
batch_size = 64
batch_no = foo.x_train.shape[0] // batch_size + 1

optimizer = torch.optim.SGD(clf.parameters(), lr=0.01)
criterion = nn.NLLLoss()

cum_loss = 0.0
for i in range(1):
    _from = i * batch_size
    _to = _from + batch_size
    inputs = foo.x_train[_from:_to].to_numpy()
    labels = foo.y_train[_from:_to].to_numpy()
    inputs = Variable(torch.from_numpy(inputs))
    labels = Variable(torch.from_numpy(labels))

    optimizer.zero_grad()
    outputs = clf(inputs)
    loss = criterion(outputs, labels)
    loss.backward()
    optimizer.step()

    cum_loss += loss.item()
    if (batch_num + 1) % 1 == 0:
        print(f'Batch: {batch_num}, loss: {loss.item()}')
