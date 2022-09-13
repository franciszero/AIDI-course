# coding=utf-8
# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

import os
import shutil
import time
import math
import argparse
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
# %matplotlib inline


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print("Hi, {0}".format(name))  # Press ⌘F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    workspace = "/Users/francis/Documents/Georgian College/AIDI/AI for Business Decision Making/Assign1 - Red wine/solution"
    path = workspace + "/data/winequality-red.csv"

    df = pd.read_csv(path)

    titanic = sns.load_dataset('titanic')
    iris = sns.load_dataset('iris')

    # fig = sns.pairplot(df)
    # fig.savefig(workspace + "/output/1.png")

    # fig = sns.pairplot(df, hue="quality", plot_kws = {'alpha': 0.7})
    # fig.map_lower(sns.kdeplot, levels=3)
    # fig.savefig(workspace + "/output/2.png", dpi=400)

    print_hi('PyCharm')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
