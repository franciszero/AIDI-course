# coding=utf-8
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