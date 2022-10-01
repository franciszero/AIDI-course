# coding=utf-8
from TimeSeries.analysis_time_series import TimeSerious

if __name__ == '__main__':
    ts = TimeSerious()
    cols = ts.df.columns.array

    ts.job1_corr_exam()
    ts.job2_show_the_volume_trend()
    ts.job3_visualize_the_volume_outliers()
    ts.job4_calc_surpass_times()

