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

from xgboost import *
from scipy.stats import normaltest
from sklearn.svm import SVC, SVR
from sklearn.tree import DecisionTreeClassifier
# from sklearn.metrics import *
from sklearn.cluster import *
from sklearn.ensemble import *
from sklearn.datasets import load_digits, make_hastie_10_2
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.preprocessing import *
from sklearn.decomposition import *
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import *
from sklearn.feature_selection import *
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

# %matplotlib
# %matplotlib inline
warnings.filterwarnings("ignore")
pd.set_option('display.max_columns', 30)
pd.set_option('display.width', 2000)


class Foo:
    def __init__(self):
        self.df = pd.read_excel('./data/Wholesale customers data.xlsx')
        self.cols = self.df.columns
        self.col_y = 'Channel'

    def get_X(self):
        return self.df.drop([self.col_y], axis=1).to_numpy()  # original X

    def get_y(self):
        return LabelEncoder().fit_transform(self.df[[self.col_y]].to_numpy())

    def feature_scaling(self, plot=False):
        #         i = 0
        #         self.df = foo.scaling(self.df, i, action='minmax', plot=False)
        i = 1
        self.df = foo.scaling(self.df, i, action='minmax', plot=False)
        for i, j in enumerate(foo.cols):
            if i >= 2:
                self.df = foo.scaling(self.df, i, action='log', plot=False)
                self.df = foo.scaling(self.df, i, action='minmax', plot=False)
        if plot:
            for i, j in enumerate(foo.cols):
                self.scaling(self.df, i, plot=True)

    def scaling(self, f, col_idx, action=None, plot=False):
        c = f.columns[col_idx]
        tmp = f[[c]]
        if action == 'log':
            tmp = np.log(tmp + 1)
            color = 'r'
        elif action == 'minmax':
            tmp = MinMaxScaler().fit_transform(tmp)
            color = 'g'
        elif action == 'standard':
            tmp = StandardScaler().fit_transform(tmp)
            color = 'b'
        else:
            color = 'k'

        if plot:
            plt.figure(figsize=(7, 2), dpi=70)
            sns.distplot(tmp, kde=True, color=color)
            plt.title("\"%s\" scaling:%s, (min:%.2f, max:%.2f)" % (c, action, tmp.min(), tmp.max()))
            plt.show()
        f[c] = tmp
        return f


if __name__ == '__main__':
    foo = Foo()  # coding=utf-8
import os
import math
import time
import joblib
import numpy as np
import pandas as pd
import random as rd
import seaborn as sns
import warnings
import matplotlib.pyplot as plt

from xgboost import *
from scipy.stats import normaltest
from sklearn import cluster
from sklearn.svm import SVC, SVR
from sklearn.tree import DecisionTreeClassifier
# from sklearn.metrics import *
from sklearn.cluster import *
from sklearn.ensemble import *
from sklearn.datasets import load_digits, make_hastie_10_2
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.preprocessing import *
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import *
from sklearn.feature_selection import *
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

# %matplotlib
# %matplotlib inline
warnings.filterwarnings("ignore")
pd.set_option('display.max_columns', 30)
pd.set_option('display.width', 2000)


