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
    def print_title():
        print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" %
              ("model", "mean", "std", "accuracy", "precision", "recall", "latency"))


    def print_result(tup):
        name, model, r = tup
        print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" %
              ("%s avg" % name, "%.3f" % r[0], "", "%.3f" % r[2], "%.3f" % r[3], "%.3f" % r[4], "%.3f" % r[5]))


    def validate(self, cv, X, y):
        y_pred, cost = self.predict(cv, X)
        # collect params
        mean = round(cv.cv_results_['mean_test_score'][cv.best_index_], 3)
        std = round(cv.cv_results_['std_test_score'][cv.best_index_] * 2, 3)
        params = cv.cv_results_['params'][cv.best_index_]
        accuracy = round(accuracy_score(y, y_pred), 3)
        precision = round(precision_score(y, y_pred, average='macro'), 3)
        recall = round(recall_score(y, y_pred, average='macro'), 3)
        return mean, std, accuracy, precision, recall, cost


    def aFunc(self, get_best_model, ptr, pv, ptt, g=10, r=10, open_display=False):
        if open_display:
            print_title()

        buffer = []
        name = None
        model = None
        for _ in range(r):
            X_train, y_train, X_valid, y_valid = \
                self.valid_data_proportion(ptr, pv, ptt, g=g, seed=random.randint(1, 1000), open_display=False)
            cv = self.prepare_kfold_cross_validator(open_display=False)
            name, model = get_best_model(X_train, y_train, cv, display_param_selection=False)
            tup = validate(self, model, X_valid, y_valid)
            (mean, std, accuracy, precision, recall, cost) = tup
            buffer.append(np.array(tup))

            if open_display:
                print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" %
                      (name, mean, "+/-%.3f" % std, accuracy, precision, recall, cost))
                # fmt_str = "[{}] : model best score {} (+/-{}) for {}. Validation result: a={},p={},r={}, cost: {} "
                # print(fmt_str.format(name, mean, std, params, accuracy, precision, recall, cost))

        r = np.array(buffer).mean(axis=0)

        if open_display:
            print_result((name, model, r))
            print("")
        return name, model, r


    foo = Foooo()
    # foo.visualization()
    foo.labels_encoding(open_display=False)

    lst = [np.array((6, 2, 2, 10, 1)), np.array((8, 1, 1, 10, 1))]
    for i, (tr, v, tt, grp, interval) in enumerate(lst):
        foo.test_data_proportion(tr, v, tt, g=grp, seed=999, open_display=True)

        arr = [aFunc(foo, foo.get_best_lr, tr, v, tt, g=grp, r=interval, open_display=True),
               aFunc(foo, foo.get_best_svm, tr, v, tt, g=grp, r=interval, open_display=True),
               aFunc(foo, foo.get_best_mlp, tr, v, tt, g=grp, r=interval, open_display=True),
               aFunc(foo, foo.get_best_rf, tr, v, tt, g=grp, r=interval, open_display=True),
               aFunc(foo, foo.get_best_gb, tr, v, tt, g=grp, r=interval, open_display=True)]

        print("Now the best model is")
        best_model_name = None
        best_model = None
        best_accuracy = 0.0
        print_title()
        for _, tup in enumerate(arr):
            print_result(tup)
            name = tup[0]
            cv = tup[1]
            accuracy = tup[2][3]
            if accuracy > best_accuracy:
                best_accuracy = accuracy
                best_model = cv
                best_model_name = name
        print("The best model is {}\n".format(best_model_name))

        print("Apply the test dataset on the best model {}".format(best_model_name))
        params = validate(foo, best_model, foo.X_test, foo.y_test)
        print_title()
        print_result((best_model_name, best_model, params))
        print("The accuracy of the best model is {} with sample proportion {}/{}/{}\n".format(params[3], tr, v, tt))
    #
    pass
