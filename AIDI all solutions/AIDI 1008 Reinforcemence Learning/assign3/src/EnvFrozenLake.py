from collections import defaultdict

import gymnasium as gym
from QAgent import QAgent
from DQNAgent import DQNAgent
import seaborn as sns
from matplotlib import pyplot as plt
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import math


class EnvFrozenLake:
    def __init__(self, state_def):
        self._form = ["scalar", "tensor"]
        assert (state_def in self._form)
        self.state_def = state_def
        self._env = gym.make('FrozenLake-v1', desc=None, map_name="4x4", is_slippery=False)  # , render_mode="human"
        self.n_actions = self._env.action_space.n
        self.n_observation_space = 1
        pass

    def sample_action(self):
        return self._env.action_space.sample()

    def reset(self):
        s = self._env.reset()
        if isinstance(s, tuple):
            s = s[0]
        if self.state_def == "scalar":
            return str(s)
        else:
            z = np.zeros(16)
            z[s] = 1
            return np.array([z])

    def step(self, a, new_reward=False):
        s_, r, terminated, truncated = self._env.step(a)[:4]
        if self.state_def == "tensor":
            z = np.zeros(16)
            z[s_] = 1
            s_ = np.array([z])
        else:
            s_ = str(s_)
        if terminated:
            if r == 0.0:
                r = 0
            elif r == 1.0:
                r = 1
                print("success")
        return s_, r, terminated or truncated, False


def plot(ag):
    for i in range(16):
        if ag.Q.get(str(i)) is None:
            ag.Q.setdefault(i, [0.0] * ag.n_actions)
    df_ = pd.DataFrame(ag.Q).T.sort_index()
    df_[df_ == 0] = np.NaN
    # df_ = (df_[df_ > 0] + 1).apply(lambda x: np.log(x))
    mini = df_.min().min()
    maxi = df_.max().max()
    df_ = (df_ - mini + 0.01) / (maxi - mini + 0.01) / 2.2
    df_[df_ < 0] = 0.00001
    df_[np.isnan(df_)] = 0.0
    df_.index = df_.index.astype(int)

    plt.subplots(figsize=(5, 5))
    max_q = df_.max(axis=1)
    arr = max_q.sort_index().values.reshape(-1, 4)
    plt.imshow(arr, extent=[0, 4, 0, 4], cmap='gray', vmin=0, vmax=1)
    for i in range(16):  # 16 grids
        x = i % 4 + 0.5
        y = 4 - i // 4 - 0.5
        arr = df_.loc[i].values
        indices = arr.argsort()
        for j in range(4):  # 4 act
            if arr.min() == arr.max():
                continue
            w, h = 0, 0
            if j == 0:
                w, h = arr[j] * -1, 0
            elif j == 1:
                w, h = 0, arr[j] * -1
            elif j == 2:
                w, h = arr[j] * 1, 0
            elif j == 3:
                w, h = 0, arr[j] * 1
            width = (np.argwhere(indices == j).flatten()[0] + 1) / 100
            c = 'red' if j == indices[-1] else 'black'
            plt.arrow(x, y, w, h, width=width, ec=c, fc=c)
    plt.xticks([])
    plt.yticks([])
    plt.colorbar()
    plt.show()
    return df_  # Q-Table:


def test(ag):
    ag.env._env = gym.make('FrozenLake-v1', desc=None, map_name="4x4", is_slippery=False, render_mode="human")  #
    for episode in range(100):
        s = ag.env.reset()  # Reset the environment to a random initial state
        for step in range(100):
            s, _, done, trunc = ag.env.step(ag.action(s), new_reward=False)
            ag.env._env.render()
            print(episode, "/100 ", step + 1)
            if done or trunc:  # until S is terminal
                ag.steps.append(step + 1)
                print()
                break


env = EnvFrozenLake(state_def="tensor")
env.n_observation_space = 16
agent5 = DQNAgent(env, n_episodes=100, n_steps=50, gamma=0.99,
                  memory_cap=1000, batch_size=128, alpha=1.0e-2, tau=0.05,
                  epsilon=None, epsilon_start=0.9, epsilon_end=0.01, epsilon_decay=3.0e+04,
                  checkpoint_name="policy4", )
agent5.n_episodes = 30
agent5.dynamic_e_greedy = True
agent5.run(new_r=False, debugging_freq=10)
q_a = defaultdict(lambda: [0] * agent5.n_actions)
for i in range(16):
    zs = np.zeros(16)
    zs[i] = 1
    q_a[i] = agent5.policy_net(np.array([zs])).numpy().flatten()
agent5.Q = q_a
_ = plot(agent5)

