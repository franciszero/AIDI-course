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
    def __init__(self):
        self.df0 = pd.read_excel('./german_credit_data.xlsx')
        self.df = self.df0.copy()

        self.cols_categorical = ['Sex', 'Housing', 'Purpose']
        self.cols_numerical = ['Age', 'Job', 'Credit amount', 'Duration']
        self.cols_numerical_skewing = ['Age', 'Credit amount', 'Duration']
        self.cols_drop_off = ['Saving accounts', 'Checking account']
        self.col_y = 'Risk'

        # clean rows with null values
        self.df = self.df0.drop(self.cols_drop_off, axis=1)
        # tmp = self.df[((self.df['Saving accounts'].isnull()) | (self.df['Checking account'].isnull()))]
        # self.df = self.df.drop(tmp.index, axis=0)
        # self.df = self.df.reset_index(drop=True, inplace=False)
        self.X = self.df.drop([self.col_y], axis=1)
        self.__label_encoding(self.col_y)
        self.y = self.df[self.col_y]

    def __null_value_visualization(self):
        print(self.df.isnull().any())
        plt.figure(figsize=(self.df.shape[1] / 2, 3), dpi=100)
        sns.heatmap(self.df.isnull(), cmap="viridis")

    XGBClassifier
    def feature_encoding(self):
        encoder = ce.OneHotEncoder(cols=self.cols_categorical)
        self.X = encoder.fit_transform(self.X)
        pass

    def onehot_encoding(self, x_train, x_test):
        X = self.X
        categorical_data = [var for var in X.columns if X[var].dtype == 'O']

        encoder = ce.OneHotEncoder(cols=categorical_data)
        x_train = encoder.fit_transform(x_train)
        x_test = encoder.transform(x_test)

        scaler = RobustScaler()
        x_train = scaler.fit_transform(x_train)
        x_test = scaler.transform(x_test)
        return x_train, x_test

    def feature_scaling(self, plot=False):
        for col in self.df.columns:
            if self.df[col].dtype != 'O':
                self.scaling(self.df, col, action=None, plot=plot)
                self.scaling(self.df, col, action='log', plot=plot)
                self.scaling(self.df, col, action='minmax', plot=plot)
        # for col in self.cols_numerical_skewing:
        #     self.scaling(self.df, col, plot=plot)
        #     self.scaling(self.df, col, action='log', plot=plot)
        # for col in self.cols_numerical:
        #     self.scaling(self.df, col, action='minmax', plot=plot)
        # scaler = RobustScaler()
        # en_df = scaler.fit_transform(en_df)
        # # X_test = scaler.transform(X_test)
        # en_df
        pass

    def check_category(self):
        for _, col in enumerate(self.df.columns):
            print("Column Name:", col)
            print("Categorical display:")
            print(pd.value_counts(self.df[col]))
            print('-' * 100)

    def check_null(self):
        print(self.df.isnull().values.any())
        plt.figure(figsize=(8, 3), dpi=100)
        sns.heatmap(self.df.isnull(), cmap="viridis")

    def __label_encoding(self, c):
        self.df[c] = LabelEncoder().fit_transform(self.df[c])
        pass

    def label_encoding(self):
        # print("label encoding:")
        # print(self.df.head())
        for col in self.df.columns:
            if self.df[col].dtype == 'O':
                self.__label_encoding(col)
                # print("label encoding:%s\n%s" % (col, self.df.head()))
        pass

    @staticmethod
    def scaling(f, c, action=None, plot=False):
        tmp = f[[c]].copy()
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
            g = sns.displot(tmp, kde=True, color=color)
            g.fig.set_figwidth(7)
            g.fig.set_figheight(2)
            plt.title("\"%s\" scaling:%s, (min:%.2f, max:%.2f)" % (c, action, tmp.min(), tmp.max()))
            plt.show()
        f[c] = tmp
        return f

    @staticmethod
    def search_cv(model, params, fold, verbose=0):
        return RandomizedSearchCV(model, params, cv=fold, verbose=verbose, return_train_score=True, )
        # return RandomizedSearchCV(model, params, cv=fold, verbose=0,
        #                           scoring=scoring, refit=list(scoring.items())[0][0], return_train_score=True, )

    def train_LR(self, x, y, random_state=0, verbose=0):
        model = LogisticRegression()
        params = {
            'C': [0.001, 0.01, 0.1, 1, 10, 100, 1000, 1e4]
        }
        k_fold = StratifiedKFold(5, shuffle=True, random_state=random_state)
        clf = self.search_cv(model, params, k_fold, verbose=verbose)
        clf.fit(x, y)
        return "LR", clf

    def train_DT(self, x, y, random_state=0, verbose=0):
        model = DecisionTreeClassifier()
        params = {
            'max_depth': [2, 3, 5, 10, 20],
            'min_samples_leaf': [5, 10, 20, 50, 100],
            'criterion': ["gini", "entropy"]
        }
        k_fold = StratifiedKFold(5, shuffle=True, random_state=random_state)
        clf = self.search_cv(model, params, k_fold, verbose=verbose)
        clf.fit(x, y)
        return "DT", clf

    def train_NB(self, x, y, random_state=0, verbose=0):
        model = GaussianNB()
        params = {
            'var_smoothing': [1e-2, 1e-3, 1e-4, 1e-5, 1e-6, 1e-7, 1e-8, 1e-9, 1e-10, 1e-11, 1e-12, 1e-13, 1e-14, 1e-15]
        }
        k_fold = StratifiedKFold(5, shuffle=True, random_state=random_state)
        clf = self.search_cv(model, params, k_fold, verbose=verbose)
        clf.fit(x, y)
        return "NB", clf

    def train_RF(self, x, y, random_state=0, verbose=0):
        model = RandomForestClassifier()
        params = {
            'bootstrap': [True, False],
            'max_depth': [2, 4, 8, 16, 32],
            'max_features': ['auto', 'sqrt', 'log2'],
            'min_samples_leaf': [1, 2, 4],
            'min_samples_split': [2, 5, 10],
            'n_estimators': [10, 20, 50, 100, 200],
            'criterion': ['gini', 'entropy']
        }
        # scoring = {
        #     "Accuracy": make_scorer(accuracy_score),
        #     "mean_absolute_error": make_scorer(mean_absolute_error),
        #     "mean_squared_error": make_scorer(mean_squared_error),
        #     "r2_score": make_scorer(r2_score),
        # }
        k_fold = StratifiedKFold(5, shuffle=True, random_state=random_state)
        clf = self.search_cv(model, params, k_fold, verbose=verbose)
        clf.fit(x, y)
        return "RF", clf


