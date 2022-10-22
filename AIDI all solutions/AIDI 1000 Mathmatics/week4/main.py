import numpy as np
import matplotlib.pyplot as plt

import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import math


def numerical_gradient(f, P):
    grad = np.zeros_like(P)
    for i in range(P[0].size):
        grad[0][i] = fx1(P[0][i], P[1][i])
        grad[1][i] = fx2(P[0][i], P[1][i])
    return grad


def f(x1, x2):
    return 6 * x1 ** 2 - 3 * x1 * x2 + 2 * x2 ** 2


def fx1(x1, x2):
    return 12 * x1 - 3 * x2 + 2 * x2 ** 2


def fx2(x1, x2):
    return 6 * x1 ** 2 - 3 * x1 + 4 * x2


def mold(px1, px2):
    return math.sqrt((px1 ** 2 + px2 ** 2))


def gradient_decent(x1, x2, alpha=0.05, epsilon=0.0001, max_iter=10000):
    x1, x2 = 2, 3
    px1, px2 = fx1(x1, x2), fx2(x1, x2)
    md = mold(px1, px2)
    T1, T2, T3 = [], [], []
    cnt = 0
    convergence_cnt = 0
    while True:
        if md < epsilon:
            print("break when gradient vanished: %.6f<%.6f after %d times" % (md, epsilon, cnt))
            break
        if cnt > max_iter:
            print("break when iterate %d times with gradient %.6f" % (cnt, md))
            break
        if convergence_cnt > 5:
            print("gradient convergence after 5 times")
            break
        T1.append(x1)
        T2.append(x2)
        T3.append(f(x1, x2))
        px1 = fx1(x1, x2)
        px2 = fx2(x1, x2)
        tmp = mold(px1, px2)
        if tmp > md:
            convergence_cnt += 1
        x1 = x1 - alpha * px1
        x2 = x2 - alpha * px2
        cnt += 1
    return T1, T2, T3


lx1, rx1, r1 = -1.5, 2, 0.2
lx2, rx2, r2 = -1.5, 3, 0.3
x = np.arange(lx1, rx1 + r1, r1)
y = np.arange(lx2, rx2 + r2, r2)
X, Y = np.meshgrid(x, y)
X = X.flatten()
Y = Y.flatten()
grad = numerical_gradient(f, np.array([X, Y]))

fig = plt.figure(figsize=(8, 2), dpi=150, constrained_layout=True)
gs = plt.GridSpec(1, 4, figure=fig, left=0.1, right=0.9, bottom=0.1, top=0.9, wspace=0.05, hspace=0.05)
ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1])
ax3 = fig.add_subplot(gs[0, 2])
ax4 = fig.add_subplot(gs[0, 3])


def plot_gradient_path(ax, t1, t2, clr):
    ax.quiver(X, Y, grad[0], grad[1])
    ax.plot(T1, T2, c=clr)


T1,T2,T3=gradient_decent(2,3,alpha=0.001)
# plot_gradient_path(ax1, T1, T2, clr='r')

T1, T2, T3 = gradient_decent(2, 3, alpha=0.1)
plot_gradient_path(ax1, T1, T2, clr='r')

x1, x2 = -0.8, -0.9
print("%d | [%d,%d]" % (f(x1, x2), fx1(x1, x2), fx2(x1, x2)))
# T1 = np.array([2, -1.3, 0.2, -0.8, -0.3])
# T2 = np.array([3, 0, -1.4, -0.9, -1.1])
# T3 = f(T1, T2)

x1, x2 = 2, 3
px1, px2 = fx1(x1, x2), fx2(x1, x2)
md = mold(px1, px2)
alpha, epsilon = 0.06, 0.001
cnt, max_iter = 0, 10000
T1, T2, T3 = [], [], []
for _ in range(max_iter):
    if md < epsilon:
        print("break when gradient vanished<epsilon: %.6f<%.6f after %d times" % (md, epsilon, cnt))
        break
    if cnt > max_iter:
        print("break when iterate %d times" % cnt)
        break
    T1.append(x1)
    T2.append(x2)
    T3.append(f(x1, x2))
    px1 = fx1(x1, x2)
    px2 = fx2(x1, x2)
    md = mold(px1, px2)
    x1 = x1 - alpha * px1
    x2 = x2 - alpha * px2
    cnt += 1

print("___", T1, T2, T3)


def f(x1, x2):
    return 6 * x1 ** 2 - 3 * x1 * x2 + 2 * x2 ** 2


def fx1(x1, x2):
    return 12 * x1 - 3 * x2 + 2 * x2 ** 2


def fx2(x1, x2):
    return 6 * x1 ** 2 - 3 * x1 + 4 * x2


print("f(x)=%d, grad=[%d,%d]" % (f(2, 3), fx1(2, 3), fx2(2, 3)))


def grad_x(f, x, y):
    h = 1e-4
    return (f(x + h / 2, y) - f(x - h / 2, y)) / h


def grad_y(f, x, y):
    h = 1e-4
    return (f(x, y + h / 2) - f(x, y - h / 2)) / h


def numerical_gradient(f, P):
    grad = np.zeros_like(P)
    for i in range(P[0].size):
        grad[0][i] = grad_x(f, P[0][i], P[1][i])
        grad[1][i] = grad_y(f, P[0][i], P[1][i])
    return grad


x = np.arange(-0, 2.2, 0.2)
y = np.arange(-0, 3.2, 0.2)
X, Y = np.meshgrid(x, y)
X = X.flatten()
Y = Y.flatten()
grad = numerical_gradient(f, np.array([X, Y]))


def func(x):
    return x ** 2 - 2 * x - 3


def fprime(x):
    return 2 * x - 2


def plotFunc(x0):
    x = np.linspace(-5, 7, 100)
    plt.plot(x, func(x))
    plt.plot(x0, func(x0), 'ro')
    plt.xlabel('$x$')
    plt.ylabel('$f(x)$')
    plt.title('Objective Function')


def plotPath(xs, ys, x0):
    plotFunc(x0)
    plt.plot(xs, ys, linestyle='--', marker='o', color='orange')
    plt.plot(xs[-1], ys[-1], 'ro')


x0 = -4
plotFunc(x0)


def GradientDescentSimple(func, fprime, x0, alpha, tol=1e-5, max_iter=1000):
    # initialize x, f(x), and -f'(x)
    xk = x0
    fk = func(xk)
    pk = -fprime(xk)
    # initialize number of steps, save x and f(x)
    num_iter = 0
    curve_x = [xk]
    curve_y = [fk]
    # take steps
    while abs(pk) > tol and num_iter < max_iter:
        # calculate new x, f(x), and -f'(x)
        xk = xk + alpha * pk
        fk = func(xk)
        pk = -fprime(xk)
        # increase number of steps by 1, save new x and f(x)
        num_iter += 1
        curve_x.append(xk)
        curve_y.append(fk)
    # print results
    if num_iter == max_iter:
        print('Gradient descent does not converge.')
    else:
        print('Solution found:\n  y = {:.4f}\n  x = {:.4f}'.format(fk, xk))

    return curve_x, curve_y


xs, ys = GradientDescentSimple(func, fprime, x0, alpha=0.1, tol=1)
plotPath(xs, ys, x0)
