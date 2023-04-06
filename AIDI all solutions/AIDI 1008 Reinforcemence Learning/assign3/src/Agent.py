import random
import numpy as np
from abc import ABC, abstractmethod
from collections import defaultdict, namedtuple, deque
import matplotlib.pyplot as plt
import json
import seaborn as sns
import pandas as pd


class Agent:
    def __init__(self, environment, n_episodes=1, n_steps=1, gamma=0.5, alpha=0.5,
                 epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=1.0e+05):
        self.env = environment
        self.n_actions = self.env.n_actions
        self.n_obs_space = self.env.n_observation_space
        self.dynamic_e_greedy = True if epsilon is None else False
        self.epsilon = epsilon  # static e-greedy hyperparameter, default None
        self.epsilon_start = epsilon_start  # dynamic e-greedy params
        self.epsilon_end = epsilon_end  # dynamic e-greedy params
        self.epsilon_decay = epsilon_decay  # dynamic e-greedy params
        self.g = gamma
        self.lr = alpha
        self.n_episodes = n_episodes
        self.n_steps = n_steps
        self.Q = defaultdict(lambda: [0] * self.n_actions)
        self.steps = []
        self.sum_steps = 0
        self.avg_steps = []
        pass

    @abstractmethod
    def learning(self, s, a, r, s_):
        pass

    @abstractmethod
    def action(self, s):
        pass

    def random_action(self):
        return random.randint(0, self.n_actions)

    def keep_running(self, checkpoint_name, new_r=False):
        self.read_policy(checkpoint_name)  # read checkpoint
        self.run(checkpoint_name, new_r=new_r)

    @abstractmethod
    def run(self, checkpoint_name, new_r=False):
        pass

    @abstractmethod
    def test(self, checkpoint_name, new_r=False):
        pass

    def save_policy(self, checkpoint_name):
        checkpoint = {"Q": self.Q, "steps": self.steps, "avg_steps": self.avg_steps,
                      "epsilon": self.epsilon, "dynamic_epsilon": self.dynamic_e_greedy}
        open('./' + checkpoint_name + '.json', 'w').write(json.dumps(checkpoint))
        pass

    def read_policy(self, checkpoint_name):
        try:
            print('read checkpoint from ./' + checkpoint_name + '.json')
            checkpoint = json.loads(open('./' + checkpoint_name + '.json', 'r').read())
            self.Q = defaultdict(lambda: [0] * self.n_actions, checkpoint["Q"])
            self.steps = checkpoint["steps"]
            self.sum_steps = np.array(self.steps).sum()
            self.avg_steps = checkpoint["avg_steps"]
            if self.dynamic_e_greedy and checkpoint["dynamic_epsilon"]:
                self.dynamic_e_greedy = checkpoint["dynamic_epsilon"]
                self.epsilon_start = checkpoint["epsilon"]
                self.epsilon = self.epsilon_start
        except Exception:
            pass

    def visualization(self, last_n_steps=-1000, outside_df=None):
        if outside_df is not None:
            f = outside_df
        else:
            f = pd.DataFrame({"Steps": self.steps[last_n_steps:]})
            # df['MA_10'] = df['Steps'].rolling(10).mean()
            f['MA_100'] = f['Steps'].rolling(100).mean()
            f.fillna(0.0)
            f = f.stack().reset_index()
            f.columns = ["x", "hue", "y"]

        # seaborn plot
        fig, ax = plt.subplots(1, 1, figsize=(10, 3), dpi=100)
        sns.lineplot(data=f, x="x", y="y", hue="hue", markers=False, dashes=False, lw=1, ax=ax)

        ax.set_title('Training Results')
        ax.set_xlabel('Training Episodes')
        ax.set_ylabel('Lifetime Steps')
        ax.set_yscale('log')
        ax.grid(color='black', linestyle='--', which='major', linewidth=0.5)
        ax.grid(color='gray', linestyle='--', which='minor', linewidth=0.3)

        ax.legend()
        plt.tight_layout()
        plt.savefig('./plot.jpg')
        plt.show()
