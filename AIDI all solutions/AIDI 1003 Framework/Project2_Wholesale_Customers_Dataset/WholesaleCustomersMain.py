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

    def feature_encoding(self):
        encoder = ce.OneHotEncoder(cols=self.cols_categorical)
        self.df = encoder.fit_transform(self.df)
        pass

    def onehot_encoding(self, x_train, x_test):
        categorical_data = [var for var in x_train.columns if x_train[var].dtype == 'O']

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

    def train_XGB(self, x, y, random_state=0, verbose=0):
        model = XGBClassifier(eval_metric='logloss')
        params = {
            "learning_rate": [0.001, 0.01, 0.1, 1],
            "max_depth": [2,4,6,8,10],
            "min_child_weight": range(1, 10),
            "gamma": np.arange(0, 0.7, 0.2),
            "colsample_bytree": np.arange(0.1, 1.1, 0.1),
            "n_estimators": [10,20,50,100,200,500]
        }
        k_fold = StratifiedKFold(5, shuffle=True, random_state=random_state)
        clf = self.search_cv(model, params, k_fold, verbose=verbose)
        clf.fit(x, y)
        return "XGB", clf

foo = Foo()
foo.feature_encoding()



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