foo = Foo()
foo.feature_encoding()


foo = Foo()
foo.data_cleaning()
foo.feature_encoding()
foo.scaling(foo.df, 'Age', action=None, plot=True)
foo.scaling(foo.df, 'Age', action='log', plot=True)
foo.scaling(foo.df, 'Age', action='minmax', plot=True)

foo.feature_scaling(plot=False)
foo.X = foo.df[foo.cols_numerical]


class ClassifierVisualization:
    def __init__(self, dfx):
        self.X = dfx
        self.y = None
        self.df = None
        self.target_name = 'Labels'
        pass

    # def clf_process(self, f, i, tol=0.01, iter=200, init='k-means++', algo='lloyd'):
    #     df1 = self.kmeans_process(f, i)
    #     lbs = df1['Labels']
    #     #     lbs = KMeans(n_clusters = i, init=init, n_init=10, max_iter=iter, tol=tol, verbose=0, random_state=0, copy_x=True, algorithm=algo).fit(f).labels_
    #     #     lbs = AgglomerativeClustering(linkage='single', n_clusters=i).fit(f).labels_
    #     #     lbs = SpectralClustering(n_clusters=i).fit(f).labels_
    #     #     lbs = OPTICS(min_samples=5,xi=0.001,min_cluster_size=0.3).fit(f).labels_
    #     #     lbs = DBSCAN(eps=1.5).fit(f).labels_

    @staticmethod
    def __scoring_plot(a, idx):
        fig, ax1 = plt.subplots(figsize=(12, 6))
        ax2 = ax1.twinx()
        ax1.plot(a[0], a[1], marker="*")
        ax1.plot(a[0][idx], a[1][idx], marker="o")
        plt.xlabel('Number of clusters')
        plt.ylabel('Inertia')
        plt.title('Silhouette Score For Optimal k is %s' % str(idx + 2))
        print("The optimal cluster number is **%s** due to the metric on Silhouette Score." % str(idx + 2))
        pass

    def create_clf(self, i, name='kmeans'):
        if name == 'kmeans':
            return KMeans(n_clusters = i, init='k-means++', n_init=10, max_iter=iter, tol=0.001, verbose=0,
                          random_state=0, copy_x=True, algorithm='full').fit(self.X)
        elif name == 'ac':
            return AgglomerativeClustering(linkage='single', n_clusters=i).fit(self.X)
        elif name == 'sc':
            return SpectralClustering(n_clusters=i).fit(self.X);
        else:
            return None

    def silhouette_scoring(self, clf_name='kmeans', plot=False):
        SIL = []
        for i in range(2, 16):
            clf = self.create_clf(i, name=clf_name)
            SIL.append(silhouette_score(self.X, clf.labels_))
        idx = np.argmax(SIL)
        a = np.vstack((range(2, 16), SIL))
        if plot:
            fig, ax1 = plt.subplots(figsize=(12, 6))
            ax2 = ax1.twinx()
            ax1.plot(a[0], a[1], marker="*")
            ax1.plot(a[0][idx], a[1][idx], marker="o")
            plt.xlabel('Number of clusters')
            plt.ylabel('Inertia')
            plt.title('Silhouette Score For Optimal k is %s' % str(idx + 2))
            print("The optimal cluster number is **%s** due to the metric on Silhouette Score." % str(idx + 2))
        pass

    def elbow_scoring(self, clf_name='kmeans', plot=False):
        SSE = []
        for i in range(2, 16):
            clf = self.create_clf(i, name=clf_name)
            SSE.append(clf.inertia_)

        a = np.vstack((range(2, 16), SSE))
        a = np.concatenate((a.T, np.array([[a.T[-1][0] + 1, a.T[-1][1]]])), axis=0).T
        t1 = a[:, :-1].T
        t2 = a[:, 1:].T
        slopes = [linregress(np.concatenate((np.array([t1[i]]), np.array([t2[i]])), axis=0).T)[0] for i in
                  range(t1.shape[0])]
        slope_diff = np.diff(slopes)
        idx = np.argmax(slope_diff) + 1
        if plot:
            fig, ax1 = plt.subplots(figsize=(12, 6))
            ax2 = ax1.twinx()
            ax1.plot(a[:, :-1][0], a[:, :-1][1], marker="*")
            ax2.plot(a[:, 1:-1][0], slope_diff, c="g", marker="*", linestyle=":", alpha=0.5)
            ax1.plot(a[0][idx], a[1][idx], marker="o")
            plt.xlabel('Number of clusters')
            plt.ylabel('Inertia')
            plt.title('Elbow Method For Optimal k is %s' % str(idx + 2))
            print("The optimal cluster number is **%s** due to the observation on elbow plot." % str(idx + 2))
        pass

    def labeling_data(self, k):
        from pyclustering.cluster.kmeans import kmeans
        self.df = self.X.copy()
        initial_centers = kmeans_plusplus_initializer(self.X, k).initialize()
        metric = distance_metric(type_metric.MANHATTAN)
        clf = kmeans(self.X, initial_centers, metric=metric)
        clf.process()
        clusters = clf.get_clusters()
        final_centers = clf.get_centers()
        for i in range(len(clusters)):
            self.df.loc[clusters[i], self.target_name] = i
        self.y = self.df['Labels']
        return self.df

    @staticmethod
    def plot3d(ax, x, labels):
        ax.scatter3D(x[:, 0], x[:, 1], x[:, 2], c=labels, edgecolor="k", s=40, alpha=.9, cmap='Paired')  # 'Set1'
        ax.set_title("Visualizations on the first three PCA components")
        ax.set_xlabel("1st eigenvector")
        ax.w_xaxis.set_ticklabels([])
        ax.set_ylabel("2nd eigenvector")
        ax.w_yaxis.set_ticklabels([])
        ax.set_zlabel("3rd eigenvector")
        ax.w_zaxis.set_ticklabels([])

    def visualize_clusters(self):
        px = PCA().fit_transform(self.X)
        fig = plt.figure(figsize=(18, 18), dpi=100)
        gs = GridSpec(3, 3, figure=fig)
        ax11 = fig.add_subplot(gs[0, 0], projection='3d', elev=0, azim=-45)
        ax12 = fig.add_subplot(gs[0, 1], projection='3d', elev=0, azim=45)
        ax13 = fig.add_subplot(gs[0, 2], projection='3d', elev=0, azim=135)
        ax21 = fig.add_subplot(gs[1, 0], projection='3d', elev=45, azim=-45)
        ax22 = fig.add_subplot(gs[1, 1], projection='3d', elev=45, azim=45)
        ax23 = fig.add_subplot(gs[1, 2], projection='3d', elev=45, azim=135)
        ax31 = fig.add_subplot(gs[2, 0], projection='3d', elev=90, azim=-45)
        ax32 = fig.add_subplot(gs[2, 1], projection='3d', elev=90, azim=45)
        ax33 = fig.add_subplot(gs[2, 2], projection='3d', elev=90, azim=135)

        self.plot3d(ax11, px, self.y)
        self.plot3d(ax12, px, self.y)
        self.plot3d(ax13, px, self.y)
        self.plot3d(ax21, px, self.y)
        self.plot3d(ax22, px, self.y)
        self.plot3d(ax23, px, self.y)
        self.plot3d(ax31, px, self.y)
        self.plot3d(ax32, px, self.y)
        self.plot3d(ax33, px, self.y)

        plt.show()
        pass


