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
        self.y_valid = None
        self.y_train = None
        self.X_valid = None
        self.X_train = None
        self.y_test = None
        self.y_modeling = None
        self.X_test = None
        self.X_modeling = None
        self.df = pd.read_csv('./../data/winequality-red.csv')
        self.c_label = 'quality'
        self.dfx = self.df.drop(self.c_label, axis=1)
        self.dfy = self.df[self.c_label]

    def exploratory_data_analysis(self):
        print("[EDA] data info")
        self.df.info()

        is_there_any_null_values = self.df.isnull().values.any()
        print("[EDA] is there any null values: ", is_there_any_null_values)
        if is_there_any_null_values:
            exit(1)
        print("[EDA] data description: ", self.df.describe())

        # feature correlations heatmap
        f, ax = plt.subplots(figsize=(10, 10))
        sns.heatmap(self.df.drop('quality', axis=1).corr(), annot=True, linewidths=.5, fmt='.1f', ax=ax)

        # feature selection method 1
        le = VarianceThreshold()
        tmp = le.fit_transform(self.dfx)
        return

    def feature_importance(self):
        clf = RandomForestClassifier(n_estimators=10)
        clf.fit(self.dfx, self.dfy)
        feat_importance = pd.DataFrame(clf.feature_importances_, index=self.dfx.columns, columns=["Importance"])
        feat_importance.sort_values(by='Importance', ascending=False, inplace=True)
        feat_importance.plot(kind='bar')
        return

    def test_data_proportion(self, ptr=8, pv=1, ptt=1, g=10, seed=999, open_display=False):
        if ptr + pv + ptt != g:
            print("Abort: train proportion + valid proportion + src proportion != ", g)
            exit(0)
        X = self.dfx.to_numpy()
        y = self.dfy.to_numpy()
        self.X_modeling, self.X_test, self.y_modeling, self.y_test = \
            train_test_split(X, y, test_size=ptt / g, random_state=seed)
        if open_display:
            print("X_modeling {}, y_modeling {}\nX_test {}, y_test {}\n"
                  .format(self.X_modeling.shape, self.y_modeling.shape,
                          self.X_test.shape, self.y_test.shape))
        return

    def valid_data_proportion(self, ptr=8, pv=1, ptt=1, g=10, seed=999, open_display=False):
        if ptr + pv + ptt != g:
            print("Abort: train proportion + valid proportion + src proportion != ", g)
            exit(0)
        self.X_train, self.X_valid, self.y_train, self.y_valid = \
            train_test_split(self.X_modeling, self.y_modeling, test_size=pv / (ptr + pv), random_state=seed)
        if open_display:
            print("X_train {}, y_train {}\nX_valid {}, y_valid {}\nX_test {}, y_test {}\n"
                  .format(self.X_train.shape, self.y_train.shape,
                          self.X_valid.shape, self.y_valid.shape,
                          self.X_test.shape, self.y_test.shape))
            print("see details:")
            print("X_train: ", self.X_train[:3, :])
            print("X_valid: ", self.X_valid[:3, :])
            print("X_test: ", self.X_test[:3, :])
        return self.X_train, self.y_train, self.X_valid, self.y_valid

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

    @staticmethod
    def print_title():
        print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" %
              ("model", "mean", "std", "accuracy", "precision", "recall", "latency"))

    @staticmethod
    def print_result(tup):
        name, model, r = tup
        print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" %
              ("%s" % name, "%.3f" % r[0], "", "%.3f" % r[2], "%.3f" % r[3], "%.3f" % r[4], "%.3f ms" % r[5]))

    @staticmethod
    def predict(model, X):
        start = time()
        y_pred = model.predict(X)
        cost = (time() - start) * 1000
        return y_pred, round(cost, 3)

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

    def prepare_kfold_cross_validator(self, open_display=False):
        # see idea： https://scikit-learn.org/stable/modules/cross_validation.html
        k = 5  # 5 folds as default
        c1 = self.c_label
        c2 = 'groups'
        # loops = math.ceil(self.y_train.shape[0] / k)
        # self.groups = np.repeat(np.arange(5), [loops], axis=0).reshape(5, loops).T.flatten()
        df = pd.DataFrame(self.X_train)
        df[c1] = self.y_train
        df = df.sort_values([c1], ascending=True)
        df = df.reset_index(drop=True, inplace=False)
        df[c2] = df.apply(lambda x: x.name % k, axis=1)
        df = df.sort_values([c2, c1], ascending=True)
        X = df.drop([c1, c2], axis=1).to_numpy()
        y = df[c1].to_numpy()
        grp = df[c2].to_numpy()

        cv = KFold(k)
        if open_display:
            # visualization
            fig, ax = plt.subplots()
            self.__plot_cv_indices(cv, X, y, grp, ax, k)  # training will sequentially access each shuffled group
            plt.show()
        return cv

    @staticmethod
    # see: https://scikit-learn.org/stable/auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py
    def __plot_cv_indices(cv, X, y, group, ax, n_splits, lw=10):
        """Create a sample plot for indices of a cross-validation object."""

        ii = 0
        # Generate the training/testing visualizations for each CV split
        for ii, (tr, tt) in enumerate(cv.split(X=X, y=y, groups=group)):
            # Fill in indices with the training/src groups
            indices = np.array([np.nan] * len(X))
            indices[tt] = 1
            indices[tr] = 0

            # Visualize the results
            ax.scatter(
                range(len(indices)),
                [ii + 0.5] * len(indices),
                c=indices,
                marker="_",
                lw=lw,
                cmap=plt.cm.coolwarm,
                vmin=-0.2,
                vmax=1.2,
            )

        # Plot the data classes and groups at the end
        ax.scatter(range(len(X)), [ii + 1.5] * len(X), c=y, marker="_", lw=lw, cmap=plt.cm.Paired)
        ax.scatter(range(len(X)), [ii + 2.5] * len(X), c=group, marker="_", lw=lw, cmap=plt.cm.Paired)

        # Formatting
        yticklabels = list(range(n_splits)) + ["iris spices", "random group"]
        ax.set(
            yticks=np.arange(n_splits + 2) + 0.5,
            yticklabels=yticklabels,
            xlabel="Sample index",
            ylabel="CV iteration",
            ylim=[n_splits + 2.2, -0.2],
            xlim=[0, group.shape[0]],
        )
        ax.set_title("{} : {}".format(type(cv).__name__, "training will sequentially access each shuffled group"),
                     fontsize=15)
        return ax

if __name__ == '__main__':
    foo = RedWine()
