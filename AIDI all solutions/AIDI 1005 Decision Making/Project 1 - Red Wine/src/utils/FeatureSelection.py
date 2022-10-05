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

    # Chi-square Test
    # see: https://www.analyticsvidhya.com/blog/2020/10/feature-selection-techniques-in-machine-learning/
    # The Chi-square src is used for categorical features in a dataset. We calculate Chi-square between each feature and the target and select the desired number of features with the best Chi-square scores. In order to correctly apply the chi-squared in order to src the relation between various features in the dataset and the target variable, the following conditions have to be met: the variables have to be categorical, sampled independently and values should have an expected frequency greater than 5.
    @staticmethod
    def chi_square_test(X, y, k='all'):
        skb = SelectKBest(chi2, k=k)
        skb.fit(X, y)
        FeatureSelection.print_scores(X, skb.scores_)
        new_x = skb.transform(X)
        return new_x

    @staticmethod
    def mutual_information_classification(dfx, dfy):
        X = dfx.to_numpy()
        y = dfy.to_numpy()
        mi_score = mutual_info_classif(X, y)
        FeatureSelection.print_scores(dfx, mi_score)
        return X, y

    @staticmethod
    def mutual_information_regression(dfx, dfy):
        X = dfx.to_numpy()
        y = dfy.to_numpy()
        mi_score = mutual_info_regression(X, y)
        FeatureSelection.print_scores(dfx, mi_score)
        return X, y

    @staticmethod
    def variance_threshold(dfx):
        selector = VarianceThreshold()
        selector.fit(dfx)
        FeatureSelection.print_scores(dfx, selector.variances_)
        X = selector.transform(dfx.to_numpy())
        return X

    @staticmethod
    def print_scores(dfx, scores):
        df = pd.DataFrame(dfx.columns, columns=['name'])
        df['scores'] = scores
        df = df.sort_values(['scores'], ascending=False).reset_index(drop=True, inplace=False)
        print("%25s\t%10s" % ('column', 'scores'))
        for i, col in enumerate(dfx.columns):
            print("%25s\t%10s" % (col, "%.3f" % df['scores'][i]))

    @staticmethod
    # different types of feature selection
    # https://medium.com/analytics-vidhya/feature-selection-in-machine-learning-ec1f5d053007
    # The 5 Feature Selection Algorithms every Data Scientist should know
    # https://towardsdatascience.com/the-5-feature-selection-algorithms-every-data-scientist-need-to-know-3a6b566efd2
    # How to Choose a Feature Selection Method For Machine Learning
    # https://machinelearningmastery.com/feature-selection-with-real-and-categorical-data/
    def feature_selection(score_func, X, y, k=10):
        """
        :param X: x
        :param y: y
        :param score_func:
            f_classif:              ANOVA F-value between label/feature for classification tasks.
            mutual_info_classif:    Mutual information for a discrete target.
            chi2:                   Chi-squared stats of non-negative features for classification tasks.
            f_regression:           F-value between label/feature for regression tasks.
            mutual_info_regression: Mutual information for a continuous target.
            SelectPercentile:       Select features based on percentile of the highest scores.
            SelectFpr:              Select features based on a false positive rate test.
            SelectFdr:              Select features based on an estimated false discovery rate.
            SelectFwe:              Select features based on family-wise error rate.
            GenericUnivariateSelect:Univariate feature selector with configurable mode.
        :param k: 10
        :return: k best
        """
        # pearson's correlation feature selection for numeric input and numeric output
        # generate dataset
        # X, y = make_regression(n_samples=100, n_features=100)
        # define feature selection
        skb = SelectKBest(score_func=score_func, k=k)
        # apply feature selection
        new_x = skb.fit_transform(X, y)
        FeatureSelection.print_fs(skb)
        return new_x

    @staticmethod
    def print_fs(skb):
        print("%17s\t%s\n%17s\t%s\n%17s\t%s\n" %
              ("feature score", skb.scores_,
               "feature pvalues", skb.pvalues_,
               "feature selected", skb.get_support(indices=True))
              )


if __name__ == '__main__':
    fs = FeatureSelection()
