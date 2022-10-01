# coding=utf-8
import pandas as pd
from sklearn.datasets import load_iris
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.ensemble import RandomForestRegressor
from sklearn.feature_selection import SelectKBest, chi2, mutual_info_classif, mutual_info_regression, VarianceThreshold
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.model_selection import GridSearchCV

from test.Weather import Weather
from test.FeatureSelection import FeatureSelection

"""
• Dataset: Kaggle link (Weather Data)
• Consider the above-mentioned dataset for a regression problem (where output labels are numeric) 
and apply following feature selection techniques:
    ○ Correlation Analysis
    ○ Mutual Information
    ○ Variance Threshold (Not discussed in the lecture, need to do a research by your side)
• Plot the feature importance graph as well and comment which technique provided more useful set 
of features and why ?
"""
if __name__ == '__main__':
    foo = Weather()

    # # exploratory
    # foo.exploratory()

    # # feature selection with correlation analysis
    # foo.correlation_analysis(foo.df0)
    # print(foo.df0.columns)
    # df = foo.df0.drop(['Apparent Temperature (C)'], axis=1)
    # df.head()
    # foo.correlation_analysis(df)

    # # feature selection with mutual information
    # # Index(['Formatted Date', 'Temperature (C)', 'Apparent Temperature (C)', 'Humidity', 'Wind Speed (km/h)',
    # # 'Wind Bearing (degrees)', 'Visibility (km)', 'Loud Cover', 'Pressure (millibars)', 'Encoded Daily Summary',
    # # 'Encoded Summary', 'Encoded Precip Type'], dtype='object')
    # dfx = foo.df.drop(['Formatted Date', 'Encoded Daily Summary'], axis=1)
    # dfy = foo.df['Encoded Daily Summary']
    # X = dfx.to_numpy()
    # y = dfy.to_numpy()
    # mi_score = mutual_info_classif(X, y)
    # print("%25s\t%25s" % ('colume', 'mutual information score'))
    # for i, col in enumerate(dfx.columns):
    #     print("%25s\t%25s" % (col, "%.3f" % mi_score[i]))
    #
    # dfx = foo.df.drop(['Formatted Date', 'Temperature (C)'], axis=1)
    # dfy = foo.df['Temperature (C)']
    # X = dfx.to_numpy()
    # y = dfy.to_numpy()
    # mi_score = mutual_info_regression(X, y)
    # print("%25s\t%25s" % ('colume', 'mutual information score'))
    # for i, col in enumerate(dfx.columns):
    #     print("%25s\t%25s" % (col, "%.3f" % mi_score[i]))

    # # removes all zero-variance features by default, i.e., features that have the same value in all samples
    # # see: https://www.analyticsvidhya.com/blog/2020/10/feature-selection-techniques-in-machine-learning/
    # selector = VarianceThreshold()
    # dfx = foo.df.drop(['Formatted Date'], axis=1)
    # selector.fit(dfx)
    # print("%25s\t%25s" % ('colume', 'variances'))
    # for i, col in enumerate(dfx.columns):
    #     print("%25s\t%25s" % (col, "%.3f" % selector.variances_[i]))

    # plt.clf()
    # fig = sns.pairplot(dfx)
    # fig.savefig("./output/pairplot.png")

    dfx = foo.df.drop(['Formatted Date', 'Encoded Daily Summary'], axis=1)
    dfy = foo.df['Encoded Daily Summary']
    X = dfx.to_numpy()
    y = dfy.to_numpy()
    mi_score = mutual_info_classif(X, y)
    print("%25s\t%25s" % ('colume', 'mutual information score'))
    for i, col in enumerate(dfx.columns):
        print("%25s\t%25s" % (col, "%.3f" % mi_score[i]))

    dic = {
        'n_estimators': [100],
        # 'max_depth': [None, 3, 10],
        # 'min_samples_split': [1, 3],
        # 'min_samples_leaf': [1, 3],
    }
    grid_search_cv = GridSearchCV(RandomForestRegressor(), dic, cv=5)
    grid_search_cv.fit(X, y)
    print('BEST PARAMS: {}\n'.format(grid_search_cv.best_params_))
    means = grid_search_cv.cv_results_['mean_test_score']
    stds = grid_search_cv.cv_results_['std_test_score']
    for mean, std, params in zip(means, stds, grid_search_cv.cv_results_['params']):
        print('{} (+/-{}) for {}'.format(round(mean, 3), round(std * 2, 3), params))

    print("%25s\t%25s" % ('colume', 'feature_importances_'))
    for i, col in enumerate(dfx.columns):
        print("%25s\t%25s" % (col, "%.3f" % grid_search_cv.best_estimator_.feature_importances_[i]))

    feat_importances = pd.DataFrame(grid_search_cv.best_estimator_.feature_importances_, index=dfx.columns, columns=["Importance"])
    feat_importances.sort_values(by='Importance', ascending=False, inplace=True)
    feat_importances.plot(kind='bar')

    # foo.feature_importance()
    pass
