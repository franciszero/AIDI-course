import random
import numpy as np
from abc import ABC, abstractmethod
from collections import defaultdict, namedtuple, deque
from keras import Sequential
from keras.activations import relu, linear
from keras.layers import Dense, Dropout
from keras.losses import mse, huber_loss
import math
from itertools import count
import tensorflow as tf
from keras.optimizers import Adam

from Agent import Agent
from Environment import EnvCartPole


class DQNAgent(Agent, ABC):
    def __init__(self, environment, n_episodes=1, n_steps=1, gamma=0.5,
                 memory_cap=10000, batch_size=64, alpha=1.0e-4, tau=1,
                 epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=1.0e+05):
        super().__init__(environment, n_episodes, n_steps, gamma, alpha,
                         epsilon, epsilon_start, epsilon_end, epsilon_decay)
        self.state_discretizing = False  # DQN support a continues state space, then False
        self.experiences = self.ExperienceReplay(memory_cap, batch_size)
        # DNN
        self.optimizer = Adam(learning_rate=self.lr, amsgrad=True)
        self.policy_net = self.DNN()
        self.target_net = self.DNN()
        self.TAU = tau  # for a soft update if less than 1

    def DNN(self):
        return Sequential([
            Dense(128, input_dim=self.n_obs_space, activation="relu"),
            Dense(128, activation="relu"),
            Dense(self.n_actions, activation="linear")
        ])

    class ExperienceReplay(object):
        def __init__(self, capacity, batch_size):
            self.Transition = namedtuple('Transition', ('s', 'a', 'r', 's_', 'd'))
            self.batch_size = batch_size
            self.memory = deque([], maxlen=capacity)

        def push(self, *args):
            self.memory.append(self.Transition(*args))  # push a transition into memory

        def sample(self):
            transitions = random.sample(self.memory, self.batch_size)  # transitions sampling
            return self.Transition(*zip(*transitions))  # zip transitions into a batch

        def allow_sampling(self):
            return self.__len__() >= self.batch_size

        def __len__(self):
            return len(self.memory)

    def learning(self, s, a, r, s_, d):
        self.experiences.push(s, a, r, s_, d)
        if not self.experiences.allow_sampling():
            return

        # sampling from replay memory
        batch = self.experiences.sample()
        s = tf.convert_to_tensor(np.array(batch.s).squeeze(1))
        a = tf.convert_to_tensor(np.array(batch.a))
        r = np.array(batch.r)
        s_ = tf.convert_to_tensor(np.array(batch.s_).squeeze(1))
        d = np.array(batch.d)

        with tf.GradientTape() as g:
            max_q = tf.reduce_max(self.policy_net(s), axis=1)
            max_q_ = tf.reduce_max(self.target_net(s_), axis=1)
            loss = mse(r + (1 - d) * self.g * max_q_, max_q)  # mse loss
        gradients = g.gradient(loss, self.policy_net.trainable_variables)  # compute gradients with loss
        self.optimizer.apply_gradients(zip(gradients, self.policy_net.trainable_variables))  # Backpropagation

        if self.sum_steps % 100 == 0:
            for i in range(len(self.policy_net.weights)):
                new_weights = self.policy_net.weights[0] * self.TAU + self.target_net.weights[0] * (1 - self.TAU)
                self.target_net.weights.insert(i, new_weights)
            print("target_network updated with policy_network")
        pass

    def action(self, s):  # ------------------------------------------------ epsilon-greedy action policy
        if self.dynamic_e_greedy:  # ------------------------------------------- dynamic e-greedy
            self.epsilon = self.epsilon_end + (self.epsilon_start - self.epsilon_end) * math.exp(
                -1. * self.sum_steps / self.epsilon_decay)
        if np.random.uniform(low=0.0, high=1.0) < self.epsilon:  # ------------- epsilon exploration
            return self.env.sample_action()
        else:  # --------------------------------------------------------------- or greedy exploitation
            return np.argmax(self.policy_net(s))

    def run(self, checkpoint_name, new_r=False):
        print("Epsilon starts from %.3f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        for episode in range(1, self.n_episodes + 1):
            print("[%d/%d]: " % (episode, self.n_episodes), end="")
            s = self.env.reset(discretize=self.state_discretizing)
            for step in range(1, self.n_steps + 1):
                a = self.action(s)
                s_, r, done, trunc = self.env.step(a, discretize=self.state_discretizing, new_reward=new_r)
                self.learning(s, a, r, s_, done)
                s = s_
                print(".", end="")
                if step % 5 == 0:
                    print(" ", end="")
                self.sum_steps += 1  # update e-greedy after each episode
                if done:
                    print("")
                    self.steps.append(step)
                    self.avg_steps.append(np.mean(self.steps[-10:]))
                    # if episode % 1 == 0:
                    #     print("[%d/%d]: %d" % (episode, self.n_episodes, step + 1))
                    if episode % 100 == 0:
                        self.save_policy(checkpoint_name=checkpoint_name)
                    break
        print("Epsilon ends at %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
        pass

    def test(self, checkpoint_name, new_r=False):
        self.read_policy(checkpoint_name)  # read policy from checkpoint
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


if __name__ == '__main__':
    env = EnvCartPole(discrete_base=8, new_step_api=False)
    agent3 = DQNAgent(env, n_episodes=20, n_steps=1000, gamma=0.99,
                      memory_cap=10000, batch_size=2, alpha=1.0e-03, tau=1,
                      epsilon=None, epsilon_start=0.5, epsilon_end=0.0001, epsilon_decay=1.0e+05, )
    cp1 = "policy3"
    agent3.run(checkpoint_name=cp1, new_r=False)
    agent3.visualization()
