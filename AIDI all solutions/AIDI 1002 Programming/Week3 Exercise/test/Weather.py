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
from sklearn.feature_selection import mutual_info_classif as MIC, mutual_info_classif, mutual_info_regression, \
    VarianceThreshold

import matplotlib
# %matplotlib

import warnings

warnings.filterwarnings("ignore")

pd.set_option('display.max_columns', 20)
pd.set_option('display.width', 1000)

matplotlib.rc('font', size=5)


class Weather:
    def __init__(self):
        self.df0 = pd.read_csv('./data/weatherHistory.csv')
        encoder = LabelEncoder()
        self.df = self.df0.copy(deep=True)
        self.df['Encoded Daily Summary'] = encoder.fit_transform(self.df['Daily Summary'].to_numpy())
        self.df = self.df.drop('Daily Summary', axis=1)
        self.df['Encoded Summary'] = encoder.fit_transform(self.df['Summary'].to_numpy())
        self.df = self.df.drop('Summary', axis=1)
        self.df['Encoded Precip Type'] = encoder.fit_transform(self.df['Precip Type'].to_numpy())
        self.df = self.df.drop('Precip Type', axis=1)
        # dt = pd.to_datetime(self.df['Formatted Date'], utc=True)
        # self.df = self.df.set_index(dt)
        # self.df['year'] = self.df.index.year
        # self.df['month'] = self.df.index.month
        # self.df['day'] = self.df.index.day
        # self.df['hour'] = self.df.index.hour
        # self.df['minute'] = self.df.index.minute

    def exploratory(self):
        cols = self.df0.columns
        for i, col in enumerate(['Encoded Daily Summary']):
            print(self.df.groupby(col).count().sort_values('Formatted Date', ascending=False).head(20)[
                      ['Formatted Date']])
            print()

    def correlation_analysis(self, df):
        foo.correlation_analysis(foo.df0)
        print(foo.df.columns)
        df = foo.df.drop(['Apparent Temperature (C)'], axis=1)
        df.head()
        foo.correlation_analysis(df)
        pass

    def feature_importance(self, X, y):
        clf = RandomForestClassifier(n_estimators=50)
        model = clf.fit(X, y)
        feat_importances = pd.DataFrame(model.feature_importances_, index=dfx.columns, columns=["Importance"])
        feat_importances.sort_values(by='Importance', ascending=False, inplace=True)
        feat_importances.plot(kind='bar')


if __name__ == '__main__':
    foo = Weather()
