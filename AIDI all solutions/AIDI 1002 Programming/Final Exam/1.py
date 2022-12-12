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
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec
import category_encoders as ce
from time import time

from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from xgboost import *
from scipy.stats import normaltest, linregress
from sklearn.svm import SVC, SVR
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import *
from sklearn.cluster import *
from sklearn.ensemble import *
from sklearn.datasets import load_digits, make_hastie_10_2, load_breast_cancer, load_iris
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.preprocessing import *
from sklearn.decomposition import *
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import *
from sklearn.feature_selection import *
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from pyclustering.cluster.kmeans import kmeans
from pyclustering.utils.metric import distance_metric, type_metric
from pyclustering.cluster.center_initializer import kmeans_plusplus_initializer
import unicodedata
import warnings

# %matplotlib
# %matplotlib inline
warnings.filterwarnings("ignore")
pd.set_option('display.max_rows', 100)
pd.set_option('display.max_columns', 100)
pd.set_option('display.width', 5000)

data_dict = {(2.0, 3.43, 4.37): 2, (2.49, 4.28, 4.83): 2, (2.58, 4.36, 4.48): 2, (2.66, 4.45, 5.95): 2,
             (2.82, 3.66, 4.51): 2, (3.03, 4.37, 5.07): 2, (3.27, 4.54, 4.57): 2, (3.41, 3.94, 5.35): 2,
             (3.53, 4.32, 5.41): 2, (3.53, 4.6, 6.8): 1, (3.61, 4.25, 5.21): 1, (3.61, 4.78, 5.47): 1,
             (3.72, 5.44, 5.88): 1, (3.87, 4.96, 4.52): 2, (4.13, 5.29, 6.6): 1, (4.25, 5.97, 5.48): 1,
             (4.61, 4.9, 5.11): 1, (4.73, 4.4, 6.78): 1, (4.97, 4.25, 5.0): 1, (4.98, 5.27, 6.79): 1,
             (5.08, 3.51, 4.69): 3, (5.15, 3.58, 4.2): 3, (5.67, 2.27, 4.65): 3, (5.67, 3.81, 5.75): 3,
             (5.94, 2.34, 4.12): 3, (6.06, 3.16, 4.36): 3, (6.09, 3.19, 4.02): 3, (6.43, 3.42, 4.18): 3,
             (6.56, 2.7, 4.03): 3, (6.79, 3.46, 4.81): 3}
data_dict.items()

df = pd.DataFrame([data_dict]).T
df['x1'], df['x2'], df['x3'] = df.index.str

from pyclustering.cluster.kmeans import kmeans

df = pd.DataFrame([data_dict]).T
df['x1'], df['x2'], df['x3'] = df.index.str
df.rename(columns={0: 'y'}, inplace=True)
df.reset_index(drop=True, inplace=True)
x = df[['x1', 'x2', 'x3']]
y = df['y']

initial_centers = kmeans_plusplus_initializer(x, 3).initialize()
metric = distance_metric(type_metric.MINKOWSKI)
clf = kmeans(x.values, initial_centers, metric=metric)
clf.process()

df['c'], df['d'] = zip(*df.index)

from pyclustering.cluster.kmeans import kmeans

initial_centers = kmeans_plusplus_initializer(x, 3).initialize()
metric = distance_metric(type_metric.MINKOWSKI)
clf = kmeans(x, initial_centers, metric=metric)
clf.process()
clusters = clf.get_clusters()
final_centers = clf.get_centers()
i = None

x = np.array([-1.4, -1.6, -1.3, 0.2, 2.0, -1.1, 0.0, 0.3, -0.9, -1.8]).reshape(-1, 1)
r = np.array([6.9, 7.8, 8.0, 5.8, 1.9, 7.3, 5.8, 5.8, 8.2, 9.6])
reg = LinearRegression().fit(x, r)
reg.coef_


class Foo:
    def __init__(self):
        iris = load_iris()
        self.X_train, self.X_test, self.y_train, self.y_test = \
            train_test_split(iris.data, iris.target, test_size=0.2, random_state=0, stratify=iris.target)

    def training_model(self, clf, name, frac):
        lst = []
        lst.append(frac)
        lst.append(name)
        l = int(len(self.X_train) * frac)
        x = self.X_train[:l, :]
        y = self.y_train[:l]
        clf.fit(x, y)
        pred = clf.predict(self.X_test)
        acc = accuracy_score(self.y_test, pred)
        f1 = f1_score(self.y_test, pred, average="macro")
        lst.append(acc)
        lst.append(f1)
        return lst


foo = Foo()
buf = []
for i in range(20):
    frac = 0.05 * (i + 1)
    print("test frac: %.2f" % frac)
    buf.append(foo.training_model(LogisticRegression(), "LR", frac=frac))
    buf.append(foo.training_model(DecisionTreeClassifier(), "DT", frac=frac))
    buf.append(foo.training_model(RandomForestClassifier(), "RF", frac=frac))
    buf.append(foo.training_model(GaussianNB(), "NB", frac=frac))

result = pd.DataFrame(buf)
print(buf)
