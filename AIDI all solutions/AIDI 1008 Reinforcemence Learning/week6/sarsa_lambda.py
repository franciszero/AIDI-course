import sys
import numpy as np
from windy_gridworld import WindyGridworldEnv
from numpy.random import choice
import seaborn as sns
import matplotlib.pyplot as plt

import sys
import numpy as np
from windy_gridworld import WindyGridworldEnv
from numpy.random import choice
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

import pandas as pd

pd.set_option('display.max_columns', 100)
pd.set_option('display.max_rows', 100)
pd.set_option('display.width', 2000)


class Sarsa:
    def __init__(self, exploitation_rate=0.1, decay_factor=0.3, learning_rate=0.1, trace_decay=0.5):
        self.env = WindyGridworldEnv()
        self.nA = self.env.action_space.n
        self.nB = self.env.observation_space.n
        self.epsilon = exploitation_rate
        self.gamma = decay_factor
        self.alpha = learning_rate
        self.Q = np.zeros([70, self.nA])
        self.lbd = trace_decay
        self.E = np.zeros([70, self.nA])
        self.walks = []
        pass

    @staticmethod
    def get_direction(a):
        if a == 0:
            return 'up'
        elif a == 1:
            return 'right'
        elif a == 2:
            return 'down'
        elif a == 3:
            return 'left'
        else:
            sys.exit(250)
        pass

    def get_epision_greedy_action_policy(self, q, observation):
        A = np.ones(self.nA, dtype=float) * self.epsilon / self.nA
        best_action = np.argmax(q[observation])
        A[best_action] += (1.0 - self.epsilon)  # update non-optimum action probability for exploration
        a = np.random.choice(np.arange(self.nA), p=A)
        return a, self.get_direction(a)

    def sarsa_lambda(self, total_episodes):
        self.walks = []
        for k in range(total_episodes):
            cnt_steps = 0
            current_state = self.env.reset()
            current_action, comment = self.get_epision_greedy_action_policy(self.Q, current_state)
            while True:
                next_state, reward, done, _ = self.env.step(current_action)
                next_action, comment = self.get_epision_greedy_action_policy(self.Q, next_state)
                td_target = reward + self.gamma * self.Q[next_state][next_action]
                td_error = td_target - self.Q[current_state][current_action]
                # E(S,A) += 1
                self.E[current_state][current_action] += 1
                # update Q(S,A) with E(S,A) for all states
                for s in range(70):
                    self.Q[s][:] += self.alpha * td_error * self.E[s][:]
                    self.E[s][:] *= self.gamma * self.lbd
                cnt_steps += 1
                if done:
                    print('Round %5d : cost %5d steps' % (k, cnt_steps))
                    self.walks.append(cnt_steps)
                    break
                current_state = next_state
                current_action = next_action
        return self.Q

    def visualization(self):
        fig = plt.figure(figsize=(10, 4), dpi=100, constrained_layout=True)
        gs = plt.GridSpec(10, 4, figure=fig, left=0.1, right=0.9, bottom=0.1, top=0.9, wspace=0.05, hspace=0.05)
        ax1 = fig.add_subplot(gs[0:4, :])
        ax2 = fig.add_subplot(gs[4:, :1])
        plt.suptitle("", fontsize=12)

        ax1.plot(range(len(self.walks)), self.walks, ':')
        ax1.set_title('The steps of walks')
        ax1.set_xlabel('episodic of walk')
        ax1.set_ylabel('steps of walk')
        ax1.set_yscale('log')
        ax1.grid(True)

        gridworld = np.zeros([7, 10])
        for x in range(7):
            for y in range(10):
                state = x * 10 + y
                mm = np.argmax(self.Q[state])
                gridworld[x][y] = mm
        pic = sns.heatmap(gridworld, annot=True, ax=ax2, vmin=0, vmax=3)
        #         plt.imshow(gridworld, cmap='hot', interpolation='nearest')
        plt.show()
        pass

    def show_Q(self):
        return pd.DataFrame(self.Q).T


foo = Sarsa(exploitation_rate=0.005, decay_factor=0.99, learning_rate=0.9, trace_decay=0.9)
r = foo.sarsa_lambda(30)
foo.visualization()

i = None
