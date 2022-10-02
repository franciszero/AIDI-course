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


class RedWine:
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

    def get_best_lr(self, x, y, cv, display_param_selection=False):
        m = self.__get_best_model(x, y, cv, LogisticRegression(),
                                  {
                                      'C': [0.001, 0.01, 0.1, 1, 10, 100, 1000, 1e4]
                                  },
                                  display_param_selection)
        return 'LR', m

    def get_best_svm(self, x, y, cv, display_param_selection=False):
        m = self.__get_best_model(x, y, cv, SVC(),
                                  {
                                      'kernel': ['linear', 'rbf'],
                                      'C': [0.01, 0.1, 1, 10, 100, 1000, 1e4]
                                  },
                                  display_param_selection)
        return 'SVM', m

    def get_best_mlp(self, x, y, cv, display_param_selection=False):
        m = self.__get_best_model(x, y, cv, MLPClassifier(),
                                  {
                                      'hidden_layer_sizes': [(10,), (20,), (50,), (100,), (200,)],
                                      'activation': ['relu', 'tanh', 'logistic'],
                                      'learning_rate': ['constant', 'invscaling', 'adaptive']
                                  },
                                  display_param_selection)
        return 'mlp', m

    def get_best_rf(self, x, y, cv, display_param_selection=False):
        m = self.__get_best_model(x, y, cv, RandomForestClassifier(),
                                  {
                                      'n_estimators': [1, 2, 5, 10, 20, 50, 100],
                                      'max_depth': [2, 4, 8, 16, None]
                                  },
                                  display_param_selection)
        return 'Forest', m

    def get_best_gb(self, x, y, cv, display_param_selection=False):
        m = self.__get_best_model(x, y, cv, GradientBoostingClassifier(),
                                  {
                                      'n_estimators': [1, 2, 5, 10, 20],
                                      'max_depth': [2, 4, 8, 16, None],
                                      'learning_rate': [0.01, 0.1, 1, 10]
                                  },
                                  display_param_selection)
        return 'Boosting', m

    def __get_best_model(self, X, y, cv, mod, params, display_param_selection=False):
        # see: https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html
        # see: https://scikit-learn.org/stable/modules/model_evaluation.html#scoring-parameter
        grid_search_cv = GridSearchCV(mod, params, cv=cv)
        grid_search_cv.fit(X, y)
        if display_param_selection:
            self.print_results(grid_search_cv)
        return grid_search_cv  # .best_estimator_

    @staticmethod
    def print_results(results):
        print('BEST PARAMS: {}\n'.format(results.best_params_))

        means = results.cv_results_['mean_test_score']
        stds = results.cv_results_['std_test_score']
        for mean, std, params in zip(means, stds, results.cv_results_['params']):
            print('{} (+/-{}) for {}'.format(round(mean, 3), round(std * 2, 3), params))