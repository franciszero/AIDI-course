# coding=utf-8
import pandas as pd
from matplotlib.gridspec import GridSpec
from sklearn.model_selection import GridSearchCV
# import seaborn as sns
from statsmodels.tsa.seasonal import seasonal_decompose
from TimeSeries.analysis_time_series import TimeSerious
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.covariance import EllipticEnvelope
from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import LocalOutlierFactor
from statsmodels.tsa.seasonal import seasonal_decompose
import matplotlib.pyplot as plt
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


if __name__ == '__main__':
    ts = TimeSerious()

    cols = ts.df.columns.array

    # ts.test_corr(20)
    # ts.rolling_plot(233)
    # ts.foo()

    # ts.job1_corr_exam()
    ts.job3_visualize_the_volume_outliers()

    print(1)
