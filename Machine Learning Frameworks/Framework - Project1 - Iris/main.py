# coding=utf-8
import random
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from matplotlib.colors import ListedColormap
from sklearn import neighbors, datasets
from sklearn import metrics
from sklearn.metrics import accuracy_score, precision_score, recall_score
from time import time
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score
from sklearn.linear_model import LogisticRegression
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.svm import SVC
from sklearn.ensemble import GradientBoostingClassifier
import joblib
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
from sklearn import neighbors, datasets
import pandas as pd
import warnings

from test.test import Foooo

if __name__ == '__main__':
    foo = Foooo()

    # Perform EDA and Explore the features using histograms
    # foo.visualization()

    # label encoding
    # foo.labels_encoding()

    # get training set and kFold configs
    # X, y, cv = foo.training_data_preparations(6, 2, 2, g=10)
    # X, y, cv = foo.training_data_preparations(8, 1, 1, g=10)

    # model debugging
    # name, clf = foo.get_best_lr(X, y, cv, display_param_selection=True)
    # y_pred, cost = foo.predict(clf)
    # dic = foo.metrics(y_pred)
    # print(name, " : ", dic, "cost:", cost)
    # name, clf = foo.get_best_gb(X, y, cv, display_param_selection=True)
    # name, clf = foo.get_best_rm(X, y, cv, display_param_selection=True)
    # name, clf = foo.get_best_mlp(X, y, cv, display_param_selection=True)
    # name, clf = foo.get_best_svm(X, y, cv, display_param_selection=True)

    foo.visualization()
    foo.labels_encoding()
    foo.model_selection(6, 2, 2, g=10)

    # # Decision Tree
    # name, clf = foo.get_best_gb(foo.X_train, foo.y_train)
    # cross_val_score : https://scikit-learn.org/stable/modules/model_evaluation.html#scoring-parameter
    # score = cross_val_score(clf, train, target, cv=k_fold, n_jobs=3, scoring='accuracy')
    # print(score)

    pass
