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
from test.BreastCancer import Cancer
from test.FeatureSelection import FeatureSelection

"""
Question 2. Classification Problem with Categorical Data:
    Dataset: Breast Cancer (Attached below)
    Apply following feature selection techniques and plot the feature importance graph for each technique.
        ○ Chi Square test 
        ○ Mutual Information
Comment on the usefulness of features extracted from the feature selection techniques.
"""
if __name__ == '__main__':
    foo = Cancer()

    print("df0.info:\n", foo.df0.info())
    print("df0.describe:\n", foo.df0.describe().T)

    dfx = foo.df.drop(['encoded diagnosis', 'Unnamed: 32'], axis=1)
    dfy = foo.df['encoded diagnosis']
    foo.feature_selection()

    # diagnosis
    # B    357
    # M    212
    fs = FeatureSelection()
    X1, y1 = fs.mutual_information_classification(dfx, dfy)

    #
    dfx = foo.df.drop(['encoded diagnosis', 'Unnamed: 32'], axis=1)
    dfy = foo.df['encoded diagnosis']
    foo.feature_importance(dfx, dfy)
    pass
