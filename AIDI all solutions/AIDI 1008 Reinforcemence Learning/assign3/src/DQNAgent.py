import random
from os.path import isfile

import numpy as np
import pandas as pd
from abc import ABC, abstractmethod
from collections import defaultdict, namedtuple, deque

import torch
from keras import Sequential, Input
from keras.activations import relu, linear
from keras.layers import Dense, Dropout
from keras.losses import mse, huber_loss
import math
from itertools import count
import tensorflow as tf
from keras.optimizers import Adam
import keras.backend as K
import matplotlib.pyplot as plt

from Agent import Agent
from Environment import EnvCartPole

# set up matplotlib
import matplotlib

is_ipython = 'inline' in matplotlib.get_backend()
if is_ipython:
    from IPython import display


# https://pytorch.org/tutorials/intermediate/reinforcement_q_learning.html
# https://colab.research.google.com/drive/1ExE__T9e2dMDKbxrJfgp8jP0So8umC-A#sandboxMode=true&scrollTo=OvvBAoQVJsuU
# https://jonathan-hui.medium.com/rl-dqn-deep-q-network-e207751f7ae4#5c95

class DQNAgent(Agent, ABC):
    def __init__(self, environment, n_episodes=1, n_steps=1, gamma=0.5,
                 memory_cap=10000, batch_size=64, alpha=1.0e-4, tau=1.,
                 epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=1.0e+05,
                 checkpoint_name=None, ):
        super().__init__(environment, n_episodes, n_steps, gamma, alpha,
                         epsilon, epsilon_start, epsilon_end, epsilon_decay, checkpoint_name)
        self.env.discretize = False  # DQN support a continues state space, then False
        self.experiences = self.ExperienceReplay(memory_cap, batch_size)
        # DNN
        self.optimizer = Adam(learning_rate=self.lr, amsgrad=True)
        self.policy_net = self.DNN("policy_net")
        self.target_net = self.DNN("target_net")
        self.TAU = tau  # for a soft update if less than 1

    def DNN(self, model_name):
        dnn = Sequential([
            Input(shape=(self.n_obs_space,)),
            Dense(128, activation="relu"),
            Dense(128, activation="relu"),
            Dense(self.n_actions, activation="linear")
        ])
        dnn.compile(loss=mse, optimizer=Adam(learning_rate=self.lr))
        dnn._name = model_name
        return dnn

    class ExperienceReplay(object):
        def __init__(self, capacity, batch_size):
            self.Transition = namedtuple('Transition', ('s', 'a', 'r', 's_', 'd'))
            self.batch_size = batch_size
            self.memory = deque([], maxlen=capacity)

        def push(self, *args):
            self.memory.append(self.Transition(*args))  # push a transition into memory

        def sample(self, n_actions):
            transitions = random.sample(self.memory, self.batch_size)  # transitions sampling
            batch = self.Transition(*zip(*transitions))
            s = tf.squeeze(tf.convert_to_tensor(batch.s, dtype=tf.float32), axis=1)
            a = tf.one_hot(batch.a, n_actions, dtype=tf.float32)
            r = tf.convert_to_tensor(batch.r, dtype=tf.float32)
            s_ = tf.squeeze(tf.convert_to_tensor(batch.s_, dtype=tf.float32), axis=1)
            d = np.ones(self.batch_size) - tf.convert_to_tensor(batch.d, dtype=tf.float32)
            return s, a, r, s_, d  # zip transitions into a batch

        def allow_sampling(self):
            return self.__len__() >= self.batch_size

        def __len__(self):
            return len(self.memory)

    def action(self, s):  # ------------------------------------------------ epsilon-greedy action policy
        if self.dynamic_e_greedy:  # ------------------------------------------- dynamic e-greedy
            self.epsilon = self.epsilon_end + (self.epsilon_start - self.epsilon_end) * math.exp(
                -1. * self.sum_steps / self.epsilon_decay)
        self.sum_steps += 1  # update e-greedy after each step
        if np.random.uniform(low=0.0, high=1.0) < self.epsilon:  # ------------- epsilon exploration
            return self.env.sample_action()
        else:  # --------------------------------------------------------------- or greedy exploitation
            return np.argmax(self.policy_net(s))

    def keep_running(self, new_r=False):
        self.read_policy()  # read policy from checkpoint
        self.run(new_r=new_r)

    def plot_durations(self, show_result=False):
        plt.figure(1, figsize=(10, 3), dpi=100)
        durations_t = torch.tensor(self.steps, dtype=torch.float)
        if show_result:
            plt.title('Result')
        else:
            plt.clf()
            plt.title('Training...')
        plt.xlabel('Episode')
        plt.ylabel('Duration')
        plt.plot(durations_t.numpy())
        # Take 100 episode averages and plot them too
        if len(durations_t) >= 100:
            means = durations_t.unfold(0, 100, 1).mean(1).view(-1)
            means = torch.cat((torch.zeros(99), means))
            plt.plot(means.numpy())

        plt.pause(0.001)  # pause a bit so that plots are updated
        if is_ipython:
            if not show_result:
                display.display(plt.gcf())
                display.clear_output(wait=True)
            else:
                display.display(plt.gcf())

    @tf.function
    def _learning(self, s, a, r, s_, mask):
        with tf.GradientTape() as g:
            real_q = tf.reduce_sum(self.policy_net(s) * a, axis=1)  # q_values_taken_by_action
            max_q_ = tf.reduce_max(self.target_net(s_), axis=1)
            loss = mse(r + mask * self.g * max_q_, real_q)  # mse loss
        gradients = g.gradient(loss, self.policy_net.trainable_variables)  # compute gradients with loss
        self.optimizer.apply_gradients(zip(gradients, self.policy_net.trainable_variables))  # Backpropagation

    def learning(self, s, a, r, s_, d):
        self.experiences.push(s, a, r, s_, d)
        if not self.experiences.allow_sampling():
            return

        s, a, r, s_, d = self.experiences.sample(self.n_actions)
        self._learning(s, a, r, s_, d)  # sampling from replay memory

        # Soft update: θ′ ← τ θ + (1 −τ )θ′
        new_weights = []
        w1 = self.policy_net.weights
        w2 = self.target_net.weights
        for i in range(len(self.policy_net.weights)):
            new_weights.append(w1[i] * self.TAU + w2[i] * (1 - self.TAU))
        self.target_net.set_weights(new_weights)
        # or update target network every N steps:
        # if self.sum_steps % N == 0:
        #     from keras.models import clone_model
        #     self.target_net = clone_model(self.policy_net)
        pass

    def run(self, new_r=False, debugging_freq=10):
        for episode in range(1, self.n_episodes + 1):
            s = self.env.reset()
            for step in range(1, self.n_steps + 1):
                a = self.action(s)
                s_, r, done, trunc = self.env.step(a, new_reward=new_r)
                self.learning(s, a, r, s_, done)
                s = s_
                if done:
                    self.steps.append(step)
                    if episode % debugging_freq == 0:
                        # self.plot_durations()
                        print("[%d/%d]: steps %d, epsilon %.4f" % (episode, self.n_episodes, step, self.epsilon))
                    if episode % 200 == 0:
                        self.save_policy()
                    break
        print("Epsilon ends at %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        self.save_policy()
        pass

    def test(self, new_r=False):
        self.read_policy()  # read policy from checkpoint
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
    # env = EnvCartPole(new_step_api=False)
    # agent3 = DQNAgent(env, n_episodes=200, n_steps=1000, gamma=0.99, epsilon=1,
    #                   memory_cap=1000, batch_size=128, alpha=1.0e-4, tau=0.005,
    #                   checkpoint_name="policy3", )
    # agent3.run(new_r=False)
    # agent3.rolling_plot()

    env = EnvCartPole(new_step_api=False)
    agent4 = DQNAgent(env, n_episodes=20, n_steps=1000, gamma=0.99,
                      memory_cap=1000, batch_size=128, alpha=1.0e-4, tau=0.005,
                      epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=2.0e+03,
                      checkpoint_name="policy4", )
    agent4.run(new_r=False)

    # # define e=0 to apply policy 1, which is a random baseline
    # agent3 = DQNAgent(env, n_episodes=50, epsilon=0, checkpoint_name="policy3", )
    # test3 = agent3.test(new_r=False)
    #
    # # define e=0 to apply policy 1, which is a well traind DQN Agent
    # agent4 = DQNAgent(env, n_episodes=50, epsilon=0, checkpoint_name="policy4", )
    # test4 = agent4.test(new_r=False)
    #
    # # plot and compare them
    # df = pd.DataFrame({"Random Baseline": test3[-1000:], "Deep Q-Learning Agent": test4[-1000:]})
    # df = df.stack().reset_index()
    # df.columns = ["x", "hue", "y"]
    #
    # agent4.vis(df, "Agent Comparison", "Episodes", "Steps", "Agent comparison")
    # agent4.cumsum_plot(test3, test4)

