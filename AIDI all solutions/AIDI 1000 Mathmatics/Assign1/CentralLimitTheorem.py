import math

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

if __name__ == '__main__':
    x = np.random.poisson(10, 1000)

    stops = {10, 50, 100, 500, 1000, 5000}
    rows, cols = 3, len(stops)
    fig = plt.figure(figsize=(30, 20), dpi=40, constrained_layout=True)
    gs = plt.GridSpec(rows, cols + 1, figure=fig, left=0.1, right=0.9, bottom=0.1, top=0.9, wspace=0.05, hspace=0.05)

    # plot
    i, j = 0, 1
    mm = []
    ax = fig.add_subplot(gs[i, 0])
    ax.hist(np.random.beta(0.5, 0.4, 20000))
    ax.set_title('binomial distribution (20000)')
    for _, r in enumerate(np.arange(1, 5001, 1)):
        mm.append(np.random.poisson(10, 20).mean())
        if r in stops:
            ax = fig.add_subplot(gs[i, j])
            ax.hist(mm)
            ax.set_title('poisson sampling (%d)' % len(mm))
            j += 1
    #
    i, j = 1, 1
    ax = fig.add_subplot(gs[i, 0])
    ax.hist(np.random.exponential(10, 20000))
    ax.set_title('exponential distribution (20000)')
    mm = []
    for _, r in enumerate(np.arange(1, 5001, 1)):
        mm.append(np.random.exponential(10, 20).mean())
        if r in stops:
            ax = fig.add_subplot(gs[i, j])
            ax.hist(mm)
            ax.set_title('exponential sampling (%d)' % len(mm))
            j += 1

    i, j = 2, 1
    mm = []
    ax = fig.add_subplot(gs[i, 0])
    ax.hist(np.random.binomial(1, 0.3, 20000))
    ax.set_title('binomial distribution (%d)')
    for _, r in enumerate(np.arange(1, 5001, 1)):
        mm.append(np.random.binomial(3, 0.1, 20).mean())
        if r in stops:
            ax = fig.add_subplot(gs[i, j])
            ax.hist(mm)
            ax.set_title('binomial sampling (%d)' % len(mm))
            j += 1

    pass
