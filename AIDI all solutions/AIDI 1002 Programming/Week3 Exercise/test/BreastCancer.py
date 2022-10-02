# coding=utf-8
import pandas as pd
import numpy as np
import math
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib.ticker import FormatStrFormatter
from sklearn.ensemble import RandomForestClassifier

from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import KernelDensity
from sklearn.preprocessing import LabelEncoder
from statsmodels.tsa.seasonal import seasonal_decompose
import mplfinance as mpf
from FeatureSelection import FeatureSelection

import matplotlib
# %matplotlib

import warnings

warnings.filterwarnings("ignore")

pd.set_option('display.max_columns', 20)
pd.set_option('display.width', 1000)

matplotlib.rc('font', size=5)


class Cancer:
    def __init__(self):
        # from sklearn.datasets import load_breast_cancer as LBC
        #
        # cancer = LBC()
        # X = cancer['data']
        # y = cancer['target']
        self.df0 = pd.read_csv("./data/breast_cancer.csv.csv")
        encoder = LabelEncoder()
        self.df0['encoded diagnosis'] = encoder.fit_transform(self.df0['diagnosis'].to_numpy())
        self.df = self.df0.drop(['id', 'diagnosis'], axis=1).copy(deep=True)

    def exploratory(self):
        # Index(['id', 'diagnosis', 'radius_mean', 'texture_mean', 'perimeter_mean', 'area_mean', 'smoothness_mean',
        #        'compactness_mean', 'concavity_mean', 'concave points_mean', 'symmetry_mean', 'fractal_dimension_mean',
        #        'radius_se', 'texture_se', 'perimeter_se', 'area_se', 'smoothness_se', 'compactness_se', 'concavity_se',
        #        'concave points_se', 'symmetry_se', 'fractal_dimension_se', 'radius_worst', 'texture_worst',
        #        'perimeter_worst', 'area_worst', 'smoothness_worst', 'compactness_worst', 'concavity_worst',
        #        'concave points_worst', 'symmetry_worst', 'fractal_dimension_worst', 'Unnamed: 32'], dtype='object')
        cols = self.df0.drop('id', axis=1).columns
        for i, col in enumerate(cols):
            print(self.df0.groupby(col).count().sort_values('id', ascending=False).head(8)[['id']])
        print()
        pass

    def feature_importance(self, X, y):
        clf = RandomForestClassifier(n_estimators=50)
        model = clf.fit(X, y)
        feat_importances = pd.DataFrame(model.feature_importances_, index=X.columns, columns=["Importance"])
        feat_importances.sort_values(by='Importance', ascending=False, inplace=True)
        feat_importances.plot(kind='bar')
        pass

    def feature_selection(self, dfx, dfy):
        fs = FeatureSelection()
        selected_feature_names, new_x = fs.chi_square_test(dfx, dfy, k=1)
        print("shape dfx: ", dfx.shape, "\nshape new_x: ", new_x.shape)
        print('selected features: ', selected_feature_names)
        pass

