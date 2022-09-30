# coding=utf-8
import numpy as np
import matplotlib.pyplot as plt
from sklearn.neighbors import KernelDensity
from sklearn.model_selection import GridSearchCV
from scipy.stats import norm


class KDESample:
    def __init__(self):
        x = np.concatenate((np.random.normal(0, 1, int(0.3 * 100)),
                            np.random.normal(5, 1, int(0.7 * 100))
                            ))[:, np.newaxis]
        plot_x = np.linspace(-5, 10, 1000)[:, np.newaxis]
        true_dens = 0.3 * norm(0, 1).pdf(plot_x) + 0.7 * norm(5, 1).pdf(plot_x)

        log_dens = KernelDensity(bandwidth=1).fit(x).score_samples(plot_x)

        plt.figure(),
        plt.fill(plot_x, true_dens, fc='#AAAAFF', label='true_density')
        plt.plot(plot_x, np.exp(log_dens), 'r', label='estimated_density')
        for _ in range(x.shape[0]):
            plt.plot(x[:, 0], np.zeros(x.shape[0]) - 0.01, 'g*')
        plt.legend()
        plt.show()


def generate_data(seed=17):
    # Fix the seed to reproduce the results
    rand = np.random.RandomState(seed)
    x = []
    dat = rand.lognormal(0, 0.3, 1000)
    x = np.concatenate((x, dat))
    dat = rand.normal(3, 1, 1000)
    x = np.concatenate((x, dat))
    return x


def my_scores(estimator, X):
    scores = estimator.score_samples(X)
    # Remove -inf
    scores = scores[scores != float('-inf')]
    # Return the mean values
    return np.mean(scores)


