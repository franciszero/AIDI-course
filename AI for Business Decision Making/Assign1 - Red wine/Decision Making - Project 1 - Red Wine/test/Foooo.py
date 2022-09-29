# coding=utf-8
import math
import random
from time import time
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
import seaborn as sns
import joblib
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.feature_selection import VarianceThreshold, SelectKBest
from sklearn.naive_bayes import GaussianNB
from sklearn.preprocessing import LabelEncoder
from sklearn.datasets import load_iris
from sklearn import neighbors, datasets
from sklearn.model_selection import train_test_split, GridSearchCV, StratifiedKFold, cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.neural_network import MLPClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn import metrics
from sklearn.metrics import accuracy_score, precision_score, recall_score
from sklearn.model_selection import KFold
from scipy import stats
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import SelectFpr, chi2, SelectKBest, SelectFwe, f_classif, SelectFdr

import warnings

# %matplotlib
# %matplotlib inline

warnings.filterwarnings("ignore")

pd.set_option('display.max_columns', 20)
pd.set_option('display.width', 1000)


class Foooo:
    def __init__(self):
        self.df = pd.read_csv('./data/winequality-red.csv')
        print(self.df.info())
        self.features = self.df.drop('quality', axis=1).to_numpy()
        self.target = self.df['quality'].to_numpy()

        self.df.isnull().values.any()
        self.df.describe()

        # # feature correlations heatmap
        # f, ax = plt.subplots(figsize=(10, 10))
        # sns.heatmap(self.df.drop('quality', axis=1).corr(), annot=True, linewidths=.5, fmt='.1f', ax=ax)

        # feature selection method 1
        le = VarianceThreshold()
        tmp = le.fit_transform(self.features)

        # feature selection method 2
        X = self.df.drop(['quality'], axis=1)
        y = self.df['quality']
        clf = RandomForestClassifier(n_estimators=10)
        clf.fit(X, y)
        feat_importances = pd.DataFrame(clf.feature_importances_, index=X.columns, columns=["Importance"])
        feat_importances.sort_values(by='Importance', ascending=False, inplace=True)
        feat_importances.plot(kind='bar')

        # feature selection method 3
        selector = SelectKBest(score_func=chi2, k=5)
        new_data = selector.fit_transform(X, y)
        mask = selector.get_support()
        new_features = X.columns[mask]
        print(new_features)

        pass

    def get_models(self):
        models = []
        models.append(("LR", LogisticRegression()))
        models.append(("NB", GaussianNB()))
        models.append(("KNN", KNeighborsClassifier()))
        models.append(("DT", DecisionTreeClassifier()))
        models.append(("SVM rbf", SVC()))
        models.append(("SVM linear", SVC(kernel='linear')))
        models.append(('LDA', LinearDiscriminantAnalysis()))

        return models
