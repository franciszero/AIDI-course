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

# We cancel the warning because it causes confusion in the printouts
# warnings.filterwarnings("ignore")
# print(os.list("../input"))


# %matplotlib inline


def get_models():
    models = []
    models.append(("LR", LogisticRegression()))
    models.append(("NB", GaussianNB()))
    models.append(("KNN", KNeighborsClassifier()))
    models.append(("DT", DecisionTreeClassifier()))
    models.append(("SVM rbf", SVC()))
    models.append(("SVM linear", SVC(kernel='linear')))
    models.append(('LDA', LinearDiscriminantAnalysis()))

    return models


def cross_validation_scores_for_various_ml_models(X_cv, y_cv):
    print("Cross Validation Success Rates".upper())
    models = get_models()

    results = []
    names = []

    for name, model in models:
        kfold = StratifiedKFold(n_splits=5, shuffle=True, random_state=22)
        cv_result = cross_val_score(model, X_cv, y_cv, cv=kfold, scoring="accuracy")
        names.append(name)
        results.append(cv_result)
        print("The {} model was cross-validated, success rate:{:0.2f}".format(name, cv_result.mean()))


def SVM_GridSearch(X_train, X_test, y_train, y_test):
    best_score = 0
    gammas = [0.001, 0.01, 0.1, 1, 10, 100]
    Cs = [0.001, 0.01, 0.1, 1, 10, 100]

    for gamma in gammas:
        for C in Cs:
            svm = SVC(kernel='rbf', gamma=gamma, C=C)
            svm.fit(X_train, y_train)

            score = svm.score(X_test, y_test)

            if score > best_score:
                y_pred = svm.predict(X_test)
                best_score = score
                best_params = {'C': C, 'gamma': gamma}

    print("best score:", best_score)
    print("best params:", best_params)
    print("classification reports:\n", classification_report(y_test, y_pred))


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    pd.set_option('display.max_columns', 20)
    pd.set_option('display.width', 1000)

    workspace = "/Users/francis/Documents/Georgian College/AIDI/AI for Business Decision Making/Assign1 - Red wine/solution"
    path = workspace + "/data/winequality-red.csv"

    df = pd.read_csv(path)
    df.info()

    print(df.describe().T)
    selected_features = ['residual sugar', 'total sulfur dioxide', 'sulphates',
                         'alcohol', 'volatile acidity', 'quality']

    dataset_temp = df.copy(deep=True)
    X = df.drop('quality', axis=1)
    y = df['quality']

    X = StandardScaler().fit_transform(X)
    cross_validation_scores_for_various_ml_models(X, y)

    titanic = sns.load_dataset('titanic')
    iris = sns.load_dataset('iris')

    # fig = sns.pairplot(df)
    # fig.savefig(workspace + "/output/1.png")

    # fig = sns.pairplot(df, hue="quality", plot_kws = {'alpha': 0.7})
    # fig.map_lower(sns.kdeplot, levels=3)
    # fig.savefig(workspace + "/output/2.png", dpi=400)
