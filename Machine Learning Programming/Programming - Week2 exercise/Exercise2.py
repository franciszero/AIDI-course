# coding=utf-8
import pandas as pd
from matplotlib.gridspec import GridSpec
from sklearn.model_selection import GridSearchCV
# import seaborn as sns
from statsmodels.tsa.seasonal import seasonal_decompose
from TimeSeries.analysis_time_series import TimeSerious
import matplotlib.pyplot as plt
from sklearn.covariance import EllipticEnvelope
from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import LocalOutlierFactor
from statsmodels.tsa.seasonal import seasonal_decompose
import seaborn as sns
import math
import numpy as np
from scipy import stats
import statsmodels.api as sm
from numpy import asarray
from numpy import exp
from matplotlib import pyplot
from sklearn.neighbors import KernelDensity
from scipy.stats import norm

import matplotlib.pyplot as plot

import numpy as np

import pylab

# marks = [10, 11, 22, 24, 35, 37, 45, 47, 48, 58, 56, 59, 61, 71, 81, 92, 95]
# stems = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 7, 8, 9, 9]
# pylab.xlim([0, 10])
# pylab.ylim([0, 100])
# markerline, stemlines, baseline = plot.stem(stems, marks, '-.')
# plot.show()


if __name__ == '__main__':
    ts = TimeSerious()
    cols = ts.df.columns.array

    # ts.job1_corr_exam()
    # ts.job2_show_the_volume_trend()
    ts.job3_visualize_the_volume_outliers()
    # ts.job4_calc_surpass_times()
