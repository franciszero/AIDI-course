import math

import numpy as np
import matplotlib.pyplot as plt

if __name__ == '__main__':

    def func(i, j, n, dist):
        # plot
        ax = fig.add_subplot(gs[i, 0])
        ax.hist(dist)
        ax.set_title('%s miu=%.2f' % (n, dist.mean()))
        for _, r in enumerate(stops):
            mm = []
            for _ in range(r):
                mm.append(np.random.choice(dist, 20).mean())
            ax = fig.add_subplot(gs[i, j])
            ax.hist(mm)
            ax.set_title('%s sampling (%d) miu=%.2f' % (n, len(mm), np.array(mm).mean()))
            j += 1
        pass


    stops = np.array([10, 100, 1000, 10000])
    rows, cols = 4, len(stops)
    fig = plt.figure(figsize=(30, 20), dpi=40, constrained_layout=True)
    gs = plt.GridSpec(rows, cols + 1, figure=fig, left=0.1, right=0.9, bottom=0.1, top=0.9, wspace=0.05, hspace=0.05)
    func(0, 1, 'poisson', np.random.poisson(10, stops[-1]))
    func(1, 1, 'exponential', np.random.exponential(10, stops[-1]))
    func(2, 1, 'binomial', np.random.binomial(2, 0.2, stops[-1]))
    func(3, 1, 'binomial', np.random.binomial(1, 0.7, stops[-1]))

    pass
