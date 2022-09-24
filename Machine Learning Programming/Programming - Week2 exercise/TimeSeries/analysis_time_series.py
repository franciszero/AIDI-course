# coding=utf-8
from unicodedata import decimal

import pandas as pd
import numpy as np
import math
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib.ticker import FormatStrFormatter

from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import KernelDensity
from statsmodels.tsa.seasonal import seasonal_decompose
from TimeSeries.KDE_exercise import my_scores
import mplfinance as mpf

import matplotlib
from decimal import Decimal

matplotlib.rc('font', size=5)


class TimeSerious:
    def __init__(self):
        self.decompose = None
        self.col = None
        self.auto_correlation_lag = None
        self.df = pd.read_csv('./data/google.csv')

    def rolling_plot(self, col, roll):
        rolling_mean = self.df[col].rolling(roll).mean()
        rolling_std = self.df[col].rolling(roll).std()
        plt.plot(self.df[col], color='blue', label='Original Stock Data for : ' + self.col)
        plt.plot(rolling_mean, color='red', label='Rolling Mean Number')
        plt.plot(rolling_std, color='black', label='Rolling Standard Deviation')
        plt.title('Time Series, Rolling Mean, Standard Deviation')
        plt.legend(loc='best')

    def test_corr(self, col, lag):
        self.auto_correlation_lag = self.df[col].autocorr(lag=lag)
        print('Lag=%d, score=%.2f' % (lag, self.auto_correlation_lag))

    def time_series_decomposition(self, col):
        if self.decompose is None:
            self.decompose = seasonal_decompose(self.df[col], model='additive', period=100)
        return self.decompose

    def get_dist(self, resid, sample_size, bandwidth, isplot=False):
        _x_train = np.random.choice(resid, size=sample_size, replace=True).reshape(-1, 1)
        _x_test = np.linspace(math.floor(min(_x_train)), math.ceil(max(_x_train)), len(_x_train))[:, np.newaxis]
        h_vals = np.arange(bandwidth, bandwidth * 10, bandwidth)
        kernels = ['cosine', 'epanechnikov', 'exponential', 'gaussian', 'linear', 'tophat']
        grid = GridSearchCV(KernelDensity(), {'bandwidth': h_vals, 'kernel': kernels}, scoring=my_scores)
        grid.fit(_x_train)
        _best_kde = grid.best_estimator_
        _log_dens = _best_kde.score_samples(_x_test)
        _dist = np.exp(_log_dens)
        _dist = _dist + min(_dist)
        _dist = _dist / sum(_dist)
        if isplot:
            plt.fill(_x_test, _dist, c='cyan')
            plt.title("Best Kernel: " + _best_kde.kernel + " h=" + "{:.2f}".format(_best_kde.bandwidth))
            plt.show()
        return _x_test, _dist

    def get_residual_anomalies(self, d, x_test, residual):
        threshold = 0.997
        # residual_anomalies
        mid_idx = d.argmax()
        sum_l = sum(d[:mid_idx])
        idx_l = -1
        for i in range(mid_idx, idx_l, -1):
            if sum(d[i:mid_idx]) / sum_l > threshold:
                idx_l = i
                break
        anomaly_l = x_test[idx_l][0]
        sum_r = sum(d[mid_idx:])
        idx_r = len(d)
        for i in range(mid_idx, idx_r, 1):
            if sum(d[mid_idx:i]) / sum_r > threshold:
                idx_r = i
                break
        anomaly_r = x_test[idx_r][0]
        residual_anomalies = residual[(residual < anomaly_l) | (residual > anomaly_r)]
        residual_anomalies.name = 'anomalies'
        return residual_anomalies, anomaly_l, x_test[mid_idx], anomaly_r

    def job1_corr_exam(self):
        fig = sns.heatmap(self.df.drop(['Date'], axis=1).corr(), annot=True, cmap='summer')
        heatmap = fig.get_figure()
        heatmap.savefig("./output/job1_corr_on_heatmap.png")
        plt.clf()
        fig = sns.pairplot(self.df)
        fig.savefig("./output/job1_corr_on_pairplot.png")
        pass

    def job2_show_the_volume_trend(self):
        decompose = self.time_series_decomposition('Volume')
        tr = decompose.trend
        tr = tr[tr == tr]
        fig = plt.figure(figsize=(10, 5), dpi=100, constrained_layout=True)
        ax = fig.add_subplot()
        ax.scatter(decompose.observed.index, decompose.observed, s=5, alpha=.8)
        ax.plot(tr.index.to_list(), tr.to_list(), linewidth=2, color='red')
        plt.suptitle("Visualize the trend in volume of stock data")
        fig.savefig("./output/job2_TS_trend.png")
        pass

    def job3_visualize_the_volume_outliers(self):
        decompose = self.time_series_decomposition('Volume')
        # decompose.plot()
        residual = decompose.resid.fillna(0)  # .apply(lambda x: round(-x, 2) if x < 0 else round(x, 2))
        x_test, dist = self.get_dist(residual, 500, 1 * 10000 * 100, isplot=False)
        residual_anomalies, l, m, r = self.get_residual_anomalies(dist, x_test, residual)

        # residual plot with dist histogram
        # https://matplotlib.org/stable/gallery/subplots_axes_and_figures/gridspec_multicolumn.html
        # https://matplotlib.org/stable/gallery/lines_bars_and_markers/scatter_hist.html#defining-the-axes-positions-using-inset-axes
        # https://blog.csdn.net/weixin_41298166/article/details/106273258
        fig = plt.figure(figsize=(10, 4), dpi=150, constrained_layout=True)
        gs = plt.GridSpec(4, 7, figure=fig, left=0.1, right=0.9, bottom=0.1, top=0.9, wspace=0.05, hspace=0.05)
        ax_resid = fig.add_subplot(gs[1:, :-1])
        ax1 = fig.add_subplot(gs[1:, -1:], sharey=ax_resid)
        ax_volume = fig.add_subplot(gs[0, 0:-1])

        x = np.arange(len(residual))
        y = residual
        #
        self.plot_KDE(ax1, dist, l, m, r, x, x_test, y)
        self.plot_resid_and_its_anom(ax_resid, l, m, r, residual, residual_anomalies, x, y)
        self.plot_volume_and_its_anom(ax_volume, residual_anomalies, x)
        # plt.setp(baseline2, linewidth=1, color='yellow', markersize=10)
        # save fig
        plt.suptitle("Anomalies defined by TS Residual Distribution", fontsize=12)
        fig.savefig("./output/job3_visualize_the_volume_outliers.png")
        return

    def job4_calc_surpass_times(self):
        d = self.df.drop(['Adj Close'], axis=1)
        tmp = d["Open"] - d["Close"]
        title = "there are %d/%d surpassed days in google stock data" % (tmp[tmp > 0].size, tmp.size)
        path = "./output/job4_candle.png"

        d["Date"] = pd.to_datetime(d["Date"])
        d.set_index(["Date"], inplace=True)

        np.seterr(divide='ignore', invalid='ignore')  # 忽略warning
        plt.rcParams['font.sans-serif'] = ['SimHei']  # show chinese character
        plt.rcParams['axes.unicode_minus'] = False  # show unicode minus

        # https://github.com/matplotlib/mplfinance/blob/master/examples/marketcolor_overrides.ipynb
        # https://github.com/matplotlib/mplfinance/blob/master/examples/savefig.ipynb
        mpf.plot(d, volume=True, style='yahoo', type='candle', savefig=path, title=title, warn_too_much_data=10000)

    def countDivisors(self, num):
        ans = 1
        x = 2
        while x * x <= num:
            cnt = 1
            while num % x == 0:
                cnt += 1
                num /= x
            ans *= cnt
            x += 1
        return ans * (1 + (num > 1))

    def get_tick_labels(self, x_max, cnt):
        arr = np.linspace(0, x_max, num=cnt, endpoint=True)
        steps = float("%.0e" % arr[1])
        labels = np.arange(0, x_max + steps, steps)
        return [str(round(float(label), 3)) for label in labels if label != '']

    def plot_KDE(self, ax1, dist, l, m, r, x, x_test, y):
        # ax1.title.set_text('KDE')
        ax1.set_title('KDE', fontdict={'fontsize': 9})
        ax1.hist(y, 80, histtype='stepfilled', orientation='horizontal', alpha=0.8)
        # [label.set_fontsize(7) for label in (ax1.get_xticklabels() + ax1.get_yticklabels())]
        [tick.set_color('steelblue') for tick in ax1.xaxis.get_ticklabels()]
        # ax1.xaxis.set_major_formatter(mticker.FormatStrFormatter('%.0f°E'))
        ax1.xaxis.set_major_formatter(FormatStrFormatter('%.0f'))
        # KDE
        ax2 = ax1.twiny()
        ax2.plot(dist, x_test, '-.', color='r', linewidth=.8, alpha=1)
        labels = self.get_tick_labels(max(dist), 5)
        ax2.axis(xmin=0, xmax=max(dist)*1.05)
        # ax2.axis(xmin=0, xmax=float(labels[-1]))
        # ax2.set_xticks(np.arange(len(labels)))
        # ax2.set_xticklabels(['x'] * len(labels))

        [tick.set_color('red') for tick in ax2.xaxis.get_ticklabels()]
        # [label.set_fontsize(7) for label in (ax2.get_xticklabels())]
        # plot threshold in residuals
        ax2.plot(x, [l] * len(x), color='gray', linewidth=.2, alpha=.8)
        ax2.plot(x, [r] * len(x), color='gray', linewidth=.2, alpha=.8)
        ax2.plot(x, [m] * len(x), color='red', linewidth=.5, alpha=1)

    def plot_volume_and_its_anom(self, ax_volume, residual_anomalies, x):
        # ax_volume.title.set_text('volume')
        ax_volume.set_title('volume', fontdict={'fontsize': 9})
        # get volume anom
        a = pd.concat([self.df['Volume'], residual_anomalies], axis=1, ignore_index=False)
        a['anomalies'].fillna(0, inplace=True)  # a.loc[a['anomalies'] != a['anomalies'], 'Volume'] = 0
        ax_volume.axis(ymin=0, ymax=max(self.df['Volume']) * 1.1)
        ax_volume.axis(xmin=0, xmax=len(self.df['Volume']))
        # plot volume anom
        anom_x = a[a['anomalies'] != 0.0].index.values
        anom_y = a[a['anomalies'] != 0.0]['Volume'].values
        marker_line, stem_lines, baseline = ax_volume.stem(anom_x, anom_y, linefmt=':', markerfmt='o', bottom=0)
        plt.setp(stem_lines, lw=0.5)
        plt.setp(marker_line, lw=0.5, color='r', markersize=1)
        plt.setp(baseline, visible=False)
        # plot volume
        ax_volume.scatter(x, self.df['Volume'], s=4, alpha=.8, c="skyblue", edgecolors='gray', linewidths=.2)
        ax_volume.ticklabel_format(style='sci', scilimits=(-1, 2), axis='y')
        [label.set_fontsize(6) for label in (ax_volume.get_xticklabels() + ax_volume.get_yticklabels())]

    def plot_resid_and_its_anom(self, ax_resid, l, m, r, residual, residual_anomalies, x, y):
        # ax_resid.title.set_text('volume residual')
        ax_resid.set_title('volume residual', fontdict={'fontsize': 9})
        # plot residuals
        ax_resid.scatter(x, y, s=4, alpha=.8, c="skyblue", edgecolors='gray', linewidths=.2)
        # plot residuals anom
        anomalies_resid = pd.concat([residual, residual_anomalies], axis=1, ignore_index=False)
        marker_line, stem_line, baseline = ax_resid.stem(x, anomalies_resid['anomalies'],
                                                         linefmt=':', markerfmt='o', bottom=m)
        plt.setp(stem_line, lw=0.5)
        plt.setp(marker_line, lw=0.5, color='r', markersize=1)  # 将棉棒末端设置为黑色
        plt.setp(baseline, lw=0.5)
        # plot thresholds
        ax_resid.plot(x, [l] * len(x), color='gray', linewidth=.2, alpha=.8)
        ax_resid.plot(x, [r] * len(x), color='gray', linewidth=.2, alpha=.8)
        # reset x axis
        ax_resid.axis(xmin=0, xmax=len(y))
        [label.set_fontsize(6) for label in (ax_resid.get_xticklabels() + ax_resid.get_yticklabels())]

    def my_scores(self, estimator, X):
        scores = estimator.score_samples(X)
        # Remove -inf
        scores = scores[scores != float('-inf')]
        # Return the mean values
        return np.mean(scores)

    def random_sample(self, array, size: int, replace=True):
        """随机抽样: 每个样本等概率抽样
        :param array: 待采样数组
        :param size: 采样个数
        :param replace: 是否放回，True为有放回的抽样，False为无放回的抽样
        """
        return np.random.choice(array, size=size, replace=replace)

    def getDistanceByPoint(self, model):
        distance = pd.Series()
        for i in range(0, len(self.df)):
            Xa = np.array(self.df.loc[i])
            Xb = model.cluster_centers_[model.labels_[i] - 1]
            distance.set_value(i, np.linalg.norm(Xa - Xb))
        return distance
