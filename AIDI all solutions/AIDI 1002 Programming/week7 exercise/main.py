import sys

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns;

sns.set()  # for plot styling
import numpy as np
import sklearn

from sklearn.metrics.pairwise import euclidean_distances

# clustering libraries
from sklearn.cluster import AgglomerativeClustering
from sklearn.cluster import KMeans

# alternative scipy implementation for clustering
from scipy.cluster.hierarchy import linkage, fcluster, dendrogram

# for scaling numpy array
from sklearn.preprocessing import StandardScaler

givenDec = lambda gdVal: float('%.1f' % gdVal)  # 1 digit

my_data = pd.read_csv('chip_dataset.csv')

# drop unused column
df = my_data.drop(['Unnamed: 0', 'FP16 GFLOPS', 'FP32 GFLOPS', 'FP64 GFLOPS'], axis=1)

df['year'] = pd.DatetimeIndex(df['Release Date']).year
df['month'] = pd.DatetimeIndex(df['Release Date']).month
df = df.drop(['Release Date'], axis=1)
df = df.drop(df[df["year"].isnull()].index, axis=0)
col = "TDP (W)"
median = df[col].quantile(0.5)
df[col] = df[col].fillna(median)
col = "Die Size (mm^2)"
median = df[col].quantile(0.5)
df[col] = df[col].fillna(median)
col = "Transistors (million)"
median = df[col].quantile(0.5)
df[col] = df[col].fillna(median)
col = "Process Size (nm)"
df = df.drop(df[df[col].isnull()].index, axis=0)
df.reset_index(inplace=True, drop=True)

from sklearn.preprocessing import LabelEncoder

enc = LabelEncoder()

for col in df.columns:
    if df[col].dtype == "object":
        df[col] = enc.fit_transform(df[col])

# import category_encoders as ce
# from sklearn.preprocessing import RobustScaler
# encoder = ce.OneHotEncoder()
# X_train = encoder.fit_transform(X_train)
# X_test = encoder.transform(X_test)
# scaler = RobustScaler()
# X_train = scaler.fit_transform(X_train)
# X_test = scaler.transform(X_test)

from matplotlib import pyplot
from sklearn.preprocessing import MinMaxScaler, StandardScaler


def scaling(f, col_idx, action=None, plot=False):
    c = f.columns[col_idx]
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


i = 0
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 1
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 2
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='log', plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 3
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='log', plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 4
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='log', plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 5
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='log', plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 6
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='log', plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 7
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 8
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 9
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='minmax', plot=False)
i = 10
tmp = scaling(df, i, plot=False)
tmp = scaling(df, i, action='minmax', plot=False)

import random
from sklearn.ensemble import IsolationForest
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.decomposition import PCA


# def outlier_removal(x, col_y, labels, protected_labels=np.array([]), outliers_fraction=0.01, plot=False):
#     r = random.randint(1, 10000)
#     #         if plot:
#     #             print("random_state=%d" % r)
#     clf = IsolationForest(random_state=9398, max_samples=0.99, bootstrap=False, n_estimators=250,
#                           contamination=outliers_fraction)
#     tmpdf = x.copy(deep=True)
#     tmpdf['result'] = clf.fit_predict(x)
#     tmpdf.loc[(tmpdf['result'] == -1) & (tmpdf[col_y].isin(protected_labels)), 'result'] = 1
#
#     if plot:
#         #             f = np.mean(clf.score_samples(x))
#         #             print("\nscorer_f : %.6f, rand_seed: %d" % (f, r))
#         x = PCA().fit_transform(x)
#         indices_norm = tmpdf[tmpdf['result'] == 1].index
#         indices_iso = tmpdf[tmpdf['result'] == -1].index
#         x1 = np.delete(x, indices_iso, axis=0)
#         x2 = np.delete(x, indices_norm, axis=0)
#         c1 = np.delete(labels, indices_iso)
#
#         _, ax = plt.subplots(1, 1, figsize=(8, 8))
#         ax = plt.axes(projection='3d', elev=30, azim=60)
#         ax.scatter3D(x1[:, 0], x1[:, 1], x1[:, 2], c=c1, cmap=plt.cm.Set1, edgecolor="k", s=40, alpha=.9, )
#         ax.scatter3D(x2[:, 0], x2[:, 1], x2[:, 2], color='r', marker='x', edgecolor="k", s=40, alpha=.9, )
#         ax.set_title("Visualizations on the first three PCA directions")
#         ax.set_xlabel("1st eigenvector")
#         ax.w_xaxis.set_ticklabels([])
#         ax.set_ylabel("2nd eigenvector")
#         ax.w_yaxis.set_ticklabels([])
#         ax.set_zlabel("3rd eigenvector")
#         ax.w_zaxis.set_ticklabels([])
#         plt.show()
#     return tmpdf.drop(indices_iso, axis=0).drop(['result'], axis=1).reset_index(drop=True)

