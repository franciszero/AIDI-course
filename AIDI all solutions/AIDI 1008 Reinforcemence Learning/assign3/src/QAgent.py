import numpy as np
from abc import ABC, abstractmethod
import math
from itertools import count
from Agent import Agent


class QAgent(Agent, ABC):
    def __init__(self, environment, n_episodes=1, n_steps=1, gamma=0.5, alpha=0.5,
                 epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=1.0e+05):
        super().__init__(environment, n_episodes, n_steps, gamma, alpha,
                         epsilon, epsilon_start, epsilon_end, epsilon_decay)
        self.state_discretizing = True
        pass

    def action(self, state):  # ------------------------------------------------ epsilon-greedy action policy
        if self.dynamic_e_greedy:  # ------------------------------------------- dynamic e-greedy
            self.epsilon = self.epsilon_end + (self.epsilon_start - self.epsilon_end) * math.exp(
                -1. * self.sum_steps / self.epsilon_decay)
        if np.random.uniform(low=0.0, high=1.0) < self.epsilon:  # ------------- epsilon exploration
            return self.env.sample_action()
        else:  # --------------------------------------------------------------- or greedy exploitation
            return np.argmax(self.Q[state][:])

    def learning(self, s, a, r, s_):
        self.Q[s][a] += self.lr * (r + self.g * max(self.Q[s_][:]) - self.Q[s][a])

    def run(self, checkpoint_name, new_r=False):
        print("Epsilon starts from %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        for episode in range(1, self.n_episodes + 1):  # -----------------------  Loop for each episode
            s = self.env.reset(discretize=self.state_discretizing)  # ------     Initialize S
            for step in range(1, self.n_steps + 1):  # -------------------------     Loop for each step of episode
                a = self.action(s)  # ------------------------------------------        Choose A from S using policy derived from Q (e.g., ε-greedy)
                s_, r, done, trunc = self.env.step(a, discretize=self.state_discretizing,
                                            new_reward=new_r)  # ------        Take action A, observe R, S'
                self.learning(s, a, r, s_)  # ----------------------------------        Q(S, A) = Q(S, A) + α[R + γ max Q(S', a) - Q(S, A)]
                s = s_  # ------------------------------------------------------        S = S'
                if done:  # ----------------------------------------------------     until S is terminal
                    self.steps.append(step)
                    self.sum_steps += step  # update e-greedy after each episode
                    self.avg_steps.append(np.mean(self.steps[-10:]))
                    if episode % 500 == 0:
                        print("[%d/%d]: %d" % (episode, self.n_episodes, step + 1))
                    if episode % 100 == 0:
                        self.save_policy(checkpoint_name=checkpoint_name)
                    break
        print("Epsilon ends at %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        pass

    def test(self, checkpoint_name, new_r=False):
        print("Epsilon starts from %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        self.read_policy(checkpoint_name)  # read policy from checkpoint
        self.steps = []
        for episode in range(1, self.n_episodes + 1):  # Loop for each episode
            s = self.env.reset(discretize=self.state_discretizing)  # Initialize S
            for step in count():
                a = self.action(s)
                s, _, done, trunc = self.env.step(a, discretize=self.state_discretizing, new_reward=new_r)  # directly use s=s_
                if done or trunc:  # until S is terminal
                    self.steps.append(step + 1)
                    break
        return self.steps
