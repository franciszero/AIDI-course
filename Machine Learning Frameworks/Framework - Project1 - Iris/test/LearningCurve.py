# coding=utf-8
from sklearn.model_selection import learning_curve
from sklearn.datasets import load_digits
from sklearn.svm import SVC
import matplotlib.pyplot as plt
import numpy as np


def valid_curve():
    from sklearn.model_selection import validation_curve
    from sklearn.datasets import load_digits
    from sklearn.svm import SVC
    import matplotlib.pyplot as plt
    import numpy as np

    digits = load_digits()
    X = digits.data
    y = digits.target
    param_range = np.logspace(-6, -2.3, 5)  # 参数范围从-6到-2.3,之间 取5个点
    train_loss, validation_loss = validation_curve(
        SVC(), X, y, param_name='gamma', param_range=param_range, cv=10, scoring='neg_mean_squared_error'
    )  # 对于SVC()分类器中的gamma参数设置取值范围param_range

    print(train_loss)
    print(validation_loss)
    train_loss_mean = -np.mean(train_loss, axis=1)
    validation_loss_mean = -np.mean(validation_loss, axis=1)
    plt.plot(param_range, train_loss_mean, 'o-', color='r', label='Training')
    plt.plot(param_range, validation_loss_mean, 'o-', color='g', label='Cross-validation')
    plt.xlabel('gamma')
    plt.ylabel('Loss')
    plt.legend(loc='best')
    plt.show()


def learning_curve():
    from sklearn.model_selection import learning_curve
    from sklearn.datasets import load_digits
    from sklearn.svm import SVC
    import matplotlib.pyplot as plt
    import numpy as np

    digits = load_digits()
    X = digits.data
    y = digits.target
    print(X.shape)  # (1797, 64)
    train_sizes, train_loss, val_loss = learning_curve(
        SVC(gamma=0.001), X, y, cv=10, scoring='neg_mean_squared_error',
        train_sizes=[0.1, 0.25, 0.5, 0.75, 1]  # 在整个过程中的10%取一次，25%取一次，50%取一次，75%取一次，100%取一次
    )
    print(train_sizes)  # [ 161  404  808 1212 1617]
    print(train_loss)
    print(val_loss)
    train_loss_mean = -np.mean(train_loss, axis=1)
    val_loss_mean = -np.mean(val_loss, axis=1)
    plt.plot(train_sizes, train_loss_mean, 'o-', color='r', label='Training')
    plt.plot(train_sizes, val_loss_mean, 'o-', color='g', label='Cross-validation')
    plt.xlabel('Training examples')
    plt.ylabel('Loss')
    plt.legend(loc='best')
    plt.show()


# see: https://blog.csdn.net/vincent_duan/article/details/121270138
if __name__ == '__main__':

    pass