import random
from sklearn.ensemble import IsolationForest
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.decomposition import PCA

def outlier_removal(x, col_y, labels, protected_labels=np.array([]), outliers_fraction=0.01, plot=False):
    r = random.randint(1, 10000)
    if plot:
        print("random_state=%d" % r)
    clf = IsolationForest(random_state=r, max_samples=0.99, bootstrap=False, n_estimators=250, contamination=outliers_fraction)
    tmpdf = x.copy(deep=True)
    tmpdf['result'] = clf.fit_predict(tmpdf)
    tmpdf.loc[(tmpdf['result'] == -1) & (tmpdf[col_y].isin(protected_labels)), 'result'] = 1

    if plot:
#             f = np.mean(clf.score_samples(x))
#             print("\nscorer_f : %.6f, rand_seed: %d" % (f, r))
        px = PCA().fit_transform(x)
        indices_norm = tmpdf[tmpdf['result'] == 1].index
        indices_iso = tmpdf[tmpdf['result'] == -1].index
        x1 = np.delete(px, indices_iso, axis=0)
        x2 = np.delete(px, indices_norm, axis=0)
        c1 = np.delete(labels, indices_iso)

        _, ax = plt.subplots(1, 1, figsize=(8, 8))
        ax = plt.axes(projection='3d', elev=30, azim=30)
        ax.scatter3D(x1[:, 0], x1[:, 1], x1[:, 2], c=c1, cmap=plt.cm.Set1, edgecolor="k", s=40, alpha=.5, )
        ax.scatter3D(x2[:, 0], x2[:, 1], x2[:, 2], color='r', marker='x', edgecolor="k", s=40, alpha=.9, )
        ax.set_title("Visualizations on the first three PCA components")
        ax.set_xlabel("1st eigenvector")
        ax.w_xaxis.set_ticklabels([])
        ax.set_ylabel("2nd eigenvector")
        ax.w_yaxis.set_ticklabels([])
        ax.set_zlabel("3rd eigenvector")
        ax.w_zaxis.set_ticklabels([])
        plt.show()
    return tmpdf.drop(tmpdf[tmpdf['result'] == -1].index, axis=0).drop(['result'], axis=1).reset_index(drop=True)


c = [1] * df.shape[0]
df = outlier_removal(df, 'Type', c, protected_labels=np.array([]), outliers_fraction=0.05, plot=True)


from scipy.stats import linregress
a = np.vstack((range(2, 16), SSE))
a = np.concatenate((a.T, np.array([[a.T[-1][0] + 1, a.T[-1][1]]])), axis=0).T
t1 = a[:, :-1].T
t2 = a[:, 1:].T
slopes = [linregress(t1[i], t2[i])[0] for i in range(a.shape[0])]
slope_diff = np.diff(slopes)

plt.figure(figsize=(12,6))
plt.plot(a[0], a[1], marker="*")
plt.plot(a[0][idx], a[1][idx], marker="o")
plt.xlabel('Number of clusters')
plt.ylabel('Inertia')
plt.title('Elbow Method For Optimal k is %s' % str(idx + 1) )

print("The optimal cluster number is **%s** due to the observation on elbow plot." % str(idx + 1))