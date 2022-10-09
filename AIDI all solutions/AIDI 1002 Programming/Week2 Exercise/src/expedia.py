# coding=utf-8
import pandas as pd
import numpy as np
import matplotlib.dates as md
import matplotlib.pyplot as plt
from mpl_toolkits.axes_grid1 import host_subplot
import mpl_toolkits.axisartist as AA
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from sklearn.covariance import EllipticEnvelope
from sklearn.ensemble import IsolationForest
from sklearn.svm import OneClassSVM
from mpl_toolkits.mplot3d import Axes3D


# from pyemma import msm


def getDistanceByPoint(data, model):
    distance = pd.Series(np.zeros([len(data)], dtype=float))
    for i in range(0, len(data)):
        Xa = np.array(data.loc[i])
        Xb = model.cluster_centers_[model.labels_[i] - 1]
        distance[i] = np.linalg.norm(Xa - Xb)
    return distance


if __name__ == '__main__':
    '''
    Time Series of Price Anomaly Detection
    https://towardsdatascience.com/time-series-of-price-anomaly-detection-13586cd5ff46
    https://github.com/susanli2016/Machine-Learning-with-Python/blob/master/Time%20Series%20of%20Price%20Anomaly%20Detection%20Expedia.ipynb
    '''
    # pd.set_option('display.max_columns', 20)
    # pd.set_option('display.width', 1000)
    # expedia = pd.read_csv('./data/expedia-personalized-sort/data/train.csv')
    # df = expedia.loc[expedia['prop_id'] == 104517]
    # df = df.loc[df['srch_room_count'] == 1]
    # df = df.loc[df['visitor_location_country_id'] == 219]
    # df = df[['date_time', 'price_usd', 'srch_booking_window', 'srch_saturday_night_bool']]
    # df.to_csv("./data/expedia-personalized-sort/data/sample.csv")
    # tmp = df.copy(deep=True)

    df = pd.read_csv("../data/expedia-personalized-sort/data/sample.csv")
    df = df.loc[df['price_usd'] < 5584]
    df = df.sort_values(['date_time']).reset_index(drop=True)

    '''
    Time Series Visualizations
    '''
    df.plot(x='date_time', y='price_usd', figsize=(12, 6))
    plt.xlabel('Date time')
    plt.ylabel('Price in USD')
    plt.title('Time Series of room price by date time of search')

    # a = df.loc[df['srch_saturday_night_bool'] == 0, 'price_usd']
    # b = df.loc[df['srch_saturday_night_bool'] == 1, 'price_usd']
    # plt.figure(figsize=(10, 6))
    # plt.hist(a, bins=50, alpha=0.5, label='Search Non-Sat Night')
    # plt.hist(b, bins=50, alpha=0.5, label='Search Sat Night')
    # plt.legend(loc='upper right')
    # plt.xlabel('Price')
    # plt.ylabel('Count')
    # plt.show()

    '''
    Clustering-Based Anomaly Detection
    k-means algorithm
    
    k-means is a widely used clustering algorithm. It creates ‘k’ similar clusters of data points. Data instances that 
    fall outside of these groups could potentially be marked as anomalies. Before we start k-means clustering, we use 
    elbow method to determine the optimal number of clusters.
    '''
    data = df[['price_usd', 'srch_booking_window', 'srch_saturday_night_bool']]
    n_cluster = range(1, 20)
    kmeans = [KMeans(n_clusters=i).fit(data) for i in n_cluster]  # src how many clusters is the best choice
    scores = [kmeans[i].score(data) for i in range(len(kmeans))]

    # fig, ax = plt.subplots(figsize=(10, 6))
    # ax.plot(n_cluster, scores)
    # plt.xlabel('Number of Clusters')
    # plt.ylabel('Score')
    # plt.title('Elbow Curve')
    # plt.show()

    '''
    From the above elbow curve, we see that the graph levels off after 10 clusters, implying that addition of more 
    clusters do not explain much more of the variance in our relevant variable; in this case price_usd.
    
    we set n_clusters=10, and upon generating the k-means output use the data to plot the 3D clusters.
    '''
    X = df[['price_usd', 'srch_booking_window', 'srch_saturday_night_bool']]
    X = X.reset_index(drop=True)
    km = KMeans(n_clusters=10)
    km.fit(X)
    km.predict(X)
    labels = km.labels_

    # # Plotting
    # fig = plt.figure(1, figsize=(7, 7))
    # ax = Axes3D(fig, rect=[0, 0, 0.95, 1], elev=48, azim=134)
    # ax.scatter(X.iloc[:, 0], X.iloc[:, 1], X.iloc[:, 2], c=labels.astype(np.float), edgecolor="k")
    # ax.set_xlabel("price_usd")
    # ax.set_ylabel("srch_booking_window")
    # ax.set_zlabel("srch_saturday_night_bool")
    # plt.title("K Means", fontsize=14)

    '''
    Now we need to find out the number of components (features) to keep.
    '''
    data = df[['price_usd', 'srch_booking_window', 'srch_saturday_night_bool']]
    X = data.values
    X_std = StandardScaler().fit_transform(X)
    mean_vec = np.mean(X_std, axis=0)
    cov_mat = np.cov(X_std.T)  # Estimate a covariance matrix, given data and weights.
    eig_vals, eig_vecs = np.linalg.eig(cov_mat)  # Compute the eigenvalues and right eigenvectors of a square array.
    eig_pairs = [(np.abs(eig_vals[i]), eig_vecs[:, i]) for i in range(len(eig_vals))]
    eig_pairs.sort(key=lambda x: x[0], reverse=True)
    tot = sum(eig_vals)
    var_exp = [(i / tot) * 100 for i in sorted(eig_vals, reverse=True)]  # Individual explained variance
    cum_var_exp = np.cumsum(var_exp)  # Cumulative explained variance
    ''' NOTE: covariance matrix SVD decomposition for PCA, and plot the top singular vectors'''
    # plt.figure(figsize=(10, 5))
    # plt.bar(range(len(var_exp)), var_exp, alpha=0.3, align='center', label='individual explained variance', color='g')
    # plt.step(range(len(cum_var_exp)), cum_var_exp, where='mid', label='cumulative explained variance')
    # plt.ylabel('Explained variance ratio')
    # plt.xlabel('Principal components')
    # plt.legend(loc='best')
    # plt.show()

    '''
    We see that the first component explains almost 50% of the variance. The second component explains over 30%. 
    However, we’ve got to notice that almost none of the components are really negligible. The first 2 components 
    contain over 80% of the information. So, we will set n_components=2.

    The underline assumption in the clustering based anomaly detection is that if we cluster the data, normal data will 
    belong to clusters while anomalies will not belong to any clusters or belong to small clusters. We use the following 
    steps to find and visualize anomalies.
    
        Calculate the distance between each point and its nearest centroid. The biggest distances are considered as 
        anomaly.
        
        We use outliers_fraction to provide information to the algorithm about the proportion of the outliers present 
        in our data set. Situations may vary from data set to data set. However, as a starting figure, I estimate 
        outliers_fraction=0.01, since it is the percentage of observations that should fall over the absolute value 3 
        in the Z score distance from the mean in a standardized normal distribution.
        
        Calculate number_of_outliers using outliers_fraction.
        
        Set threshold as the minimum distance of these outliers.
        
        The anomaly result of anomaly1 contains the above method Cluster (0:normal, 1:anomaly).
        
        Visualize anomalies with cluster view.
        
        Visualize anomalies with Time Series view.
    '''
    outliers_fraction = 0.01
    # get the distance between each point and its nearest centroid. The biggest distances are considered as anomaly
    distance = getDistanceByPoint(data, kmeans[9])
    number_of_outliers = int(outliers_fraction * len(distance))
    threshold = distance.nlargest(number_of_outliers).min()
    # anomaly1 contain the anomaly result of the above method Cluster (0:normal, 1:anomaly)
    df['anomaly1'] = (distance >= threshold).astype(int)

    ''' NOTE: no need to plot PCA "principal_feature1" and "principal_feature2" in cluster view '''
    # # visualisation of anomaly with cluster view
    # fig, ax = plt.subplots(figsize=(10, 6))
    # colors = {0: 'blue', 1: 'red'}
    # ax.scatter(df['principal_feature1'], df['principal_feature2'], c=df["anomaly1"].apply(lambda x: colors[x]))
    # plt.xlabel('principal feature1')
    # plt.ylabel('principal feature2')
    # plt.show()

    ''' NOTE: plot normal TS with highlighted anomalies'''
    a = df.loc[df['anomaly1'] == 1, ['date_time', 'price_usd']]  # anomaly
    fig, ax = plt.subplots(figsize=(10, 6))
    ax.plot(df['date_time'], df['price_usd'], color='blue', label='Normal')
    ax.scatter(a['date_time'], a['price_usd'], color='red', label='Anomaly')
    plt.xlabel('Date Time Integer')
    plt.ylabel('price in USD')
    plt.legend()
    plt.show()

    '''
    Anomaly Detection using Gaussian Distribution
    
    Gaussian distribution is also called normal distribution. We will be using the Gaussian distribution to develop an 
    anomaly detection algorithm, that is, we’ll assume that our data are normally distributed. This’s an assumption that 
    cannot hold true for all data sets, yet when it does, it proves an effective method for spotting outliers.
    
    Scikit-Learn’s covariance.EllipticEnvelope is a function that tries to figure out the key parameters of our data’s 
    general distribution by assuming that our entire data is an expression of an underlying multivariate Gaussian 
    distribution. The process like so:
    
        Create two different data sets based on categories defined earlier, — search_Sat_night, Search_Non_Sat_night.
        
        Apply EllipticEnvelope(gaussian distribution) at each categories.
        
        We set contamination parameter which is the proportion of the outliers present in our data set.
        
        We use decision_function to compute the decision function of the given observations. It is equal to the shifted 
        Mahalanobis distances. The threshold for being an outlier is 0, which ensures a compatibility with other outlier 
        detection algorithms.
        
        The predict(X_train) predict the labels (1 normal, -1 anomaly) of X_train according to the fitted model.
    '''
    df_class0 = df.loc[df['srch_saturday_night_bool'] == 0, 'price_usd']
    df_class1 = df.loc[df['srch_saturday_night_bool'] == 1, 'price_usd']

    envelope = EllipticEnvelope(contamination=outliers_fraction)
    X_train = df_class0.values.reshape(-1, 1)  # reshape
    envelope.fit(X_train)
    df_class0 = pd.DataFrame(df_class0)
    df_class0['deviation'] = envelope.decision_function(X_train)
    df_class0['anomaly'] = envelope.predict(X_train)

    envelope = EllipticEnvelope(contamination=outliers_fraction)
    X_train = df_class1.values.reshape(-1, 1)
    envelope.fit(X_train)
    df_class1 = pd.DataFrame(df_class1)
    df_class1['deviation'] = envelope.decision_function(X_train)
    df_class1['anomaly'] = envelope.predict(X_train)

    df_class = pd.concat([df_class0, df_class1])
    df['anomaly5'] = df_class['anomaly']
    fig, ax = plt.subplots(figsize=(10, 6))
    a = df.loc[df['anomaly5'] == -1, ('date_time', 'price_usd')]  # anomaly
    ax.plot(df['date_time'], df['price_usd'], color='blue')
    ax.scatter(a['date_time'], a['price_usd'], color='red')
    plt.show()
