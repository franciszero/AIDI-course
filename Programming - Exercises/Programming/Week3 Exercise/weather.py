# coding=utf-8
from sklearn.datasets import load_iris
from sklearn.feature_selection import SelectKBest, chi2

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

    # # feature selection with correlation analysis
    # foo.correlation_analysis(foo.df0)
    # print(foo.df0.columns)
    # df = foo.df0.drop(['Apparent Temperature (C)'], axis=1)
    # df.head()
    # foo.correlation_analysis(df)

    # feature selection with mutual information
    foo.mic()


    # foo.feature_importance()
    pass
