# coding=utf-8
import random
from time import time

import numpy as np  # linear algebra
import pandas as pd  # data manipulation
import xgboost as xgb

# Visualization Libraries
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib import pyplot
from sklearn import metrics
from sklearn.datasets import load_digits, make_hastie_10_2
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import SelectKBest, chi2, f_classif, mutual_info_classif, f_regression, \
    mutual_info_regression, SelectPercentile, SelectFpr, SelectFdr, SelectFwe, GenericUnivariateSelect

# Machine learning tools
from sklearn.preprocessing import StandardScaler, RobustScaler, LabelEncoder
from sklearn.model_selection import train_test_split, RandomizedSearchCV, KFold, GridSearchCV, validation_curve, \
    StratifiedGroupKFold
from sklearn.model_selection import StratifiedKFold
from sklearn.model_selection import cross_val_score

# Machine learning algorithms
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.model_selection import learning_curve
from sklearn.model_selection import ShuffleSplit

# Performance metrics
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report, roc_auc_score, mean_squared_error, \
    r2_score, mean_absolute_error, make_scorer, plot_confusion_matrix, roc_curve, RocCurveDisplay
from sklearn.ensemble import IsolationForest

# import imblearn
# from imblearn.over_sampling import SMOTE
# System libraries
import os
import warnings

# from xgboost import XGBClassifier, XGBRegressor
from xgboost.sklearn import XGBRegressor

from utils.FeatureSelection import FeatureSelection

from RedWine import RedWine

# %matplotlib inline


