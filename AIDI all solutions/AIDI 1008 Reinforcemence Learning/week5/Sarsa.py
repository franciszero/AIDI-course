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
    def __init__(self):
        self.env = WindyGridworldEnv()
        self.nA = self.env.action_space.n
        self.nB = self.env.observation_space.n
        self.epsilon = 0.1
        self.gamma = 0.1
        self.alpha = 0.1
        self.Q = np.zeros([70, self.nA])
        self.lbd = 0.1
        self.E = np.zeros([70, self.nA])
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

    def sarsa(self, total_episodes):
        i = 0
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
                pic = self.visualization()
                p1 = pic.get_figure()
                i += 1
                p1.savefig(str(i) + '.jpg', dpi=15, bbox_inches='tight')
                current_state = next_state
                current_action = next_action
        return self.Q

    def sarsa_lambda(self, total_episodes):
        i = 0
        for k in range(total_episodes):
            current_state = self.env.reset()
            current_action, comment = self.get_epision_greedy_action_policy(self.Q, current_state)
            while True:
                next_state, reward, done, _ = self.env.step(current_action)
                next_action, comment = self.get_epision_greedy_action_policy(self.Q, next_state)
                td_target = reward + self.gamma * self.Q[next_state][next_action]
                td_error = td_target - self.Q[current_state][current_action]
                # # E(S,A) += 1
                # self.E[current_state][current_action] += self.gamma * self.lbd * self.E[current_state][current_action] + 1
                # update Q(S,A) with E(S,A)
                for s in range(70):
                    for a in range(4):
                        tmp2 = self.gamma * self.lbd * self.E[s][a] + 1
                        self.E[s][a] += tmp2
                        tmp1 = self.alpha * td_error * self.E[s][a]
                        self.Q[s][a] += tmp1
                if done:
                    break
                #                 pic = self.visualization()
                #                 pic.get_figure().savefig(i++ + '.jpg',dpi=300,bbox_inches='tight')
                current_state = next_state
                current_action = next_action
        return self.Q

    def visualization(self):
        gridworld = np.zeros([7, 10])
        for x in range(7):
            for y in range(10):
                state = x * 10 + y
                mm = np.argmax(self.Q[state])
                gridworld[x][y] = mm
        fix, ax = plt.subplots(figsize=(8, 4))
        pic = sns.heatmap(gridworld, annot=True, ax=ax, vmin=0, vmax=3)
        return pic

    def show_Q(self):
        return pd.DataFrame(self.Q).T


foo = Sarsa()
r = foo.sarsa_lambda(1)
foo.visualization()

gridworld = np.zeros([7, 10])
for x in range(7):
    for y in range(10):
        state = x * 7 + y
        gridworld[x][y] = np.argmax(r[state])

# fix, ax = plt.subplots(figsize=(8, 4))
plt.imshow(gridworld, cmap='hot', interpolation='nearest')
plt.show()

from matplotlib import pyplot as plt
from matplotlib import animation
import pandas as pd

f0 = pd.DataFrame({'firstColumn': [1, 2, 3, 4, 5], 'secondColumn': [1, 2, 3, 4, 5]})
f1 = pd.DataFrame({'firstColumn': [5, 4, 3, 2, 1], 'secondColumn': [1, 2, 3, 4, 5]})
f2 = pd.DataFrame({'firstColumn': [5, 4, 3.5, 2, 1], 'secondColumn': [5, 4, 3, 2, 1]})

# make a global variable to store dataframes
global mylist
mylist = [f0, f1, f2]

# First set up the figure, the axis, and the plot element we want to animate
fig = plt.figure()
ax = plt.axes(xlim=(0, 5), ylim=(0, 5))
line, = ax.plot([], [], lw=2)


# initialization function: plot the background of each frame
def init():
    line.set_data([], [])
    return line,


# animation function of dataframes' list
def animate(i):
    line.set_data(mylist[i]['firstColumn'], mylist[i]['secondColumn'])
    return line,


# call the animator, animate every 300 ms
# set number of frames to the length of your list of dataframes
anim = animation.FuncAnimation(fig, animate, frames=len(mylist), init_func=init, interval=300, blit=True)

plt.show()

import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib import animation

fig = plt.figure()


# data = np.random.rand(10, 10)
# sns.heatmap(data, vmax=.8, square=True)


def init():
    sns.heatmap(np.zeros((7, 10)), vmax=.8, square=True, cbar=False)


def animate(data):
    sns.heatmap(data, square=True, cbar=False)


anim = animation.FuncAnimation(fig, animate, init_func=init, frames=20, repeat=False)

foo = Sarsa()
foo.sarsa(1)
foo.visualization()
n = None
