import numpy as np
import pandas as pd

import math
from random import shuffle
import random

random.seed(0)

# plotting
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.metrics import accuracy_score
from sklearn.linear_model import LinearRegression

givenDec = lambda gdVal: float('%.1f' % gdVal)  # 1 digit
givenDec3 = lambda gdVal: float('%.3f' % gdVal)  # 3 digit


# function to generate data points for family car example
def generateCarTypeData(gnPoints):
    engine_power_all = []
    price_all = []
    famCar_class = []

    for i in range(gnPoints):
        rnd_val = np.random.random()
        rnd_val_e = np.random.random()
        rnd_val_p = np.random.random()
        if (rnd_val < 0.5):
            famCar_class.append(0)
            tmp_eng_power = np.random.randint(low=50, high=240)
            tmp_price = np.random.randint(low=10, high=100)

            while (120 < tmp_eng_power < 180 and 25 < tmp_price < 50):
                tmp_eng_power = np.random.randint(low=50, high=240)
                tmp_price = np.random.randint(low=10, high=100)

            engine_power_all.append(tmp_eng_power)
            price_all.append(tmp_price)
        else:
            famCar_class.append(1)
            engine_power_all.append(np.random.randint(low=120, high=180))
            price_all.append(np.random.randint(low=25, high=50))

    tmp_df = pd.DataFrame({
        "e": engine_power_all,
        "p": price_all,
        "c": famCar_class
    })

    return tmp_df


def getRange_familyCar(gdf):
    min_price = gdf[gdf['c'] == 1]['p'].min()
    max_price = gdf[gdf['c'] == 1]['p'].max()
    min_engine = gdf[gdf['c'] == 1]['e'].min()
    max_engine = gdf[gdf['c'] == 1]['e'].max()

    return min_price, max_price, min_engine, max_engine


class Foo:
    def __init__(self, f, b, u, l, r):
        self.f = f

        self.b = b
        self.u = u
        self.l = l
        self.r = r

        self.b1 = b
        self.u1 = u
        self.l1 = l
        self.r1 = r

        self.bottoms = self.f[(self.f['p'] < self.b) & (self.f['c'] == 0)].sort_values(['p'], ascending=False)[
            'p'].values
        self.uppers = self.f[(self.f['p'] > self.u) & (self.f['c'] == 0)].sort_values(['p'], ascending=True)['p'].values
        self.lefts = self.f[(self.f['e'] < self.l) & (self.f['c'] == 0)].sort_values(['e'], ascending=False)['e'].values
        self.rights = self.f[(self.f['e'] > self.r) & (self.f['c'] == 0)].sort_values(['e'], ascending=True)['e'].values

    def plot_rectangle_s(self):
        plt.figure()
        plt.plot([self.l1, self.r1], [self.b1, self.b1], color='r')
        plt.plot([self.l1, self.r1], [self.u1, self.u1], color='r')
        plt.plot([self.l1, self.l1], [self.b1, self.u1], color='r')
        plt.plot([self.r1, self.r1], [self.b1, self.u1], color='r')
        plt.scatter(self.f[self.f['c'] == 1]['e'], self.f[self.f['c'] == 1]['p'], color='r')
        plt.scatter(self.f[self.f['c'] == 0]['e'], self.f[self.f['c'] == 0]['p'], color='b')
        plt.show()

    def plot_rectangle(self):
        plt.figure()
        plt.plot([self.l, self.r], [self.b, self.b], color='r')
        plt.plot([self.l, self.r], [self.u, self.u], color='r')
        plt.plot([self.l, self.l], [self.b, self.u], color='r')
        plt.plot([self.r, self.r], [self.b, self.u], color='r')
        plt.scatter(self.f[self.f['c'] == 1]['e'], self.f[self.f['c'] == 1]['p'], color='r')
        plt.scatter(self.f[self.f['c'] == 0]['e'], self.f[self.f['c'] == 0]['p'], color='b')
        plt.show()

    def find_new_bottom(self, i):
        if i >= len(self.bottoms):
            return 0
        tmp = self.bottoms[i]
        if self.f[(self.f['c'] == 0) & ((self.f['p'] < self.u1) & (self.f['p'] > tmp)) &
                  ((self.f['e'] < self.r1) & (self.f['e'] > self.l1))].shape[0] == 0:
            self.b1 = tmp
            return 1
        else:
            return 0

    def find_new_upper(self, i):
        if i >= len(self.uppers):
            return 0
        tmp = self.uppers[i]
        if self.f[(self.f['c'] == 0) & ((self.f['p'] > self.b1) & (self.f['p'] < tmp)) &
                  ((self.f['e'] < self.r1) & (self.f['e'] > self.l1))].shape[0] == 0:
            self.u1 = tmp
            return 1
        else:
            return 0

    def find_new_left(self, i):
        if i >= len(self.lefts):
            return 0
        tmp = self.lefts[i]
        if self.f[(self.f['c'] == 0) & ((self.f['p'] < self.u1) & (self.f['p'] > self.b1)) &
                  ((self.f['e'] < self.r1) & (self.f['e'] > tmp))].shape[0] == 0:
            self.l1 = tmp
            return 1
        else:
            return 0

    def find_new_right(self, i):
        if i >= len(self.rights):
            return 0
        tmp = self.rights[i]
        if self.f[(self.f['c'] == 0) & ((self.f['p'] < self.u1) & (self.f['p'] > self.b1)) &
                  ((self.f['e'] < tmp) & (self.f['e'] > self.l1))].shape[0] == 0:
            self.r1 = tmp
            return 1
        else:
            return 0

    def greedy_search(self):
        c1, c2, c3, c4 = 0, 0, 0, 0
        pst, cur = -1, 0
        while pst != cur:
            c1 += self.find_new_bottom(c1)
            c2 += self.find_new_upper(c2)
            c3 += self.find_new_left(c3)
            c4 += self.find_new_right(c4)
            pst = cur
            cur = c1 + c2 + c3 + c4
        self.plot_rectangle_s()


my_df = generateCarTypeData(gnPoints=40)
bottom, upper, left, right = getRange_familyCar(my_df)
foo = Foo(my_df, bottom, upper, left, right)
foo.greedy_search()

