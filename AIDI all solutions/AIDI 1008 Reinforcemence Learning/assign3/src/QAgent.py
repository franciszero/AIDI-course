import numpy as np
from abc import ABC, abstractmethod
import math
from itertools import count
import pandas as pd
from Agent import Agent
from Environment import EnvCartPole


class QAgent(Agent, ABC):
    def __init__(self, environment, n_episodes=1, n_steps=1, gamma=0.5, alpha=0.5,
                 epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=1.0e+05,
                 checkpoint_name="policy3", ):
        super().__init__(environment, n_episodes, n_steps, gamma, alpha,
                         epsilon, epsilon_start, epsilon_end, epsilon_decay, checkpoint_name)
        self.env.discretize = True
        pass

    def action(self, state):  # ------------------------------------------------ epsilon-greedy action policy
        if self.dynamic_e_greedy:  # ------------------------------------------- dynamic e-greedy
            self.epsilon = self.epsilon_end + (self.epsilon_start - self.epsilon_end) * math.exp(
                -1. * self.sum_steps / self.epsilon_decay)
        self.sum_steps += 1  # update e-greedy after each step
        if np.random.uniform(low=0.0, high=1.0) < self.epsilon:  # ------------- epsilon exploration
            return self.env.sample_action()
        else:  # --------------------------------------------------------------- or greedy exploitation
            return np.argmax(self.Q[state][:])

    def learning(self, s, a, r, s_, d):
        self.Q[s][a] += self.lr * (r + self.g * max(self.Q[s_][:]) - self.Q[s][a])

    def run(self, new_r=False):
        print("Epsilon starts from %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        for episode in range(1, self.n_episodes + 1):  # -----------------------  Loop for each episode
            s = self.env.reset()  # ------     Initialize S
            for step in range(1, self.n_steps + 1):  # -------------------------     Loop for each step of episode
                a = self.action(s)  # ------------------------------------------        Choose A from S using policy derived from Q (e.g., ε-greedy)
                s_, r, done, trunc = self.env.step(a, new_reward=new_r)  # ------        Take action A, observe R, S'
                self.learning(s, a, r, s_, done)  # ----------------------------------        Q(S, A) = Q(S, A) + α[R + γ max Q(S', a) - Q(S, A)]
                s = s_  # ------------------------------------------------------        S = S'
                if done:  # ----------------------------------------------------     until S is terminal
                    self.steps.append(step)
                    self.avg_steps.append(np.mean(self.steps[-10:]))
                    if episode % 50 == 0:
                        print("[%d/%d]: %d, %.4f" % (episode, self.n_episodes, step + 1, self.epsilon))
                    if episode % 100 == 0:
                        self.save_policy()
                    break
        print("Epsilon ends at %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        pass

    def test(self, new_r=False):
        self.read_policy()  # read policy from checkpoint
        print("Epsilon starts from %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        self.steps = []
        for episode in range(1, self.n_episodes + 1):  # Loop for each episode
            s = self.env.reset()  # Initialize S
            for step in count():
                a = self.action(s)
                s, _, done, trunc = self.env.step(a, new_reward=new_r)  # directly use s=s_
                if done or trunc:  # until S is terminal
                    self.steps.append(step + 1)
                    break
        return self.steps


if __name__ == '__main__':
    # train agent1
    env = EnvCartPole(discrete_base=8, new_step_api=False)
    agent1 = QAgent(env, n_episodes=100, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=1, checkpoint_name="policy1", )
    agent1.run(new_r=False)
    agent1.rolling_plot()

    # train agent2
    env = EnvCartPole(discrete_base=8, new_step_api=False)
    agent2 = QAgent(env, n_episodes=1000, n_steps=1000, gamma=0.99, alpha=0.1, epsilon=None,
                    epsilon_start=0.5, epsilon_end=0.001, epsilon_decay=1.0e+04, checkpoint_name="policy2", )
    agent2.run(new_r=False)
    agent2.rolling_plot()

    # test agent1+agent2
    agent1 = QAgent(env, n_episodes=1000, epsilon=1)
    test1 = agent1.test(new_r=False)

    agent2 = QAgent(env, n_episodes=1000, epsilon=0.)
    test2 = agent2.test(new_r=False)

    # plot and compare them
    df = pd.DataFrame({"Random Baseline": test1[-1000:], "Q-Learning Agent": test2[-1000:]})
    df = df.stack().reset_index()
    df.columns = ["x", "hue", "y"]

    agent2.visualization(last_n_steps=-1000, outside_df=df)
