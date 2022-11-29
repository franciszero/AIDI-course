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
from xgboost import *
from scipy.stats import normaltest, linregress
from sklearn.svm import SVC, SVR
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import *
from sklearn.cluster import *
from sklearn.ensemble import *
from sklearn.datasets import load_digits, make_hastie_10_2, load_breast_cancer
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

# %matplotlib
# %matplotlib inline
warnings.filterwarnings("ignore")
pd.set_option('display.max_columns', 30)
pd.set_option('display.width', 2000)


class Foo:
    def __init__(self, file_name):
        self.df = pd.read_csv('./' + file_name)
        pass

    def null_value_visualization(self):
        print(self.df.isnull().any())
        plt.figure(figsize=(self.df.shape[1] / 2, 3), dpi=100)
        sns.heatmap(self.df.isnull(), cmap="viridis")
        pass

    def categorical_data_dist(self, c):
        f = self.df.groupby(c).count()
        f = f.sort_values(by=f.columns[0], ascending=False)
        f = f[f.columns[0]]
        return f

    def plot_categorical_data_distribution(self):
        fig = plt.figure(figsize=(8, 23), dpi=150, constrained_layout=True)
        gs = GridSpec(23, 4, figure=fig, left=0.1, right=0.9, bottom=0.1, top=0.9, wspace=0.05, hspace=0.05)

        for i, c in enumerate(self.df.columns):
            f = self.categorical_data_dist(c)
            x = i // 4
            y = i % 4
            ax = fig.add_subplot(gs[x, y])
            ax.plot(f.values[:50])
            ax.set_xticklabels([])

            ttl = "col = %s\nunique=%d" % (c, len(f.values))
            is_null = self.df[c].isnull().any()
            if not is_null:
                ttl += "\n isnull : %s" % str(is_null)
            else:
                nul = self.df[c].isnull().sum()
                tot = self.df[c].isnull().count()
                ttl += "\n null : %.2f%%" % (nul / tot * 100)
            ax.set_title(ttl, fontsize=6)
        plt.show()
        pass

    def price2float(self, c):
        self.df[c] = self.df[c].replace("[$,]", "", regex=True).astype(float)
        pass

    def price2float_standardized(self, c, fill_na=0):
        self.price2float(c)
        self.df[c] = self.df[c].fillna(fill_na)
        pass


# loading data and have a glance
listings = Foo('listings.csv')
# listings.null_value_visualization()
listings.price2float_standardized('weekly_price', fill_na=0)
listings.df['weekly_price']