if __name__ == '__main__':
    # lc = RedWine(LinearRegression())
    # lc.eda_info()
    # lc.eda_describe()
    # lc.eda_check_nan()
    # lc.eda_feature_correlations_heatmap()
    # lc.feature_importance()
    #
    # lc.eda_dfx_scaling()
    # lc.outlier_removal(debug_log=True)
    # params = {
    #     'C': [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1.0, 2.0, 5.0, 10.0],
    # }
    # scoring = {
    #     "Accuracy": make_scorer(accuracy_score),
    #     "mean_absolute_error": make_scorer(mean_absolute_error),
    #     "mean_squared_error": make_scorer(mean_squared_error),
    #     "r2_score": make_scorer(r2_score),
    # }
    # lc.fit(params, scoring)
    # lc.GridSearchCV_evaluating_visualization(params, scoring)
    # lc.pred()
    # lc.plot_confusion_mat()
    # lc.report()

    params = {
        'normalize': [True, False],
    }
    scoring = {
        "r2_score": make_scorer(r2_score),
        "mean_absolute_error": make_scorer(mean_absolute_error),
        "mean_squared_error": make_scorer(mean_squared_error),
    }
    kf1 = RedWine(LinearRegression())
    kf1.eda_dfx_scaling()
    kf1.outlier_removal(debug_log=False)
    # skb
    skb = SelectKBest(score_func=f_classif, k=kf1.dfx.shape[1] - 1)
    skb.fit(kf1.dfx, kf1.dfy)
    kf1.dfx = skb.transform(kf1.dfx)
    #
    kf1.fit(params, scoring, rf='r2_score', cv=kf1.fold)
    start = time()
    y_pred = kf1.gs.predict(kf1.X_test)
    cost = (time() - start) * 1000
    print("r2_score           : %.3f" % r2_score(kf1.y_test, y_pred))
    print("mean_absolute_error: %.3f" % mean_absolute_error(kf1.y_test, y_pred))
    print("mean_squared_error : %.3f" % mean_squared_error(kf1.y_test, y_pred))
    print("latency            : %.3f ms" % cost)

    from sklearn.linear_model import LogisticRegression, LinearRegression

    params = {
        'normalize': [True, False],
    }
    scoring = {
        "r2_score": make_scorer(r2_score),
        "mean_absolute_error": make_scorer(mean_absolute_error),
        "mean_squared_error": make_scorer(mean_squared_error),
    }
    kf1 = RedWine(LinearRegression())
    kf1.eda_dfx_scaling()
    kf1.outlier_removal(debug_log=False)
    kf1.fit(params, scoring, rf='r2_score', cv=kf1.fold)
    y_pred = kf1.gs.predict(kf1.X_test)
    print("r2_score           : %.3f" % r2_score(kf1.y_test, y_pred))
    print("mean_absolute_error: %.3f" % mean_absolute_error(kf1.y_test, y_pred))
    print("mean_squared_error : %.3f" % mean_squared_error(kf1.y_test, y_pred))
    i = None

    # {'n_estimators': 200, 'min_child_weight': 9, 'max_depth': 9, 'learning_rate': 0.5, 'gamma': 0.3, 'colsample_bytree': 0.7}
    params = {
        "learning_rate": np.arange(0, 1.1, 0.1),
        "max_depth": np.arange(1, 6, 2),
        "min_child_weight": range(1, 10),
        "gamma": np.arange(0, 0.7, 0.2),
        "colsample_bytree": np.arange(0.3, 1.1, 0.1),
        "n_estimators": np.arange(20, 201, 20)
    }
    scoring = {
        "Accuracy": make_scorer(accuracy_score),
        "mean_absolute_error": make_scorer(mean_absolute_error),
        "mean_squared_error": make_scorer(mean_squared_error),
        "r2_score": make_scorer(r2_score),
    }

    from xgboost.sklearn import XGBRegressor

    xgb1 = RedWine(XGBRegressor(eval_metric='auc'), params=(8, 1, 1, 10))
    xgb1.eda_dfx_scaling()
    xgb1.outlier_removal(debug_log=False)
    xgb1.X_modeling, xgb1.X_test, xgb1.y_modeling, xgb1.y_test = \
        train_test_split(xgb1.dfx, xgb1.dfy, test_size=xgb1.tt / xgb1.g, random_state=999, stratify=xgb1.dfy)
    xgb1.gs = RandomizedSearchCV(xgb1.model, params, cv=xgb1.fold, verbose=0,
                                 scoring=scoring, refit=list(scoring.items())[0][0], return_train_score=True, )
    xgb1.gs.fit(xgb1.X_modeling, xgb1.y_modeling)
    y_pred = xgb1.gs.predict(xgb1.X_test)
    print("r2_score           : %.3f" % r2_score(xgb1.y_test, y_pred))
    print("mean_absolute_error: %.3f" % mean_absolute_error(xgb1.y_test, y_pred))
    print("mean_squared_error : %.3f" % mean_squared_error(xgb1.y_test, y_pred))

    xgb1.feature_importance()

    # xgb
    '''
    (tr, v, tt, grp, r1) = (8, 1, 1, 10, 5)
    xgb = RedWine()
    xgb.eda_dfx_scaling()
    dfx_scaling_rmo, dfy_scaling_rmo = xgb.outlier_removal(xgb.dfx_scaling, debug_log=False)
    xgb.dfx = dfx_scaling_rmo
    xgb.dfy = dfy_scaling_rmo
    xgb.test_data_proportion(tr, v, tt, g=grp, seed=999, open_display=False)
    X_train, y_train, X_valid, y_valid = \
        xgb.valid_data_proportion(tr, v, tt, g=grp, seed=random.randint(1, 1000), open_display=False)
    # n, model = xgb.get_best_xgb(X_train, y_train, cv=kfold, display_param_selection=False)

    params = {
        "learning_rate": [0.01, 0.1, 1, 10],
        "max_depth": [2, 5, 10, 15, 20],
        # "min_child_weight": [1, 2, 3, 4],
        # "gamma": [0.0, 0.1, 0.05],
        # "colsample_bytree": [0.3, 0.4, 0.5],
        "n_estimators": [10, 20, 50, 100, 200]
    }
    gs = GridSearchCV(XGBClassifier(), params, n_jobs=5,
                      cv=StratifiedKFold(n_splits=5, shuffle=True, random_state=True),
                      scoring='accuracy', verbose=2, refit=True)
    gs.fit(X_train, y_train)
    xgb.print_results(gs)
    y_pred = gs.predict(X_valid)
    tup = (accuracy_score(y_valid, y_pred), mean_squared_error(y_valid, y_pred),
           r2_score(y_valid, y_pred), mean_absolute_error(y_valid, y_pred),
           confusion_matrix(y_valid, y_pred), classification_report(y_valid, y_pred))
    '''

    '''
    # xgb test
    # RandomSearchCV
    params = {
        "learning_rate": [0.01, 0.02, 0.05, 0.08, 0.1, 0.2, 0.4, 0.6, 0.8, 1],
        "max_depth": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15],
        "min_child_weight": [1, 2, 3, 4, 5, 6, 7, 8, 9],
        "gamma": [0.0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5],
        "colsample_bytree": [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        "n_estimators": [10, 20, 50, 70, 80, 90, 100, 150, 200]
    }
    classifier = XGBClassifier()
    random_search = RandomizedSearchCV(classifier, param_distributions=params, n_iter=10,
                                       scoring="accuracy", n_jobs=-1, cv=5, verbose=3)
    # preprocessing
    xgb = RedWine()
    xgb.eda_dfx_scaling()
    dfx_scaling_rmo, dfy_scaling_rmo = xgb.outlier_removal(xgb.dfx_scaling, debug_log=False)
    # skb
    skb = SelectKBest(score_func=f_classif, k=dfx_scaling_rmo.shape[1] - 1)
    skb.fit(dfx_scaling_rmo, dfy_scaling_rmo)
    xgb.dfx = skb.transform(dfx_scaling_rmo)
    xgb.dfy = dfy_scaling_rmo
    # tts
    (tr, v, tt, grp, r1) = (8, 1, 1, 10, 5)
    xgb.test_data_proportion(tr, v, tt, g=grp, seed=999, open_display=False)
    X_train, y_train, X_valid, y_valid = \
        xgb.valid_data_proportion(tr, v, tt, g=grp, seed=random.randint(1, 1000), open_display=False)
    # applying random search
    evalset = [(X_train, y_train), (X_valid, y_valid)]
    random_search.fit(X_train, y_train, eval_metric=["mlogloss"], eval_set=evalset)
    xgb_model = random_search.best_estimator_
    xgb.print_results(random_search)
    # prediction
    y_pred = xgb_model.predict(X_valid)
    y_pred_train = xgb_model.predict(X_train)
    results = xgb_model.evals_result()
    tup = (accuracy_score(y_valid, y_pred), mean_squared_error(y_valid, y_pred),
           r2_score(y_valid, y_pred), mean_absolute_error(y_valid, y_pred),
           confusion_matrix(y_valid, y_pred), classification_report(y_valid, y_pred))
    # print result
    print("Training set accuracy : {}\nConfusion matrix :\n {}\nFull Report :\n{}\nroc_auc_score : {}".format(
        accuracy_score(y_pred_train, y_train),
        confusion_matrix(y_pred_train, y_train),
        classification_report(y_pred_train, y_train),
        0.0  # roc_auc_score(y_pred_train, y_train)
    ))
    print("Testing set accuracy : {}\nConfusion matrix :\n {}\nFull Report :\n{}\nroc_auc_score : {}".format(
        accuracy_score(y_pred, y_valid),
        confusion_matrix(y_pred, y_valid),
        classification_report(y_pred, y_valid),
        0.0  # roc_auc_score(y_pred, y_valid)
    ))

    # retrieve performance metrics
    xg_train = xgb.DMatrix(x_train, label=y_train)
    xg_test = xgb.DMatrix(x_test, label=y_test)
    evals_result = {}  # 记录训练集误差和验证集误差
    bst = xgb.train(param,
                    xg_train,
                    evals=[(xg_train, 'Train'), (xg_test, 'Valid')],
                    num_boost_round=num_round,
                    evals_result=evals_result,
                    verbose_eval=True)
    '''

    i = 0
    # fs = FeatureSelection()
    # new_X = fs.feature_selection(f_classif, foo.dfx, foo.dfy, k=10)
    # print(new_X)
    # foo.dfx = new_X

    # lst = [np.array((6, 2, 2, 10, 1)), np.array((8, 1, 1, 10, 1))]
    # for i, (tr, v, tt, grp, interval) in enumerate(lst):
    #     foo.test_data_proportion(tr, v, tt, g=grp, seed=999, open_display=False)
    #     arr = [foo.model_selection(foo.get_best_lr, foo.dfy, foo.dfy, tr, v, tt, g=grp, r=interval, open_display=False),
    #            foo.model_selection(foo.get_best_svm, foo.dfy, foo.dfy, tr, v, tt, g=grp, r=interval, open_display=False)
    #            ]
    #
    #     print("Now the best model is")
    #     best_model_name = None
    #     best_model = None
    #     best_accuracy = 0.0
    #     foo.print_title()
    #     for _, tup in enumerate(arr):
    #         foo.print_result(tup)
    #         name = tup[0]
    #         cv = tup[1]
    #         accuracy = tup[2][3]
    #         if accuracy > best_accuracy:
    #             best_accuracy = accuracy
    #             best_model = cv
    #             best_model_name = name
    #     print("The best model is {}\n".format(best_model_name))
    #
    #     print("Apply the src dataset on the best model {}".format(best_model_name))
    #     params = foo.validate(best_model, foo.X_test, foo.y_test)
    #     foo.print_title()
    #     foo.print_result((best_model_name, best_model, params))
    #     print("The accuracy of the best model is {} with sample proportion {}/{}/{}\n".format(params[3], tr, v, tt))

    # # feature selection method 3
    # selector = SelectKBest(score_func=chi2, k=5)
    # new_data = selector.fit_transform(X, y)
    # mask = selector.get_support()
    # new_features = X.columns[mask]
    # print(new_features)

    # Data Preparation Phase
    # see: https://www.projectpro.io/article/8-feature-engineering-techniques-for-machine-learning/423
    # 1.exploratory data analysis
    # 2.data cleaning
    # 3.feature engineering
    # 3.1
