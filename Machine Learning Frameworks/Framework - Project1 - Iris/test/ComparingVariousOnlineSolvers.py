# coding=utf-8
import numpy as np
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.datasets import load_iris
from sklearn import model_selection
from sklearn.model_selection import train_test_split
from sklearn.linear_model import SGDClassifier, Perceptron
from sklearn.linear_model import PassiveAggressiveClassifier
from sklearn.linear_model import LogisticRegression

# see: https://scikit-learn.org/stable/auto_examples/linear_model/plot_sgd_comparison.html#sphx-glr-auto-examples-linear-model-plot-sgd-comparison-py
if __name__ == '__main__':
    # Number of rounds to fit and evaluate an estimator.
    rounds = 10

    # iris = load_iris()
    # print(iris.data)
    #
    # X = iris.data
    # y = iris.target
    # X_model, X_test, y_model, y_test = train_test_split(X, y, random_state=101, test_size=0.2)

    X, y = datasets.load_digits(return_X_y=True)

    classifiers = [
        ("SGD", SGDClassifier(max_iter=110)),
        ("ASGD", SGDClassifier(max_iter=110, average=True)),
        ("Perceptron", Perceptron(max_iter=110)),
        (
            "Passive-Aggressive I",
            PassiveAggressiveClassifier(max_iter=110, loss="hinge", C=1.0, tol=1e-4),
        ),
        (
            "Passive-Aggressive II",
            PassiveAggressiveClassifier(
                max_iter=110, loss="squared_hinge", C=1.0, tol=1e-4
            ),
        ),
        (
            "SAG",
            LogisticRegression(max_iter=110, solver="sag", tol=1e-1, C=1.0e4 / X.shape[0]),
        ),
    ]

    heldout = np.arange(0.01, 1, 0.1)
    xx = 1.0 - np.array(heldout)

    for name, clf in classifiers:
        print("training %s" % name)
        rng = np.random.RandomState(42)
        yy = []
        for i in heldout:
            yy_ = []
            for j, r in enumerate(range(rounds)):
                X_train, X_test, y_train, y_test = train_test_split(
                    X, y, test_size=i, random_state=rng
                )
                print("%s, %f, %d, %s, %s" % (name, i, j, str(X_train.shape), len(y_train)))
                clf.fit(X_train, y_train)
                y_pred = clf.predict(X_test)
                yy_.append(1 - np.mean(y_pred == y_test))
            yy.append(np.mean(yy_))
        plt.plot(xx, yy, label=name)

    # for name, clf in classifiers:
    #     print("training %s" % name)
    #     rng = np.random.RandomState(42)
    #     yy = []
    #     for i in heldout:
    #         yy_ = []
    #         for j, r in enumerate(range(1)):
    #             # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=i, random_state=rng)
    #             X_train, X_valid, y_train, y_valid = train_test_split(X_model, y_model, random_state=101, test_size=0.25)
    #             print("%d, %s, %s" % (j, str(X_train.shape), len(y_train)))
    #             clf.fit(X_train, y_train)
    #             y_pred = clf.predict(X_valid)
    #             yy_.append(1 - np.mean(y_pred == y_valid))
    #         yy.append(np.mean(yy_))
    #     plt.plot(xx, yy, label=name)

    plt.legend(loc="upper right")
    plt.xlabel("Proportion train")
    plt.ylabel("Test Error Rate")
    plt.show()
    pass
