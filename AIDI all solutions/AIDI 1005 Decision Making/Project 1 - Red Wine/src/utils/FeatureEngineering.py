import numpy as np
from matplotlib import pyplot as plt
from sklearn.preprocessing import MinMaxScaler, StandardScaler
import seaborn as sns


class FeatureEngineering:
    def __init__(self):
        pass

    @staticmethod
    def dist_plot(f, c, color="brown"):
        plt.figure(figsize=(16, 4))
        sns.distplot(f, kde=True, color=color)
        plt.title("\"%s\" (%.2f, %.2f)" % (c, f.min(), f.max()))
        plt.show()
        pass

    def scaling_log(self, f, c, color="r", plot=False):
        tmp = np.log(f + 1)
        if plot:
            self.dist_plot(tmp, c, color)
        return tmp

    def scaling_minmax(self, f, c, color="g", plot=False):
        tmp = MinMaxScaler().fit(f).transform(f)
        if plot:
            self.dist_plot(tmp, c, color)
        return tmp

    def scaling_standard(self, f, c, color="b", plot=False):
        tmp = StandardScaler().fit(f).transform(f)
        if plot:
            self.dist_plot(tmp, c, color)
        return tmp

    def empty(self):
        return


if __name__ == '__main__':
    fe = FeatureEngineering()
