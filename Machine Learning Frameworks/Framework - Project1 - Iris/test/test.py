# coding=utf-8
import math
import random
from time import time
import pandas as pd
import numpy as np
from enum import Enum
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
import seaborn as sns
import joblib
from sklearn.preprocessing import LabelEncoder
from sklearn.datasets import load_iris
from sklearn import neighbors, datasets
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.linear_model import LogisticRegression
from sklearn.neural_network import MLPClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn import metrics
from sklearn.metrics import accuracy_score, precision_score, recall_score
from sklearn.model_selection import KFold
# %matplotlib

import warnings

warnings.filterwarnings("ignore")

pd.set_option('display.max_columns', 20)
pd.set_option('display.width', 1000)


class IrisColumns(Enum):
    f1 = 'f1'
    f2 = 'f2'
    f3 = 'f3'
    f4 = 'f4'
    label = 'label'


class Foooo:
    def __init__(self):
        # self.iris = load_iris()
        self.groups = None
        self.y_valid = None
        self.y_train = None
        self.X_valid = None
        self.X_train = None
        self.y_test = None
        self.y_modeling = None
        self.X_test = None
        self.X_modeling = None
        columns = [c.value for c in IrisColumns]
        self.iris = pd.read_csv('./data/iris.data.csv', header=None, names=columns)

    def visualizations_on_features(self, val):
        g = sns.FacetGrid(self.iris, col=IrisColumns.label.value, margin_titles=True)
        g.map(sns.histplot, val)
        g.figure.subplots_adjust(top=.8)
        g.fig.suptitle("Histogram plot of feature %s of Iris dataset" % val, y=1, size=15)

    def visualization(self):
        self.visualizations_on_features(IrisColumns.f1.value)
        self.visualizations_on_features(IrisColumns.f2.value)
        self.visualizations_on_features(IrisColumns.f3.value)
        self.visualizations_on_features(IrisColumns.f4.value)

        g = sns.PairGrid(self.iris, hue=IrisColumns.label.value)
        g.map_diag(sns.histplot)
        g.map_offdiag(sns.scatterplot)
        g.add_legend()
        g.figure.subplots_adjust(top=.96)
        g.fig.suptitle("the distribution of Iris features in scatter plot and histogram plot by categories", y=0.99,
                       size=16)
        pass

    @staticmethod
    # see: https://scikit-learn.org/stable/auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py
    def __visualize_groups_after_labels_encoding__(labels):
        # Visualize dataset groups
        fig, ax = plt.subplots()
        ax.scatter(
            range(len(labels)),
            [0.5] * len(labels),
            c=labels,
            marker="_",
            lw=50,
            cmap=plt.cm.Paired,
        )
        ax.set(
            ylim=[0, 1],
            yticks=[0.5],
            yticklabels=["Label\nGroups"],
            xlabel="Sample Size",
        )
        plt.suptitle("Label Proportions")
        plt.show()

    def labels_encoding(self, open_display=False):
        if open_display:
            print("Before encoding: \n", self.iris)
        # Encode the target variable ie convert it to numeric type
        encoder = LabelEncoder()
        target = encoder.fit_transform(self.iris[IrisColumns.label.value].to_numpy())
        self.iris[IrisColumns.label.value] = target
        if open_display:
            print("\nAfter encoding: \n", self.iris)
            self.__visualize_groups_after_labels_encoding__(target)

    @staticmethod
    def is_close(a, b, rel_tol=1e-09, abs_tol=0.0):
        return abs(a - b) <= max(rel_tol * max(abs(a), abs(b)), abs_tol)

    @staticmethod
    # see: https://scikit-learn.org/stable/auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py
    def __plot_cv_indices(cv, X, y, group, ax, n_splits, lw=10):
        """Create a sample plot for indices of a cross-validation object."""

        ii = 0
        # Generate the training/testing visualizations for each CV split
        for ii, (tr, tt) in enumerate(cv.split(X=X, y=y, groups=group)):
            # Fill in indices with the training/test groups
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

    @staticmethod
    # see : https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html
    def __k_fold_first_sample__():
        from sklearn.model_selection import KFold
        X = np.array([[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4]])
        y = np.array([1, 2, 3, 4, 5, 6])
        kf = KFold(n_splits=3, shuffle=True)
        # get_n_splits
        kf.get_n_splits(X)  # 给出K折的折数，输出为2
        for train_index, test_index in kf.split(X):
            print("TRAIN:", train_index, "TEST:", test_index)
        # split()
        for train_index, test_index in kf.split(X):
            print("TRAIN:", train_index, "TEST:", test_index)

    def test_data_proportion(self, ptr=8, pv=1, ptt=1, g=10, seed=999, open_display=False):
        """
        :param ptr: proportion_train
        :param pv: proportion_valid:
        :param ptt: proportion_test:
        :param g: for GroupKFold group numbers
        :param seed: restate random seed
        :param open_display: open print for debug
        :return:
        """
        if ptr + pv + ptt != g:
            print("Abort: train proportion + valid proportion + test proportion != ", g)
            exit(0)
        col_t = IrisColumns.label.value
        X = self.iris.drop([col_t], axis=1).to_numpy()
        y = self.iris[col_t].to_numpy()
        self.X_modeling, self.X_test, self.y_modeling, self.y_test = \
            train_test_split(X, y, test_size=ptt / g, random_state=seed)
        if open_display:
            print("X_modeling {}, y_modeling {}\nX_test {}, y_test {}\n"
                  .format(self.X_modeling.shape, self.y_modeling.shape,
                          self.X_test.shape, self.y_test.shape))
        pass

    def valid_data_proportion(self, ptr=8, pv=1, ptt=1, g=10, seed=999, open_display=False):
        if ptr + pv + ptt != g:
            print("Abort: train proportion + valid proportion + test proportion != ", g)
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

    def prepare_kfold_cross_validator(self, open_display=False):
        # see idea： https://scikit-learn.org/stable/modules/cross_validation.html
        k = 5  # 5 folds as default
        c1 = IrisColumns.label.value
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
    def predict(model, X):
        start = time()
        y_pred = model.predict(X)
        cost = (time() - start) * 1000
        return y_pred, round(cost, 3)

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


if __name__ == '__main__':
    foo = Foooo()
