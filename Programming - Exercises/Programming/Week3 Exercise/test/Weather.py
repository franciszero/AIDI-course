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
from statsmodels.tsa.seasonal import seasonal_decompose
import mplfinance as mpf
from sklearn.feature_selection import mutual_info_classif as MIC

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
        self.dfx = self.df0.drop(['Formatted Date', 'Daily Summary', 'Summary', 'Precip Type'], axis=1)

    def exploratory(self):
        cols = self.df0.columns
        for i, col in enumerate(['Summary']):
            print(self.df0.groupby(col).count().sort_values('Formatted Date', ascending=False).head(20)[['Formatted Date']])
            print()

    def correlation_analysis(self, df):
        corr = df.corr()
        f, ax = plt.subplots(figsize=(20, 20))
        sns.set(font_scale=1.4)
        cmap = sns.diverging_palette(h_neg=210, h_pos=350, s=90, l=30, as_cmap=True)
        sns.heatmap(df.corr(), annot=True, ax=ax, cbar_kws={"orientation": "horizontal"},
                    annot_kws={"size": 16})  # , linewidths=.5, fmt='.1f')
        pass

    def mic(self):
        mi_score = MIC(X, y)
        print(mi_score)

    # Correlation Analysis
    def feature_importance(self):
        X = self.dfx.drop(['diagnosis'], axis=1)
        y = self.dfx.diagnosis

        clf = RandomForestClassifier(n_estimators=50)
        model = clf.fit(X, y)

        feat_importances = pd.DataFrame(model.feature_importances_, index=x.columns, columns=["Importance"])
        feat_importances.sort_values(by='Importance', ascending=False, inplace=True)
        feat_importances.plot(kind='bar')


if __name__ == '__main__':
    foo = Weather()