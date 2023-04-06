import random
import numpy as np
import gym
from abc import ABC, abstractmethod
from collections import defaultdict, namedtuple, deque
import matplotlib.pyplot as plt
from keras import Sequential
from keras.activations import relu, linear
from keras.layers import Dense, Dropout
from keras.losses import mse, huber_loss
from keras.optimizers import Adam
from keras.optimizers.optimizer_experimental.adamw import AdamW
from scipy.stats import norm
import math
import json
import seaborn as sns
import pandas as pd
from itertools import count
import tensorflow as tf

from QAgent import QAgent
from Environment import EnvCartPole

env = EnvCartPole(discrete_base=8, new_step_api=False)
agent1 = QAgent(env, n_episodes=500, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=1, )
cp1 = "policy1"
agent1.run(checkpoint_name=cp1, new_r=False)
agent1.visualization()

env = EnvCartPole(discrete_base=8, new_step_api=False)
agent2 = QAgent(env, n_episodes=500, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=None,
                epsilon_start=0.5, epsilon_end=0.0001, epsilon_decay=1.0e+04, )
cp2 = "policy2"
agent2.run(checkpoint_name=cp2, new_r=False)
agent2.visualization()
agent2.n_episodes = 100
agent2.test(checkpoint_name=cp2, new_r=False)
agent2.visualization()
test2 = agent2.steps


agent1.n_episodes = 100
agent1.test(checkpoint_name=cp1, new_r=False)
agent1.visualization()
test1 = agent1.steps
# df = pd.DataFrame({"random": test1[-1000:], "smart": test2[-1000:]})
# df = df.stack().reset_index()
# df.columns = ["x", "hue", "y"]
# agent2.visualization(outside_df=df)