cv = ClassifierVisualization(foo.X)
# cv.elbow_scoring(clf_name='sc', plot=True)
# cv.labeling_data(2)
# cv.visualize_clusters()

SSE = []
for i in range(2, 16):
    c1 = KMeans(n_clusters = i, init='k-means++', n_init=10, max_iter=100, tol=0.001, verbose=0,
                 random_state=0, copy_x=True, algorithm='full').fit(cv.X)
    c2 = AgglomerativeClustering(linkage='single', n_clusters=i).fit(cv.X)
    c3 = SpectralClustering(n_clusters=i).fit(cv.X)
    clf = c1
    SSE.append(clf.inertia_)

a = np.vstack((range(2, 16), SSE))
a = np.concatenate((a.T, np.array([[a.T[-1][0] + 1, a.T[-1][1]]])), axis=0).T
t1 = a[:, :-1].T
t2 = a[:, 1:].T
slopes = [linregress(np.concatenate((np.array([t1[i]]), np.array([t2[i]])), axis=0).T)[0] for i in
          range(t1.shape[0])]
slope_diff = np.diff(slopes)
idx = np.argmax(slope_diff) + 1

fig, ax1 = plt.subplots(figsize=(12, 6))
ax2 = ax1.twinx()
ax1.plot(a[:, :-1][0], a[:, :-1][1], marker="*")
ax2.plot(a[:, 1:-1][0], slope_diff, c="g", marker="*", linestyle=":", alpha=0.5)
ax1.plot(a[0][idx], a[1][idx], marker="o")
plt.xlabel('Number of clusters')
plt.ylabel('Inertia')
plt.title('Elbow Method For Optimal k is %s' % str(idx + 2))
print("The optimal cluster number is **%s** due to the observation on elbow plot." % str(idx + 2))