class Foo:
    def __init__(self):
        self.df = pd.read_excel('./data/Wholesale customers data.xlsx')
        self.cols = self.df.columns
        self.col_y = 'Channel'

    def get_X(self, return_dataframe=False):
        f = self.df.drop([self.col_y], axis=1)
        if return_dataframe:
            return f
        else:
            return f.to_numpy()  # original X

    def get_y(self, return_dataframe=False):
        f = self.df[self.col_y]
        if return_dataframe:
            return f
        else:
            return LabelEncoder().fit_transform(f.to_numpy())

    def ref_cross_validation(self, plot=False):
        X = self.get_X()
        y = self.get_y()

        # Create the RFE object and compute a cross-validated score.
        svc = SVC(kernel="linear")
        # The "accuracy" scoring shows the proportion of correct classifications

        min_features_to_select = 1  # Minimum number of features to consider
        rfecv = RFECV(
            estimator=svc,
            step=1,
            cv=StratifiedKFold(5),
            scoring="accuracy",
            min_features_to_select=min_features_to_select,
        )
        rfecv.fit(X, y)

        if plot:
            print("Optimal number of features : %d" % rfecv.n_features_)

            # Plot number of features VS. cross-validation scores
            plt.figure()
            plt.xlabel("Number of features selected")
            plt.ylabel("Cross validation score (accuracy)")
            plt.plot(
                range(min_features_to_select,
                      len(rfecv.grid_scores_) + min_features_to_select
                      ),
                rfecv.grid_scores_,
            )
            plt.show()

        opt_X = rfecv.transform(X)
        return opt_X

    def feature_scaling(self, plot=False):
        #         i = 0
        #         self.df = foo.scaling(self.df, i, action='minmax', plot=False)
        i = 1
        self.df = foo.scaling(self.df, i, action='minmax', plot=False)
        for i, j in enumerate(foo.cols):
            if i >= 2:
                self.df = foo.scaling(self.df, i, action='log', plot=False)
                self.df = foo.scaling(self.df, i, action='minmax', plot=False)
        if plot:
            for i, j in enumerate(foo.cols):
                self.scaling(self.df, i, plot=True)

    @staticmethod
    def scaling(f, col_idx, action=None, plot=False):
        c = f.columns[col_idx]
        tmp = f[[c]]
        if action == 'log':
            tmp = np.log(tmp + 1)
            color = 'r'
        elif action == 'minmax':
            tmp = MinMaxScaler().fit_transform(tmp)
            color = 'g'
        elif action == 'standard':
            tmp = StandardScaler().fit_transform(tmp)
            color = 'b'
        else:
            color = 'k'

        if plot:
            plt.figure(figsize=(7, 2), dpi=70)
            sns.distplot(tmp, kde=True, color=color)
            plt.title("\"%s\" scaling:%s, (min:%.2f, max:%.2f)" % (c, action, tmp.min(), tmp.max()))
            plt.show()
        f[c] = tmp
        return f

    def outlier_removal(self, debug_log=False):
        def plot_outliers_1(iso_df, title):
            c3 = iso_df.columns[3]
            c4 = iso_df.columns[4]
            r31 = iso_df[iso_df['result'] == 1][[c3, c4]]
            r32 = iso_df[iso_df['result'] == -1][[c3, c4]]

            fig, ax = plt.subplots()
            ax.scatter(r31[c3], r31[c4], marker="o")
            ax.scatter(r32[c3], r32[c4], marker="x", color='r', linewidth=0.5)
            plt.title(title)
            plt.show()

        def plot_outliers_2(iso_df, title):
            c3 = iso_df.columns[3]
            c4 = iso_df.columns[4]
            r31 = iso_df[iso_df['tmp'] == 'remained_sample'][[c3, c4]]
            r32 = iso_df[iso_df['tmp'] == 'to_be_removed_sample'][[c3, c4]]
            r33 = iso_df[iso_df['tmp'] == 'novelty_sample'][[c3, c4]]

            fig, ax = plt.subplots()
            ax.scatter(r31[c3], r31[c4], marker="o")
            ax.scatter(r32[c3], r32[c4], marker="x", color='r', linewidth=0.5)
            ax.scatter(r33[c3], r33[c4], marker="*", color='orange')
            plt.title(title)
            plt.show()

        def scorer_f(estimator, X):
            return np.mean(estimator.score_samples(X))

        # # model.best_params_ :  {'bootstrap': False, 'contamination': 0.015, 'max_samples': 0.9, 'n_estimators': 50, 'n_jobs': 1, 'verbose': 1}
        # # tuned = {
        # # #          'n_estimators':[50,80,100,120,150,200,250,300],
        # #          'n_estimators':[200],
        # # #          'max_samples':['auto', 0.1,0.5,0.9,0.99],
        # #          'max_samples':[0.99],
        # # #          'contamination':['legacy', 'outo'],
        # #          'contamination':[0.015],
        # # #          'max_features':[1,2,3,4,5,6,7,8,9,10,11,12,13],
        # #          'max_features':[11],
        # # #          'bootstrap':[True,False],
        # #          'bootstrap':[False],
        # # #          'n_jobs':[None,1,2,3,4,5,6,7,8,10,15,20,25,30],
        # #          'n_jobs':[25],
        # # #          'verbose':[0,1,2,3,4,5,6,7,8,9,10],
        # #          'verbose':[5],
        # # #          'warm_start':[True,False],
        # #          'warm_start':[False],
        # #         }

        # isolation_forest = GridSearchCV(IsolationForest(), tuned, scoring=scorer_f)
        # best_model = isolation_forest.fit(dfx_scaling)
        # arr = best_model.predict(dfx_scaling)
        # print("model.best_params_ : ", best_model.best_params_)
        # print("scorer_f : ", scorer_f(clf, dfx_scaling))
        # arr = best_model.predict(dfx_scaling)

        self.dfx = self.get_X(return_dataframe=True)
        self.dfy = self.get_y(return_dataframe=True)
        self.c_label = self.col_y

        # find outliers
        r = random.randint(1, 10000)
        if debug_log:
            print("random_state=%d" % r)
        clf = IsolationForest(random_state=6366, max_samples=0.99, bootstrap=False, n_estimators=50, n_jobs=50)
        clf.fit(self.dfx)
        iforest_arr = clf.predict(self.dfx)
        dfx_if = self.dfx.copy(deep=True)
        dfx_if['result'] = iforest_arr

        dfx_recall = dfx_if
        if debug_log:
            print("sample size of label:\n%s\n" % pd.value_counts(self.dfy.to_numpy().flatten()))
        idx_outliers = dfx_recall[dfx_recall['result'] == -1].index
        if debug_log:
            print("sample size of outliers of label:\n%s\n" % pd.value_counts(self.dfy[idx_outliers]))
        dfx_recall[self.c_label] = self.dfy
        dfx_recall[(dfx_recall['result'] == -1) &
                   (dfx_recall[self.c_label] != 0)
                   ]['to_be_removed'] = 1
        idx_outliers = dfx_recall[(dfx_recall['result'] == -1) &
                                  (dfx_recall[self.c_label] != 0) &
                                  (dfx_recall[self.c_label] != 5)
                                  ].index
        if debug_log:
            print(
                "sample size of outliers of label, refuse category 0:\n%s\n" % pd.value_counts(self.dfy[idx_outliers]))
        dfx_recall['tmp'] = 'remained_sample'
        dfx_recall.loc[(dfx_recall['result'] == -1) &
                       (dfx_recall[self.c_label] != 0) & (
                               dfx_recall[self.c_label] != 5), 'tmp'] = 'to_be_removed_sample'
        dfx_recall.loc[(dfx_recall['result'] == -1) &
                       ((dfx_recall[self.c_label] == 0) | (dfx_recall[self.c_label] == 5)), 'tmp'] = 'novelty_sample'
        if debug_log:
            print("sample size of outliers to be removed:\n%s\n" % pd.value_counts(dfx_recall['tmp']))
        # remove final outliers
        df_rm_outliers = dfx_recall.drop(dfx_recall[dfx_recall['tmp'] == 'to_be_removed_sample'].index, axis=0)
        dfx_rmo = df_rm_outliers.drop([self.c_label], axis=1)
        dfy_rmo = df_rm_outliers[self.c_label]

        if debug_log:
            # plots
            f = scorer_f(clf, self.dfx)
            print("\nscorer_f : %.6f, rand_seed: %d" % (f, r))
            plot_outliers_1(dfx_if, 'iforest outliers')
            plot_outliers_2(dfx_recall, 'iforest outliers(rare label samples[RED])')
            plot_outliers_2(df_rm_outliers, 'iforest outliers(rare label samples remained')

            print(dfx_if[dfx_if.columns[3]].max(), dfx_if[dfx_if.columns[4]].max())
            print(dfx_recall[dfx_recall.columns[3]].max(), dfx_recall[dfx_recall.columns[4]].max())
            print(df_rm_outliers[df_rm_outliers.columns[3]].max(), df_rm_outliers[df_rm_outliers.columns[4]].max())
        self.dfx, self.dfy = dfx_rmo, dfy_rmo
        pass


