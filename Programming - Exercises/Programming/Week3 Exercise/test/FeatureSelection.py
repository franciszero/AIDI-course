#
from numpy import array
from sklearn.datasets import load_iris
from sklearn.feature_selection import SelectKBest, chi2, f_classif
from sklearn.feature_selection import mutual_info_classif
from sklearn.datasets import make_regression
from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import f_regression
from sklearn.datasets import load_iris
from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import chi2
from minepy import MINE
import numpy as np


class FeatureSelection:
    def __init__(self):
        self.skb = None

    @staticmethod
    def print_fs(fs):
        print("%17s\t%s\n%17s\t%s\n%17s\t%s\n" %
              ("feature score", fs.scores_,
               "feature pvalues", fs.pvalues_,
               "feature selected", fs.get_support(indices=True))
              )

    """
    code_example_applying_feature_selection
    """
    @staticmethod
    def code_example_applying_feature_selection():
        # pearson's correlation feature selection for numeric input and numeric output
        # generate dataset
        X, y = make_regression(n_samples=100, n_features=100)
        # define feature selection
        fs = SelectKBest(score_func=f_regression, k=10)
        # apply feature selection
        X_selected = fs.fit_transform(X, y)

        FeatureSelection.print_fs(fs)
        print(X_selected.shape)
        pass

    def mutual_information(self):
        # iris = load_iris()
        # X, y = iris.data, iris.target
        # m = MINE()
        # x = np.random.uniform(-1, 1, 10000)
        # m.compute_score(x, x ** 2)
        # print(m.mic())
        #
        # from sklearn.feature_selection import SelectKBest
        # # 由于MINE的设计不是函数式的，定义mic方法将其为函数式的，返回一个二元组，二元组的第2项设置成固定的P值0.5
        # def mic(x, y):
        #     m = MINE()
        #     m.compute_score(x, y)
        #     return (m.mic(), 0.5)
        #
        # # 选择K个最好的特征，返回特征选择后的数据
        # SelectKBest(lambda X, Y: array(map(lambda x: mic(x, Y), X.T)).T, k=2).fit_transform(iris.data, iris.target)
        return

    def supervised_feature_selection(self, x, y, func=f_classif, k='all'):
        """
        :param y: features
        :param x: label
        :param func: callable, default is f_classif, there are some options from scikit-learn library:
                    # Pearson’s Correlation Coefficient: f_regression()
                    # ANOVA: f_classif()
                    # Chi-Squared: chi2()
                    # Mutual Information: mutual_info_classif() and mutual_info_regression()

                    Also, the SciPy library provides an implementation of many more statistics, such as:
                    # Kendall’s tau (kendalltau)
                    # Spearman’s rank correlation (spearmanr).
        :param k: Number of top features to select, int or 'all'
        :return:
        """
        self.skb = SelectKBest(score_func=func, k=k)
        self.skb.fit(x, y)

        self.print_fs(self.skb)

        # 转换数据，得到特征过滤后保留下的特征数据集
        x_new = self.skb.transform(x)
        return self.skb, x_new

    def unsupervised_feature_selection(self):
        pass

    def mutual_info_classif(self):
        mutual_info_classif()

# if __name__ == '__main__':
#     foo = FeatureSelection()
#     iris = load_iris()
#     x, y = iris.data, iris.target
#     # skb, x_new = foo.supervised_feature_selection(x, y, chi2, k=2)
#     # foo.mutual_information()
#     foo.code_example_applying_feature_selection()
#     pass