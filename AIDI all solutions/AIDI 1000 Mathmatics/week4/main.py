import numpy as np
import matplotlib.pyplot as plt

def f(x1, x2):
    return 6*x1**2 - 3*x1*x2 + 2*x2**2
def fx1(x1, x2):
    return 12*x1-3*x2+2*x2**2
def fx2(x1, x2):
    return 6*x1**2-3*x1+4*x2
print("f(x)=%d, grad=[%d,%d]" % (f(2,3), fx1(2,3), fx2(2,3)))
def grad_x(f, x, y):
    h = 1e-4
    return (f(x + h/2, y) - f(x - h/2, y)) / h
def grad_y(f, x, y):
    h = 1e-4
    return (f(x, y + h/2) - f(x, y - h/2)) / h
def numerical_gradient(f,P):
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
    return x**2 - 2*x - 3

def fprime(x):
    return 2*x - 2

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