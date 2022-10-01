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

import matplotlib
# %matplotlib

import warnings

warnings.filterwarnings("ignore")

pd.set_option('display.max_columns', 20)
pd.set_option('display.width', 1000)

matplotlib.rc('font', size=5)


class Cancer:
    def __init__(self):
        self.df0 = pd.read_csv("./data/breast_cancer.csv.csv")
        self.dfx = self.df0.drop(['Formatted Date', 'Daily Summary', 'Summary', 'Precip Type'], axis=1)