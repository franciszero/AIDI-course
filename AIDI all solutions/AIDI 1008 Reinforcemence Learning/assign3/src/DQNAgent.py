# import random
# import numpy as np
# from abc import ABC, abstractmethod
# from collections import defaultdict, namedtuple, deque
# from keras import Sequential
# from keras.activations import relu, linear
# from keras.layers import Dense, Dropout
# from keras.losses import mse, huber_loss
# from keras.optimizers.optimizer_experimental.adamw import AdamW
# import math
# from itertools import count
# import tensorflow as tf
# import Agent
#
#
# class DQNAgent(Agent, ABC):
#     def __init__(self, environment, n_episodes=1, n_steps=1, gamma=0.5, alpha=1.0e-4,
#                  memory_cap=10000, batch_size=64, tau=1,
#                  epsilon=None, epsilon_start=0.95, epsilon_end=0.05, epsilon_decay=1.0e+05):
#         super().__init__(environment, n_episodes, n_steps, gamma, alpha,
#                          epsilon, epsilon_start, epsilon_end, epsilon_decay)
#         self.state_discretizing = False  # DQN support a continues state space, then False
#         self.experiences = self.ExperienceReplay(memory_cap, batch_size)
#         # DNN
#         self.policy_net = self.DNN()
#         self.target_net = self.DNN()
#         self.TAU = tau  # for a soft update if less than 1
#
#     def DNN(self):
#         dnn = Sequential([
#             Dense(128, input_dim=self.n_obs_space, activation=relu),
#             # Dropout(0.2),
#             Dense(128, activation=relu),
#             # Dropout(0.2),
#             Dense(self.n_actions, activation=linear)
#         ])
#         # dnn.compile(loss=mse, optimizer=Adam(lr=self.lr))
#         dnn.compile(loss=huber_loss, optimizer=AdamW(learning_rate=self.lr, amsgrad=True))
#         return dnn
#
#     class ExperienceReplay(object):
#         def __init__(self, capacity, batch_size):
#             self.Transition = namedtuple('Transition', ('s', 'a', 'r', 's_'))
#             self.batch_size = batch_size
#             self.memory = deque([], maxlen=capacity)
#
#         def push(self, *args):
#             self.memory.append(self.Transition(*args))  # push a transition into memory
#
#         def sample(self):
#             transitions = random.sample(self.memory, self.batch_size)  # transitions sampling
#             return self.Transition(*zip(*transitions))  # zip transitions into a batch
#
#         def allow_sampling(self):
#             return self.__len__() >= self.batch_size
#
#         def __len__(self):
#             return len(self.memory)
#
#     def learning(self, s, a, r, s_):
#         self.experiences.push(s, a, r, s_)
#         if not self.experiences.allow_sampling():
#             return
#
#         # sampling from replay memory
#         batch = self.experiences.sample()
#
#         # predicting Q-targets
#         mask = [x is not None for x in batch.s_]
#         max_q_ = np.zeros(self.experiences.batch_size)
#         s_ = np.array([list(s.squeeze()) for s in batch.s_ if s is not None])
#         max_q_[mask] = tf.reduce_max(self.target_net(s_), axis=1)
#
#         # prepare training samples and return
#         x = np.array([list(s.squeeze()) for s in batch.s])
#         y = max_q_ * self.g + batch.r
#         self.policy_net.fit(x, y, verbose=0)
#         if self.sum_steps % 100 == 0:
#             for i in range(len(self.policy_net.weights)):
#                 new_weights = self.policy_net.weights[0] * self.TAU + self.target_net.weights[0] * (1 - self.TAU)
#                 self.target_net.weights.insert(i, new_weights)
#         pass
#
#     def action(self, s):  # ------------------------------------------------ epsilon-greedy action policy
#         if self.dynamic_e_greedy:  # ------------------------------------------- dynamic e-greedy
#             self.epsilon = self.epsilon_end + (self.epsilon_start - self.epsilon_end) * math.exp(
#                 -1. * self.sum_steps / self.epsilon_decay)
#         if np.random.uniform(low=0.0, high=1.0) < self.epsilon:  # ------------- epsilon exploration
#             return self.env.sample_action()
#         else:  # --------------------------------------------------------------- or greedy exploitation
#             return np.argmax(self.policy_net(s))
#
#     def run(self, checkpoint_name, new_r=False):
#         print("Epsilon starts from %.3f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
#         for episode in range(1, self.n_episodes + 1):  # -----------------------  Loop for each episode
#             s = self.env.reset(discretize=self.state_discretizing)  # ----------     Initialize S
#             # for step in range(1, self.n_steps + 1):  # -------------------------     Loop for each step of episode
#             for step in count():
#                 a = self.action(s)  # ------------------------------------------        Choose A from S using policy derived from Q (e.g., ε-greedy)
#                 s_, r, done, trunc = self.env.step(a, discretize=self.state_discretizing,
#                                                    new_reward=new_r)  # ---------------        Take action A, observe R, S'
#                 self.learning(s, a, r, s_)  # ----------------------------------        Q(S, A) = Q(S, A) + α[R + γ max Q(S', a) - Q(S, A)]
#                 s = s_  # ------------------------------------------------------        S = S'
#                 if done:  # ----------------------------------------------------     until S is terminal
#                     self.steps.append(step)
#                     self.sum_steps += step  # update e-greedy after each episode
#                     self.avg_steps.append(np.mean(self.steps[-10:]))
#                     # if episode % 500 == 0:
#                     #     print("[%d/%d]: %d" % (episode, self.n_episodes, step + 1))
#                     if episode % 100 == 0:
#                         self.save_policy(checkpoint_name=checkpoint_name)
#                     break
#         print("Epsilon ends at %.4f" % (self.epsilon_start if self.epsilon is None else self.epsilon))
#         pass
