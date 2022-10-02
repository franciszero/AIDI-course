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
    fs = FeatureSelection()
    foo = Weather()
    # foo.exploratory()
    foo.correlation_analysis()

    dfx = foo.df.drop(['Formatted Date'], axis=1)
    X = fs.variance_threshold(dfx)

    dfx1 = foo.df.drop(['Formatted Date', 'Temperature (C)'], axis=1)
    dfy1 = foo.df['Temperature (C)']
    X1, y1 = fs.mutual_information_regression(dfx1, dfy1)

    dfx2 = foo.df.drop(['Formatted Date', 'Encoded Daily Summary'], axis=1)
    dfy2 = foo.df['Encoded Daily Summary']
    X2, y2 = fs.mutual_information_classification(dfx2, dfy2)

    foo.feature_importance(X2, y2)
    pass