if __name__ == '__main__':
    # reset data
    foo = Foo()
    foo.feature_scaling(plot=False)
    opt_X = foo.ref_cross_validation(plot=False)

    foo.outlier_removal(debug_log=True)

    i = 6
    # kmeans = KMeans(n_clusters=i, init='random', n_init=10, max_iter=300,
    #                 tol=0.1, verbose=0, random_state=None,
    #                 copy_x=True, algorithm='elkan').fit(foo.df)  # 'lloyd' or 'elkan'
    # labels = kmeans.labels_

    kmeans2 = MiniBatchKMeans(n_clusters=i, init='k-means++', max_iter=100,
                              batch_size=100, verbose=0, compute_labels=True, random_state=None,
                              tol=0.0, max_no_improvement=10, init_size=None,
                              n_init=3, reassignment_ratio=0.01).fit(foo.df)

    labels = kmeans2.compute_labels
    # labels
    # _, ax = plt.subplots(1, 1, figsize=(8, 8))
    # # ax.scatter(
    # #     X_reduced[:, 0],
    # #     X_reduced[:, 1],
    # #     X_reduced[:, 2],
    # #     c=labels,
    # # )
    # ax = plt.axes(projection='3d')
    # ax.scatter3D(X_reduced[:, 0], X_reduced[:, 1], X_reduced[:, 2], c=labels)
    # plt.show()
