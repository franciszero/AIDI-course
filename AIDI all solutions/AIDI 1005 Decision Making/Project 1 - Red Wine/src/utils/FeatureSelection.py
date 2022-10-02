#
import pandas as pd
from numpy import array
from sklearn.datasets import load_iris
from sklearn.feature_selection import SelectKBest, chi2, f_classif, VarianceThreshold, mutual_info_regression
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

    # Chi-square Test
    # see: https://www.analyticsvidhya.com/blog/2020/10/feature-selection-techniques-in-machine-learning/
    # The Chi-square src is used for categorical features in a dataset. We calculate Chi-square between each feature and the target and select the desired number of features with the best Chi-square scores. In order to correctly apply the chi-squared in order to src the relation between various features in the dataset and the target variable, the following conditions have to be met: the variables have to be categorical, sampled independently and values should have an expected frequency greater than 5.
    def chi_square_test(self, X, y, k='all'):
        skb = SelectKBest(chi2, k=k)
        skb.fit(X, y)

        df = pd.DataFrame(X.columns, columns=['name'])
        df['scores'] = skb.scores_
        df = df.sort_values(['scores'], ascending=False).reset_index(drop=True, inplace=False)
        print("%25s\t%15s" % ('colume', 'score'))
        for i, col in enumerate(df['name']):
            print("%25s\t%15s" % (col, "%.3f" % df['scores'][i]))
        new_x = skb.transform(X)
        selected_feature_names = df['name'].values[:k]
        return selected_feature_names, new_x

    def mutual_information_classification(self, dfx, dfy):
        X = dfx.to_numpy()
        y = dfy.to_numpy()
        mi_score = mutual_info_classif(X, y)

        df = pd.DataFrame(dfx.columns, columns=['name'])
        df['scores'] = mi_score
        df = df.sort_values(['scores'], ascending=False).reset_index(drop=True, inplace=False)

        print("%25s\t%25s" % ('colume', 'mutual information score'))
        for i, col in enumerate(df['name']):
            print("%25s\t%25s" % (col, "%.3f" % df['scores'][i]))
        return X, y

    def mutual_information_regression(self, dfx, dfy):
        X = dfx.to_numpy()
        y = dfy.to_numpy()
        mi_score = mutual_info_regression(X, y)
        print("%25s\t%25s" % ('colume', 'mutual information score'))
        for i, col in enumerate(dfx.columns):
            print("%25s\t%25s" % (col, "%.3f" % mi_score[i]))
        return X, y

    def variance_threshold(self, dfx):
        selector = VarianceThreshold()
        selector.fit(dfx)
        print("%25s\t%10s" % ('colume', 'variances'))
        for i, col in enumerate(dfx.columns):
            print("%25s\t%10s" % (col, "%.3f" % selector.variances_[i]))
        X = dfx.transform(dfx.to_numpy())
        return X

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
