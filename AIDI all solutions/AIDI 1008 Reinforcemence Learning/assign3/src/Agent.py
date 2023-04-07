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
                 epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=1.0e+05, checkpoint_name=None):
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
        self.checkpoint_name = checkpoint_name
        self.policy_net, self.target_net = None, None
        pass

    @abstractmethod
    def learning(self, s, a, r, s_, d):
        pass

    @abstractmethod
    def action(self, s):
        pass

    def random_action(self):
        return random.randint(0, self.n_actions)

    def keep_running(self, new_r=False):
        self.read_policy()  # read checkpoint
        self.run(new_r=new_r)

    @abstractmethod
    def run(self, new_r=False):
        pass

    @abstractmethod
    def test(self, new_r=False):
        pass

    def save_policy(self):
        checkpoint = {"Q": self.Q, "steps": self.steps, "avg_steps": self.avg_steps,
                      "epsilon": self.epsilon, "dynamic_epsilon": self.dynamic_e_greedy}
        open('./' + self.checkpoint_name + '.json', 'w').write(json.dumps(checkpoint))
        print("save runtime environments")
        if self.policy_net is not None:
            self.policy_net.save_weights("%s_%s.h5" % (self.checkpoint_name, self.policy_net._name))
            print("save policy_net")
        if self.target_net is not None:
            self.target_net.save_weights("%s_%s.h5" % (self.checkpoint_name, self.target_net._name))
            print("save target_net")
        pass

    def read_policy(self):
        try:
            checkpoint = json.loads(open('./' + self.checkpoint_name + '.json', 'r').read())
            self.Q = defaultdict(lambda: [0] * self.n_actions, checkpoint["Q"])
            self.steps = checkpoint["steps"]
            self.sum_steps = np.array(self.steps).sum()
            self.avg_steps = checkpoint["avg_steps"]
            if self.dynamic_e_greedy and checkpoint["dynamic_epsilon"]:
                self.dynamic_e_greedy = checkpoint["dynamic_epsilon"]
                self.epsilon = checkpoint["epsilon"]
            print('read checkpoint from ./' + self.checkpoint_name + '.json')
            self.policy_net.load_weights("%s_%s.h5" % (self.checkpoint_name, self.policy_net._name))  # load policy_net
            print("load weights to policy_net")
            self.target_net.load_weights("%s_%s.h5" % (self.checkpoint_name, self.target_net._name))  # load target_net
            print("load weights to target_net")
            print("Epsilon starts from %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        except Exception as e:
            print("skip from reading checkpoint: ", self.checkpoint_name)
            print(e)
            pass

    def visualization(self, last_n_steps=0, outside_df=None):
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

        ax.set_title('Visualization')
        ax.set_xlabel('Episodes')
        ax.set_ylabel('Lifetime Steps')
        ax.set_yscale('log')
        ax.grid(color='black', linestyle='--', which='major', linewidth=0.5)
        ax.grid(color='gray', linestyle='--', which='minor', linewidth=0.3)

        ax.legend()
        plt.tight_layout()
        plt.savefig('./plot.jpg')
        plt.show()
