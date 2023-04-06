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
agent_policy_e_1 = QAgent(env, n_episodes=3000, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=1, )
cp1 = "policy_e_1"
# agent_policy_e_1.run(checkpoint_name=cp, new_r=False)
#
# env = EnvCartPole(discrete_base=8, new_step_api=False)
agent_policy_e_01 = QAgent(env, n_episodes=300, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=0.1, )
cp2 = "policy_e_01"
# agent_policy_e_01.run(checkpoint_name=cp2, new_r=False)

agent_policy_e_1.n_episodes = 100
test1 = agent_policy_e_1.test(checkpoint_name=cp1, new_r=False)
agent_policy_e_01.n_episodes = 100
test2 = agent_policy_e_01.test(checkpoint_name=cp2, new_r=False)
df = pd.DataFrame({"random": test1[-1000:], "smart": test2[-1000:]})
df = df.stack().reset_index()
df.columns = ["x", "hue", "y"]
agent_policy_e_01.visualization(outside_df=df)
