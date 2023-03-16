import numpy as np
import pandas as pd
from tqdm import tqdm
import matplotlib.pyplot as plt
import random
import seaborn as sns

sns.set_style("darkgrid")


class Foo:
    def __init__(self, g=0.5, a=0.5):
        # parameters
        self.gamma = g  # discounting rate
        self.alpha = a
        self.rewardSize = -1
        self.gridSize = 5
        self.terminationStates = [[0, 0], [self.gridSize - 1, self.gridSize - 1]]
        self.actions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        self.numIterations = 10000
        # initialization
        self.V = np.zeros((self.gridSize, self.gridSize))
        self.returns = {(i, j): list() for i in range(self.gridSize) for j in range(self.gridSize)}
        self.deltas = {(i, j): list() for i in range(self.gridSize) for j in range(self.gridSize)}
        self.states = [[i, j] for i in range(self.gridSize) for j in range(self.gridSize)]

    # utils
    def generateEpisode(self):
        initState = random.choice(self.states[1:-1])
        episode = []
        while True:
            if list(initState) in self.terminationStates:
                return episode

            action = random.choice(self.actions)
            finalState = np.array(initState) + np.array(action)
            if -1 in list(finalState) or self.gridSize in list(finalState):
                finalState = initState
            episode.append([list(initState), action, self.rewardSize, list(finalState)])
            initState = finalState

    def __take_action(self, current_state):
        next_state = np.array(current_state) + np.array(random.choice(self.actions))
        if min(next_state) == -1 or max(next_state) == self.gridSize:  # cross wall
            return current_state  # stay at s
        else:
            return tuple(next_state)  # go to s'

    def TD_method(self, verbose=0, plot_heatmap=False):
        current_state = tuple(random.choice(self.states[1:-1]))
        while True:
            if list(current_state) in self.terminationStates:  # we reached the end
                break
            next_state = self.__take_action(current_state)

            TD_target = self.rewardSize + self.gamma * self.V[next_state]
            TD_error = TD_target - self.V[current_state]
            delta = self.alpha * TD_error  # delta is the improvement of state s
            self.deltas[current_state].append(float(np.abs(delta)))

            self.V[current_state] += delta  # improv state value
            current_state = next_state  # and update state s as next_state
        if plot_heatmap:
            self.__plot_heatmap()

    def MC_method(self, verbose=0, plot_heatmap=False):
        episode = self.generateEpisode()
        G = 0
        visited_states = [step[0] for step in episode]
        while episode:
            [current_state, action, reward, next_state] = episode.pop(-1)
            G = self.gamma * G + reward  # rewards accumulated at here
            previous_states = visited_states[:len(episode)]
            if current_state not in previous_states:  # V(s) = avg(returns(G))
                s = tuple(current_state)
                self.returns[s].append(G)  # append gain to state s only one time for each episode
                delta = np.average(self.returns[s])
                self.deltas[s].append(np.abs(self.V[s] - delta))  # recode the state value upgrades of each state
                self.V[s] = delta  # upgrade the value of state s
        if plot_heatmap:
            self.__plot_heatmap()

    def plot_series(self, l, x=16, y=8):
        fig, axes = plt.subplots(self.gridSize, self.gridSize, figsize=(x, y), sharex=True, sharey=True)  #
        fig.suptitle('state-value improvements')
        for i in range(self.gridSize):
            for j in range(self.gridSize):
                sns.lineplot(ax=axes[i][j], data=foo.deltas[(i, j)][:l])
                axes[i][j].set_title("state s=%s" % (str((i, j))))

    def __plot_heatmap(self):
        df = pd.DataFrame(self.V)  # turn 2-d array to dataframe
        fig, ax = plt.subplots(figsize=(4, 3))  # figure size
        sns.heatmap(df, ax=ax, fmt=".2f", annot=True)  # display both color and value


foo = Foo(g=0.5, a=0.5)
for i in range(1000):  # take another 10000 iteration
    foo.TD_method(verbose=0, plot_heatmap=False)
foo.TD_method(verbose=0, plot_heatmap=True)
foo.plot_series()

foo = Foo(g=0.5, a=0.5)
for i in range(1000):  # take another 10000 iteration
    foo.MC_method(verbose=0, plot_heatmap=False)
foo.MC_method(verbose=0, plot_heatmap=True)
foo.plot_series()
