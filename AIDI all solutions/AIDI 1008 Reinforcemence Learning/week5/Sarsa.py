import sys
import numpy as np
from windy_gridworld import WindyGridworldEnv
from numpy.random import choice
import seaborn as sns
import matplotlib.pyplot as plt


class Sarsa:
    def __init__(self):
        self.env = WindyGridworldEnv()
        self.nA = self.env.action_space.n
        self.nB = self.env.observation_space.n
        self.epsilon = 0.1
        self.gamma = 1.0
        self.alpha = 0.1
        self.Q = np.zeros([70, self.nA])
        pass

    @staticmethod
    def get_direction(a):
        if a == 0: return 'up'
        elif a == 1: return 'right'
        elif a == 2: return 'down'
        elif a == 3: return 'left'
        else: sys.exit(250)
        pass

    def get_epision_greedy_action_policy(self, q, observation):
        A = np.ones(self.nA, dtype=float) * self.epsilon / self.nA
        best_action = np.argmax(q[observation])
        A[best_action] += (1.0 - self.epsilon)  # update non-optimum action probability for exploration
        a = np.random.choice(np.arange(self.nA), p=A)
        return a, self.get_direction(a)

    def sarsa(self, total_episodes):
        for k in range(total_episodes):
            current_state = self.env.reset()
            current_action, comment = self.get_epision_greedy_action_policy(self.Q, current_state)
            while True:
                next_state, reward, done, _ = self.env.step(current_action)
                next_action, comment = self.get_epision_greedy_action_policy(self.Q, next_state)
                td_target = reward + self.gamma * self.Q[next_state][next_action]
                td_error = td_target - self.Q[current_state][current_action]
                self.Q[current_state][current_action] += self.alpha * td_error
                if done:
                    break
                current_state = next_state
                current_action = next_action
        return self.Q

    def visualization(self, x=6, y=3):
        gridworld = np.zeros([7, 10])
        for x in range(7):
            for y in range(10):
                state = x * 7 + y
                gridworld[x][y] = np.max(self.Q[state])
        fix, ax = plt.subplots(figsize=(x, y))
        sns.heatmap(gridworld, annot=True)
        pass


foo = Sarsa()
foo.sarsa(100)
foo.visualization()
i = None