if __name__ == '__main__':
    KDESample()

    '''
    核密度估计及其Python实践
    https://blog.csdn.net/yuanzywhu/article/details/115175706
    '''
    x_train = generate_data()[:, np.newaxis]
    fig, ax = plt.subplots(nrows=1, ncols=2, figsize=(10, 5))
    # subplot1
    plt.subplot(121)
    plt.scatter(np.arange(len(x_train)), x_train, c='green')
    plt.xlabel('Sample no.')
    plt.ylabel('Value')
    plt.title('Scatter plot')
    # subplot2
    plt.subplot(122)
    plt.hist(x_train, bins=50)
    plt.title('Histogram')
    # plot show
    fig.subplots_adjust(wspace=.3)
    plt.show()

    # 为了找到被估计密度函数的形状，我们可以生成一组彼此等距的点并估计各点的核密度。生成测试点的语句如下：
    x_test = np.linspace(-1, 7, 2000)[:, np.newaxis]
    # 现创建一个KernelDensity对象model，并使用fit()方法判定各样本得分的程序段如下：
    model = KernelDensity()
    model.fit(x_train)
    log_dens = model.score_samples(x_test)
    plt.fill(x_test, np.exp(log_dens), c='cyan')
    plt.show()

    # 4. 理解带宽参数
    # 前面的核密度函数估计程序段输出结果不是十分理想，主要原因是采用了(bandwidth=1)默认参数。下面程序段使用了不同带宽进行实验，以便观察带宽对密度估计的影响(见图3)。
    bandwidths = [0.01, 0.05, 0.1, 0.5, 1, 4]
    fig, ax = plt.subplots(nrows=2, ncols=3, figsize=(10, 7))
    plt_ind = np.arange(6) + 231

    for b, ind in zip(bandwidths, plt_ind):
        kde_model = KernelDensity(kernel='gaussian', bandwidth=b)
        kde_model.fit(x_train)
        score = kde_model.score_samples(x_test)
        plt.subplot(ind)
        plt.fill(x_test, np.exp(score), c='cyan')
        plt.title("h=" + str(b))

    fig.subplots_adjust(hspace=0.5, wspace=.3)
    plt.show()

    # 5. 调整带宽参数
    # GridSearchCV(Cross-Validated Grid-Search，交叉验证网格搜索)允许通过多折交叉验证对带宽参数进行调优并返回参数值，其默认的交叉验证参数是三折交叉验证
    bandwidth = np.arange(0.05, 2, .05)
    kde = KernelDensity(kernel='gaussian')
    grid = GridSearchCV(kde, {'bandwidth': bandwidth})
    grid.fit(x_train)

    # 最佳模型可通过GridSearchCV类对象的best_estimator_字段进行搜索。以下程序段是采用Gauss核的最佳核密度估计并显示出最佳带宽值(见图4)
    kde = grid.best_estimator_
    log_dens = kde.score_samples(x_test)
    plt.fill(x_test, np.exp(log_dens), c='cyan')
    plt.title('Optimal estimate with Gaussian kernel')
    plt.show()
    print("optimal bandwidth: " + "{:.2f}".format(kde.bandwidth))

    # 了解核函数的最直接方式是为其画像(绘制图形)。首先，我们可用一个样本点来构建模型；接着，估计该样本点附近所有点的密度，并沿y轴绘制密度。以下程序段用来绘制6个典型核函数的图形(见图5)
    kernels = ['cosine', 'epanechnikov', 'exponential', 'gaussian', 'linear', 'tophat']
    fig, ax = plt.subplots(nrows=2, ncols=3, figsize=(10, 7))
    plt_ind = np.arange(6) + 231

    for k, ind in zip(kernels, plt_ind):
        kde_model = KernelDensity(kernel=k)
        kde_model.fit([[0]])
        score = kde_model.score_samples(np.arange(-2, 2, 0.1)[:, None])
        plt.subplot(ind)
        plt.fill(np.arange(-2, 2, 0.1)[:, None], np.exp(score), c='blue')
        plt.title(k)

    fig.subplots_adjust(hspace=0.5, wspace=.3)
    plt.show()

    # 7. 实验不同的核函数
    # 下面程序段采用了不同的核函数进行实验，以观察使用不同核函数和合成数据来估计概率密度函数。可以与前面一样使用GridSearchCV()来寻找最佳带宽值。但是，对于余弦、线性和Tophat核函数会因一些-inf评分，可能导致GridSearchCV()函数执行时发出运行时警告，一种解决方案是为GridSearchCV()编写自定义评分函数。在下面程序段中，自定义评分函数my_scores()中忽略了测试点-inf评分而返回平均值。当然，采用该方案并非是处理-inf评分的最佳策略，我们也可根据已有样本数据采取其他的策略。

    kernels = ['cosine', 'epanechnikov', 'exponential', 'gaussian', 'linear', 'tophat']
    fig, ax = plt.subplots(nrows=2, ncols=3, figsize=(10, 7))
    plt_ind = np.arange(6) + 231
    h_vals = np.arange(0.05, 1, .1)

    for k, ind in zip(kernels, plt_ind):
        grid = GridSearchCV(KernelDensity(kernel=k),
                            {'bandwidth': h_vals},
                            scoring=my_scores)
        grid.fit(x_train)
        kde = grid.best_estimator_
        log_dens = kde.score_samples(x_test)
        plt.subplot(ind)
        plt.fill(x_test, np.exp(log_dens), c='cyan')
        plt.title(k + " h=" + "{:.2f}".format(kde.bandwidth))

    fig.subplots_adjust(hspace=.5, wspace=.3)
    plt.show()

    # 8. 最终的优化模型
    # 前面介绍了采用不同核函数进行密度估计。下面程序段再对GridSearchCV()函数进行一些设置，这样不仅能发现最佳带宽，还能寻找到所使用样本数据的最佳核函数。
    grid = GridSearchCV(KernelDensity(),
                        {'bandwidth': h_vals, 'kernel': kernels},
                        scoring=my_scores)
    grid.fit(x_train)
    best_kde = grid.best_estimator_
    log_dens = best_kde.score_samples(x_test)
    plt.fill(x_test, np.exp(log_dens), c='cyan')
    plt.title("Best Kernel: " + best_kde.kernel + " h=" + "{:.2f}".format(best_kde.bandwidth))
    plt.show()

    # 参考文献：
    # 1.Trevor Hastie et al. The Elements of Statistical Learning (2nd Edition), Springer.
    # 2.李弼程等. 模式识别原理与应用, 西电版.
    # 3.齐敏等. 模式识别导论, 清华版.
    # 4.https://stackabuse.com
    # 5.https://www.zhihu.com/question/27301358
    # 6.https://en.wikipedia.org/wiki/Kernel_density_estimation
    #
    # 发布日期：2021年03月24日
    # ————————————————
    # 版权声明：本文为CSDN博主「袁易学」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    # 原文链接：https://blog.csdn.net/yuanzywhu/article/details/115175706
