# coding=utf-8
# Loading Required Libraries
import numpy as np  # linear algebra
import pandas as pd  # data manipulation

# Visualization Libraries
import seaborn as sns
import matplotlib.pyplot as plt

# Machine learning tools
from sklearn.preprocessing import StandardScaler, RobustScaler
from sklearn.model_selection import train_test_split
from sklearn.model_selection import StratifiedKFold
from sklearn.model_selection import cross_val_score

# Machine learning algorithms
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

# Performance metrics
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# import imblearn
# from imblearn.over_sampling import SMOTE
# System libraries
import os
import warnings

from test.RedWine import RedWine
# %matplotlib inline


if __name__ == '__main__':
    foo = RedWine()

    # Data Preparation Phase
    # see: https://www.projectpro.io/article/8-feature-engineering-techniques-for-machine-learning/423
    # 1.exploratory data analysis
    # 2.data cleaning
    # 3.feature engineering
    # 3.1

