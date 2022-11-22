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
from pyclustering.cluster.kmeans import kmeans
from pyclustering.utils.metric import distance_metric, type_metric
from pyclustering.cluster.center_initializer import kmeans_plusplus_initializer

# %matplotlib
# %matplotlib inline
warnings.filterwarnings("ignore")
pd.set_option('display.max_columns', 30)
pd.set_option('display.width', 2000)


class Foo:
    def __init__(self, f, lb):
        self.df = f
        self.lb = lb
        self.X, self.y = None, None

    def get_dfx(self):
        if self.X is None:
            self.X = self.df.drop([self.lb], axis=1)
        return self.X

    def get_dfy(self):
        if self.y is None:
            self.y = self.df[self.lb]
        return self.y

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
            sns.histplot(tmp, kde=True, color=color)
            plt.title("\"%s\" scaling:%s, (%.2f, %.2f)" % (c, action, tmp.min(), tmp.max()))
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

    def onehot_encoding(self, x_train, x_test):
        X = self.get_dfx()
        categorical_data = [var for var in X.columns if X[var].dtype == 'O']

        encoder = ce.OneHotEncoder(cols=categorical_data)
        x_train = encoder.fit_transform(x_train)
        x_test = encoder.transform(x_test)

        scaler = RobustScaler()
        x_train = scaler.fit_transform(x_train)
        x_test = scaler.transform(x_test)
        return x_train, x_test


class Driver:
    def __init__(self, f, lb, testing=True, frac=0.01, test_split_size=0.1):
        self.foo = Foo(f, lb)
        if testing:
            self.foo.label_encoding()
            self.foo.df = self.foo.df.sample(frac=frac, replace=False, random_state=0)
        r = random.randint(1, 10000)
        print("test site split random_state : %d" % r)
        self.X = self.foo.get_dfx()
        self.y = self.foo.get_dfy()
        self.df = self.foo.df.copy(deep=True)
        self.X_train, self.X_test, self.y_train, self.y_test = \
            train_test_split(self.X, self.y, test_size=test_split_size, random_state=r, stratify=self.y)
        if not testing:
            self.X_train, self.X_test = self.foo.onehot_encoding(self.X_train, self.X_test)
        print("sample size: %s" % str(self.foo.df.shape))
        print("training data size: %s" % str(self.X_train.shape))

    pass

    def model_select(self, results):
        print("Now the best model is")
        best_model_name = None
        best_accuracy = 0.0
        self.__print_title()
        for _, tup in enumerate(results):
            self.__print_result(tup)
            name = tup[0]
            accuracy = tup[1][2]
            if accuracy > best_accuracy:
                best_accuracy = accuracy
                best_model_name = name

        algo = best_model_name.split(' ')[0]
        print(
            "%s received the highest average performance with accuracy %.4f. Therefore %s is the most suitable model.\n" % (
                algo, best_accuracy, algo))

    def evaluating(self, callable_, verbose=0):
        self.__print_title()
        buffer = []
        name = None
        # pred_lst = []
        for _ in range(5):
            name, clf = callable_(self.X_train, self.y_train,
                                  random_state=random.randint(1, 10000), verbose=verbose)
            start = time()
            y_pred = clf.predict(self.X_test)
            # pred_lst.append(y_pred)
            cost = (time() - start) * 1000
            # tmp_params = clf.cv_results_['params'][clf.best_index_]
            tup = (
                round(clf.cv_results_['mean_test_score'][clf.best_index_], 3),
                round(clf.cv_results_['std_test_score'][clf.best_index_] * 2, 3),
                round(accuracy_score(self.y_test, y_pred), 3),
                round(precision_score(self.y_test, y_pred, average='macro'), 3),
                round(recall_score(self.y_test, y_pred, average='macro'), 3),
                round(cost, 3),
            )
            buffer.append(np.array(tup))
            self.__print_result((name, tup))
        tup = np.array(buffer).mean(axis=0)
        self.__print_result(("%s avg" % name, tup))
        print()
        # self.df[name] = pd.DataFrame(pred_lst).mode().values.flatten()
        return "%s avg" % name, tup

    @staticmethod
    def __print_title():
        print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" % (
            "model", "mean", "std", "accuracy", "precision", "recall", "latency"))

    @staticmethod
    def __print_result(tup):
        name, r = tup
        if name.find("avg") >= 0:
            std = ""
        else:
            std = "+/-%.3f" % r[1]
        print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" % (
            "%s" % name, "%.3f" % r[0], std, "%.3f" % r[2], "%.3f" % r[3], "%.3f" % r[4], "%.3f ms" % r[5]))

    def evaluating_model(self, clf):
        pred = clf.predict(self.X_test)
        print('Training set score: {:.4f}'.format(clf.score(self.X_train, self.y_train)))
        print('Test set score: {:.4f}'.format(clf.score(self.X_test, self.y_test)))
        print('Model accuracy score: {0:0.4f}'.format(accuracy_score(self.y_test, pred)))
        print(classification_report(self.y_test, pred))
        pass


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

    def labeling_data(self, k):
        self.df = self.X.copy(deep=True)
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

    def plot3d(self, ax, x, labels):
        ax.scatter3D(x[:, 0],
                     x[:, 1],
                     x[:, 2],
                     c=labels,
                     cmap='Paired',  # 'prism', # 'Set1', #
                     edgecolor="k",
                     s=40,
                     alpha=.9
                     )
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


df = pd.read_csv('./Mall_Customers.csv')
df.info()
df['Genre'] = LabelEncoder().fit_transform(df['Genre'])
X = df.drop(['CustomerID'], axis=1)

cv = ClassifierVisualization(X)
df_labeled = cv.labeling_data(3)
cv.visualize_clusters()

i = None


# go = Driver(df_labeled, 'Labels', testing=False, test_split_size=0.1)
# arr = [
#     go.evaluating(go.foo.train_DT, verbose=0),
#     # go.evaluating(go.foo.train_RF, verbose=0),
#     # go.evaluating(go.foo.train_LR, verbose=0),
#     # go.evaluating(go.foo.train_NB, verbose=0),
# ]



foo = KmeansPlot()


kmeans_visualization(X, 2)


