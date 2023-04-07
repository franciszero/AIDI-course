import random
import numpy as np
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
import matplotlib.pyplot as plt

from Agent import Agent
from Environment import EnvCartPole

# set up matplotlib
import matplotlib
is_ipython = 'inline' in matplotlib.get_backend()
if is_ipython:
    from IPython import display




class DQNAgent(Agent, ABC):
    def __init__(self, environment, n_episodes=1, n_steps=1, gamma=0.5,
                 memory_cap=10000, batch_size=64, alpha=1.0e-4, tau=1.,
                 epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=1.0e+05,
                 checkpoint_name=None, ):
        super().__init__(environment, n_episodes, n_steps, gamma, alpha,
                         epsilon, epsilon_start, epsilon_end, epsilon_decay, checkpoint_name)
        self.state_discretizing = False  # DQN support a continues state space, then False
        self.experiences = self.ExperienceReplay(memory_cap, batch_size)
        # DNN
        self.optimizer = Adam(learning_rate=self.lr, amsgrad=True)
        self.policy_net = self.DNN()
        self.policy_net.save_weights(self.checkpoint_name + "_policy_net.h5")  # reset weights checkpoint
        self.target_net = self.DNN()
        self.target_net.save_weights(self.checkpoint_name + "_target_net.h5")  # reset weights checkpoint
        self.TAU = tau  # for a soft update if less than 1
        self.loss = 0.

    def DNN(self):
        dnn = Sequential([
            Input(shape=(self.n_obs_space,)),
            Dense(128, activation="relu"),
            Dense(128, activation="relu"),
            Dense(self.n_actions, activation="linear")
        ])
        dnn.compile(loss=mse, optimizer=Adam(learning_rate=self.lr))
        return dnn

    class ExperienceReplay(object):
        def __init__(self, capacity, batch_size):
            self.Transition = namedtuple('Transition', ('s', 'a', 'r', 's_', 'd'))
            self.batch_size = batch_size
            self.memory = deque([], maxlen=capacity)

        def push(self, *args):
            self.memory.append(self.Transition(*args))  # push a transition into memory

        def sample(self):
            transitions = random.sample(self.memory, self.batch_size)  # transitions sampling
            batch = self.Transition(*zip(*transitions))
            s = tf.convert_to_tensor(np.array(batch.s).squeeze(1))
            a = tf.convert_to_tensor(np.array(batch.a))
            r = np.array(batch.r)
            s_ = tf.convert_to_tensor(np.array(batch.s_).squeeze(1))
            d = np.array(batch.d)
            return s, a, r, s_, d  # zip transitions into a batch

        def allow_sampling(self):
            return self.__len__() >= self.batch_size

        def __len__(self):
            return len(self.memory)

    def action(self, s):  # ------------------------------------------------ epsilon-greedy action policy
        if self.dynamic_e_greedy:  # ------------------------------------------- dynamic e-greedy
            self.epsilon = self.epsilon_end + (self.epsilon_start - self.epsilon_end) * math.exp(
                -1. * self.sum_steps / self.epsilon_decay)
        if np.random.uniform(low=0.0, high=1.0) < self.epsilon:  # ------------- epsilon exploration
            return self.env.sample_action()
        else:  # --------------------------------------------------------------- or greedy exploitation
            return np.argmax(self.policy_net(s))

    def keep_running(self, new_r=False):
        self.read_policy()  # read policy from checkpoint
        self.policy_net.load_weights(self.checkpoint_name + "_policy_net.h5")  # load weights
        print("load weights to policy_net")
        self.target_net.load_weights(self.checkpoint_name + "_target_net.h5")  # load weights
        print("load weights to target_net")
        self.run(new_r=new_r)

    def test(self, new_r=False):
        self.read_policy()  # read policy from checkpoint
        self.policy_net.load_weights(self.checkpoint_name + "_policy_net.h5")  # load weights
        print("load weights to policy_net")
        self.target_net.load_weights(self.checkpoint_name + "_target_net.h5")  # load weights
        print("load weights to target_net")
        print("Epsilon starts from %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        self.steps = []
        for episode in range(1, self.n_episodes + 1):  # Loop for each episode
            s = self.env.reset(discretize=self.state_discretizing)  # Initialize S
            for step in count():
                a = self.action(s)
                s, _, done, trunc = self.env.step(a, discretize=self.state_discretizing,
                                                  new_reward=new_r)  # directly use s=s_
                if done or trunc:  # until S is terminal
                    self.steps.append(step + 1)
                    break
        return self.steps

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

    def learning(self, s, a, r, s_, d):
        self.experiences.push(s, a, r, s_, d)
        if not self.experiences.allow_sampling():
            return

        s, a, r, s_, d = self.experiences.sample()  # sampling from replay memory

        with tf.GradientTape() as g:
            q = self.policy_net(s)
            m = tf.one_hot(a, self.n_actions)
            real_q = tf.reduce_sum(m * q, axis=-1)  # q_values_taken_by_action

            max_q_ = tf.reduce_max(self.target_net(s_), axis=1)
            self.loss = mse(r + (1 - d) * self.g * max_q_, real_q)  # mse loss
        gradients = g.gradient(self.loss, self.policy_net.trainable_variables)  # compute gradients with loss
        self.optimizer.apply_gradients(zip(gradients, self.policy_net.trainable_variables))  # Backpropagation

        # Soft update of the target network's weights
        # # θ′ ← τ θ + (1 −τ )θ′
        new_weights = []
        w1 = self.policy_net.weights
        w2 = self.target_net.weights
        for i in range(len(self.policy_net.weights)):
            new_weights.append(w1[i] * self.TAU + w2[i] * (1 - self.TAU))
        self.target_net.set_weights(new_weights)
        # if self.sum_steps % 100 == 0:
        #     from keras.models import clone_model
        #     self.target_net = clone_model(self.policy_net)
        #     print("model clone")
        pass

    def run(self, new_r=False):
        print("Epsilon starts from %.3f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        for episode in range(1, self.n_episodes + 1):
            s = self.env.reset(discretize=self.state_discretizing)
            for step in range(1, self.n_steps + 1):
                a = self.action(s)
                s_, r, done, trunc = self.env.step(a, discretize=self.state_discretizing, new_reward=new_r)
                self.learning(s, a, r, s_, done)
                s = s_
                self.sum_steps += 1  # update e-greedy after each episode
                if done:
                    self.policy_net.save("./")
                    self.steps.append(step)
                    self.avg_steps.append(np.mean(self.steps[-10:]))
                    # if episode % 5 == 0:
                    #     self.plot_durations()
                    print("[%d/%d]: %d, %.4f, %.4f" % (episode, self.n_episodes, step, self.epsilon, self.loss))
                    if episode % 500 == 0:
                        print("[%d/%d]: %d" % (episode, self.n_episodes, step + 1))
                    if episode % 100 == 0:
                        self.save_policy()
                        self.policy_net.save_weights(self.checkpoint_name + "_policy_net.h5")
                        self.target_net.save_weights(self.checkpoint_name + "_target_net.h5")
                    break
        print("Epsilon ends at %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        pass


if __name__ == '__main__':
    env = EnvCartPole(discrete_base=8, new_step_api=False)
    agent3 = DQNAgent(env, n_episodes=250, n_steps=1000, gamma=0.99,
                      memory_cap=1000, batch_size=128, alpha=1.0e-4, tau=0.005,
                      epsilon=None, epsilon_start=0.9, epsilon_end=0.05, epsilon_decay=1.0e+03, )
    agent3.run(checkpoint_name="policy3", new_r=False)
    agent3.visualization()
