import math

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

if __name__ == '__main__':
    x = np.random.poisson(10, 1000)

    rows = 2
    cols = 4
    fig = plt.figure(figsize=(20, 10), dpi=50, constrained_layout=True)
    gs = plt.GridSpec(rows, cols, figure=fig, left=0.1, right=0.9, bottom=0.1, top=0.9, wspace=0.05, hspace=0.05)
    for i in range(rows):
        for _, (j, bins) in enumerate(zip(range(cols), np.array([10, 30, 50, 70]))):
            ax = fig.add_subplot(gs[i, j])
            size = int(20 * math.pow(10, j))
            ax.plot(np.random.poisson(10, size), type=hist, bins=bins)
            ax.set_title('poisson sampling (u=10, size=%d' % size)
    pass
