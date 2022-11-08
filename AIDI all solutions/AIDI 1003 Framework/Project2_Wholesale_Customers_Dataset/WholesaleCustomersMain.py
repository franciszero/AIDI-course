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
from time import time
from xgboost import *
from scipy.stats import normaltest
from sklearn.svm import SVC, SVR
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import *
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


make_score()

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

    def feature_scaling(self, masks=np.array([]), plot=False):
        i = 1
        self.df = foo.scaling(self.df, i, action='minmax', plot=False)
        for i, j in enumerate(foo.cols):
            if np.isin(i, masks, invert=False):  # not in
                continue
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

    @staticmethod
    def clustering_kmeans(df, n=1):
        return KMeans(n_clusters=n, init='random', n_init=10, max_iter=300, tol=0.0001, verbose=0, random_state=0,
                      copy_x=True, algorithm='full').fit(df).labels_

    def clustering_mean_shift(self):
        bandwidth = estimate_bandwidth(self.df, quantile=0.2, n_samples=500)
        return MeanShift(bandwidth=bandwidth, bin_seeding=True).fit(self.df).labels_

    def clustering_Hierarchical_Clustering(self):
        # 'ward', 'average', 'complete', 'single'
        return AgglomerativeClustering(linkage='single', n_clusters=6).fit(self.df).labels_

    def outlier_removal(self, x, labels, protected_labels=np.array([]), outliers_fraction=0.01, plot=False):
        r = random.randint(1, 10000)
        if plot:
            print("random_state=%d" % r)
        clf = IsolationForest(random_state=r, max_samples=0.99, bootstrap=False, n_estimators=250,
                              contamination=outliers_fraction)
        tmpdf = x.copy(deep=True)
        tmpdf['result'] = clf.fit_predict(x)
        tmpdf.loc[(tmpdf['result'] == -1) & (tmpdf[self.col_y].isin(protected_labels)), 'result'] = 1

        if plot:
            f = np.mean(clf.score_samples(x))
            print("\nscorer_f : %.6f, rand_seed: %d" % (f, r))

            x = PCA().fit_transform(x)
            indices_norm = tmpdf[tmpdf['result'] == 1].index
            indices_iso = tmpdf[tmpdf['result'] == -1].index
            x1 = np.delete(x, indices_iso, axis=0)
            x2 = np.delete(x, indices_norm, axis=0)
            c1 = np.delete(labels, indices_iso)

            _, ax = plt.subplots(1, 1, figsize=(8, 8))
            ax = plt.axes(projection='3d', elev=30, azim=60)
            ax.scatter3D(x1[:, 0], x1[:, 1], x1[:, 2], c=c1, cmap=plt.cm.Set1, edgecolor="k", s=40, alpha=.9, )
            ax.scatter3D(x2[:, 0], x2[:, 1], x2[:, 2], color='r', marker='x', edgecolor="k", s=40, alpha=.9, )
            ax.set_title("Visualizations on the first three PCA directions, k=6")
            ax.set_xlabel("1st eigenvector")
            ax.w_xaxis.set_ticklabels([])
            ax.set_ylabel("2nd eigenvector")
            ax.w_yaxis.set_ticklabels([])
            ax.set_zlabel("3rd eigenvector")
            ax.w_zaxis.set_ticklabels([])
            plt.show()
        return tmpdf.drop(tmpdf[(tmpdf['result'] == -1)].index, axis=0).drop(['result'], axis=1).reset_index(drop=True)

    @staticmethod
    def pca_plot(x, labels, figsize=(8, 8), elev=30, azim=60):
        x = PCA().fit_transform(x)
        _, ax = plt.subplots(1, 1, figsize=figsize)
        ax = plt.axes(projection='3d', elev=elev, azim=azim)
        ax.scatter3D(x[:, 0], x[:, 1], x[:, 2], c=labels, cmap=plt.cm.Set1, edgecolor="k", s=40, alpha=.9, )
        ax.set_title("Visualizations on the first three PCA directions")
        ax.set_xlabel("1st eigenvector")
        ax.w_xaxis.set_ticklabels([])
        ax.set_ylabel("2nd eigenvector")
        ax.w_yaxis.set_ticklabels([])
        ax.set_zlabel("3rd eigenvector")
        ax.w_zaxis.set_ticklabels([])
        plt.show()


if __name__ == '__main__':
    # prepare data
    foo = Foo()
    foo.feature_scaling(masks=np.array([]), plot=False)
    df = foo.df
    c = foo.clustering_kmeans(df)
    df = foo.outlier_removal(df, c, protected_labels=np.array([]), outliers_fraction=0.05, plot=True)

    SSE = []
    clf = AgglomerativeClustering(linkage='single', n_clusters=6)
    clf.fit(foo.df)
    SSE.append(clf.compute_distances)
    for i in range(2, 16):
        clf = AgglomerativeClustering(linkage='single', n_clusters=i)
        clf.fit(foo.df)
        SSE.append(clf.compute_distances)

    # converting the results into a dataframe and plotting them
    frame = pd.DataFrame({'Cluster': range(2, 16), 'SSE': SSE})
    plt.figure(figsize=(12, 6))
    plt.plot(frame['Cluster'], frame['SSE'], marker="*")
    plt.plot(frame['Cluster'][2], frame['SSE'][2], marker="o")
    plt.xlabel('Number of clusters')
    plt.ylabel('Inertia')
    plt.title('Elbow Method For Optimal k is 4')

    print("The optimal cluster number is **4** due to the observation on elbow plot.")

    opt_X = foo.ref_cross_validation(plot=False)

    model = XGBClassifier()
    params = {
        "learning_rate": np.arange(0, 1.1, 0.1),
        "max_depth": np.arange(1, 6, 2),
        "min_child_weight": range(1, 10),
        "gamma": np.arange(0, 0.7, 0.2),
        "colsample_bytree": np.arange(0.3, 1.1, 0.1),
        "n_estimators": np.arange(20, 201, 20)
    }
    scoring = {
        "Accuracy": make_scorer(accuracy_score),
        "mean_absolute_error": make_scorer(mean_absolute_error),
        "mean_squared_error": make_scorer(mean_squared_error),
        "r2_score": make_scorer(r2_score),
    }

    dfx = foo.get_X(return_dataframe=False)
    dfy = foo.get_y(return_dataframe=False)

    X_modeling, X_test, y_modeling, y_test = train_test_split(dfx, dfy, test_size=0.1, random_state=999, stratify=dfy)
    gs = RandomizedSearchCV(model, params, cv=5, verbose=1, scoring=scoring, refit=list(scoring.items())[0][0],
                            return_train_score=True, )
    gs.fit(X_modeling, y_modeling)

    start = time()
    y_pred = gs.predict(X_test)
    cost = (time() - start) * 1000
    print("r2_score           : %.3f" % r2_score(xgb1.y_test, y_pred))
    print("mean_absolute_error: %.3f" % mean_absolute_error(xgb1.y_test, y_pred))
    print("mean_squared_error : %.3f" % mean_squared_error(xgb1.y_test, y_pred))
    print("latency            : %.3f ms" % cost)

    X_modeling.shape, y_modeling.shape
