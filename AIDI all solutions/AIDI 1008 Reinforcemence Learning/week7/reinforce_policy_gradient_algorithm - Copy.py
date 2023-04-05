import sys
import torch
import gym
import numpy as np
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
from torch.autograd import Variable
import matplotlib.pyplot as plt
from tensorflow import keras
from keras.models import Sequential
from keras.layers import Dense, Activation
from keras.optimizers import Adam
from collections import defaultdict
import os, sys

os.environ["SDL_VIDEODRIVER"] = "dummy"

# Constants
GAMMA = 0.9


class PolicyNetwork(nn.Module):
    def __init__(self, num_inputs, num_actions, hidden_size=128, learning_rate=3e-4):
        super(PolicyNetwork, self).__init__()

        self.num_actions = num_actions
        self.linear1 = nn.Linear(num_inputs, hidden_size)
        self.linear2 = nn.Linear(hidden_size, num_actions)
        self.optimizer = optim.Adam(self.parameters(), lr=learning_rate)

        self.lr = 0.001
        self.memory_buffer = list()
        self.max_memory_buffer = 2000
        self.exploration_proba = 1.0
        self.exploration_proba_decay = 0.005
        self.batch_size = 32

        self.model = Sequential([
            Dense(units=24, input_dim=num_inputs, activation='relu'),
            Dense(units=24, activation='relu'),
            Dense(units=num_actions, activation='linear')
        ])

        self.model.compile(loss="mse",
                           optimizer=Adam(lr=self.lr))

    def forward(self, state):
        x = F.relu(self.linear1(state))
        x = F.softmax(self.linear2(x), dim=1)
        return x

    def update_exploration_probability(self):
        self.exploration_proba = self.exploration_proba * np.exp(-self.exploration_proba_decay)
        print(self.exploration_proba)

    def get_action(self, state):
        q_values = self.model.predict(np.array([state]), verbose=0)[0]
        # print("This is qvalues:",q_values)

        return np.argmax(q_values)

    def get_random_action(self):
        return np.random.randint(0, 1)

    def store_episode(self, state, action, reward, new_state, done):
        self.memory_buffer.append({
            "state": state,
            "action": action,
            "reward": reward,
            "new_state": new_state,
            "done": done
        })
        if len(self.memory_buffer) > self.max_memory_buffer:
            self.memory_buffer.pop(0)

    def update_policy_DQL(self):
        np.random.shuffle(self.memory_buffer)
        print('self.memory_buffer', len(self.memory_buffer))
        batch_sample = self.memory_buffer[0:self.batch_size]
        for experience in batch_sample:
            q_current_state = self.model.predict(experience["state"], verbose=0)
            q_target = experience["reward"]

            if not experience["done"]:
                q_target = q_target + GAMMA * np.max(self.model.predict(experience["new_state"], verbose=0)[0])
            q_current_state[0][experience["action"]] = q_target
            self.model.fit(experience["state"], q_current_state, verbose=0)

    # def update_policy_QL(self):
    #     np.random.shuffle(self.memory_buffer)
    #     # print('self.memory_buffer', len(self.memory_buffer))
    #     batch_sample = self.memory_buffer[0:self.batch_size]

    #     Q = defaultdict(lambda: np.zeros(env.action_space.n))

    #     for experience in batch_sample:
    #         q_current_state = self.model.predict(experience["state"])
    #         q_target = experience["reward"]

    #         if not experience["done"]:
    #             q_target = q_target + GAMMA*np.max(self.model.predict(experience["new_state"])[0])
    #             q_target = q_target + GAMMA * Q[experience["new_state"]][experience["action"]]
    #         q_current_state[0][experience["action"]] = q_target
    #         self.model.fit(experience["state"], q_current_state, verbose=0)


def main():
    env = gym.make('CartPole-v1')
    policy_net = PolicyNetwork(env.observation_space.shape[0], env.action_space.n, 128)

    # max_episode_num = 5000
    # max_steps = 10000
    max_episode_num = 500
    max_steps = 1000
    numsteps = []
    avg_numsteps = []
    all_rewards = []
    total_steps = 0

    for episode in range(max_episode_num):
        state = env.reset()
        rewards = []

        for steps in range(max_steps):
            # env.render()
            total_steps = total_steps + 1
            action = policy_net.get_action(state)
            # action = policy_net.get_random_action()
            # new_state, reward, done, _ = env.step(action)
            new_state, reward, done, _ = env.step(action)
            rewards.append(reward)

            policy_net.store_episode(np.array([state]), action, reward, np.array([new_state]), done)

            if done:
                policy_net.update_exploration_probability()
                numsteps.append(steps)
                avg_numsteps.append(np.mean(numsteps[-10:]))
                all_rewards.append(np.sum(rewards))
                if episode % 1 == 0:
                    sys.stdout.write("episode: {}, total reward: {}, average_reward: {}, length: {}\n"
                                     .format(episode, np.round(np.sum(rewards), decimals=3),
                                             np.round(np.mean(all_rewards[-10:]), decimals=3),
                                             steps))
                break

            state = new_state

    if total_steps >= policy_net.batch_size:
        policy_net.update_policy_DQL()

    # The agent computes the action to perform given a state
    def compute_action(self, current_state):
        # We sample a variable uniformly over [0,1]
        # if the variable is less than the exploration probability
        #     we choose an action randomly
        # else
        #     we forward the state through the DNN and choose the action
        #     with the highest Q-value.
        if np.random.uniform(0, 1) < self.exploration_proba:
            return np.random.choice(range(env.observation_space.shape[0]))
        q_values = self.model.predict(current_state)[0]
        print("This is qvalues:", q_values)
        return np.argmax(q_values)

    rewards = 0
    steps = 0
    done = False
    state = env.reset()
    state = np.array([state])
    while not done:
        action = compute_action(policy_net, state)
        state, reward, done, _ = env.step(action)
        state = np.array([state])
        steps += 1
        rewards += reward
    print(rewards)
    # env.close()
    # env_to_wrap.close()

    plt.plot(numsteps)
    plt.plot(avg_numsteps)
    plt.xlabel('Episode')
    plt.show()


main()
