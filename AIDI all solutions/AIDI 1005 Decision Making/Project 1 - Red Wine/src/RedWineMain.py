# coding=utf-8
import random

import numpy as np  # linear algebra
import pandas as pd  # data manipulation

# Visualization Libraries
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import SelectKBest, chi2

# Machine learning tools
from sklearn.preprocessing import StandardScaler, RobustScaler
from sklearn.model_selection import train_test_split
from sklearn.model_selection import StratifiedKFold
from sklearn.model_selection import cross_val_score

# Machine learning algorithms
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

# Performance metrics
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# import imblearn
# from imblearn.over_sampling import SMOTE
# System libraries
import os
import warnings

from RedWine import RedWine

# %matplotlib inline


if __name__ == '__main__':
    foo = RedWine()
    #
    # foo.exploratory_data_analysis()
    # foo.feature_importance()

    def aFunc(self, get_best_model, ptr, pv, ptt, g=10, r=10, open_display=False):
        if open_display:
            foo.print_title()

        buffer = []
        n = None
        model = None
        for _ in range(r):
            X_train, y_train, X_valid, y_valid = \
                self.valid_data_proportion(ptr, pv, ptt, g=g, seed=random.randint(1, 1000), open_display=False)
            clf = self.prepare_kfold_cross_validator(open_display=False)
            n, model = get_best_model(X_train, y_train, clf, display_param_selection=False)
            result = foo.validate(model, X_valid, y_valid)
            buffer.append(np.array(result))

            if open_display:
                foo.print_result((n, model, result))

        r = np.array(buffer).mean(axis=0)

        if open_display:
            foo.print_result(("%s avg" % n, model, r))
            print("")
        return n, model, r


    lst = [np.array((6, 2, 2, 10, 10)), np.array((8, 1, 1, 10, 10))]
    for i, (tr, v, tt, grp, interval) in enumerate(lst):
        foo.test_data_proportion(tr, v, tt, g=grp, seed=999, open_display=False)
        arr = [aFunc(foo, foo.get_best_lr, tr, v, tt, g=grp, r=interval, open_display=True)]

        print("Now the best model is")
        best_model_name = None
        best_model = None
        best_accuracy = 0.0
        foo.print_title()
        for _, tup in enumerate(arr):
            foo.print_result(tup)
            name = tup[0]
            cv = tup[1]
            accuracy = tup[2][3]
            if accuracy > best_accuracy:
                best_accuracy = accuracy
                best_model = cv
                best_model_name = name
        print("The best model is {}\n".format(best_model_name))

        print("Apply the src dataset on the best model {}".format(best_model_name))
        params = foo.validate(best_model, foo.X_test, foo.y_test)
        foo.print_title()
        foo.print_result((best_model_name, best_model, params))
        print("The accuracy of the best model is {} with sample proportion {}/{}/{}\n".format(params[3], tr, v, tt))

    # # feature selection method 3
    # selector = SelectKBest(score_func=chi2, k=5)
    # new_data = selector.fit_transform(X, y)
    # mask = selector.get_support()
    # new_features = X.columns[mask]
    # print(new_features)

    # Data Preparation Phase
    # see: https://www.projectpro.io/article/8-feature-engineering-techniques-for-machine-learning/423
    # 1.exploratory data analysis
    # 2.data cleaning
    # 3.feature engineering
    # 3.1
