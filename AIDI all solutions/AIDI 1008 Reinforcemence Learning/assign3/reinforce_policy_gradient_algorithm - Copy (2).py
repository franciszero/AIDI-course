import sys
import gym
import numpy as np
import matplotlib.pyplot as plt
from tensorflow import keras
from keras.models import Sequential
from keras.layers import Dense
from keras.optimizers import Adam
import os
import sys
import json

os.environ["SDL_VIDEODRIVER"] = "dummy"

# Constants
GAMMA = 0.9


class PolicyNetwork():
    def __init__(self, num_inputs, num_actions, learning_rate=3e-4):
        super(PolicyNetwork, self).__init__()

        self.num_actions = num_actions

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

    def update_exploration_probability(self):
        self.exploration_proba = self.exploration_proba * np.exp(-self.exploration_proba_decay)
        # print(self.exploration_proba)

    def get_action(self, state):
        q_values = self.model.predict(np.array([state]), verbose=0)[0]
        # print("This is qvalues:",q_values)

        return np.argmax(q_values)

    @staticmethod
    def get_random_action():
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
        # print('self.memory_buffer', len(self.memory_buffer))
        batch_sample = self.memory_buffer[0:self.batch_size]
        for experience in batch_sample:
            q_current_state = self.model.predict(experience["state"], verbose=0)
            q_target = experience["reward"]

            if not experience["done"]:
                q_target = q_target + GAMMA * np.max(self.model.predict(experience["new_state"], verbose=0)[0])
            q_current_state[0][experience["action"]] = q_target
            self.model.fit(experience["state"], q_current_state, verbose=0)


class QL():
    def __init__(self, num_inputs, num_actions):
        super(QL, self).__init__()

        self.num_actions = num_actions
        self.num_inputs = num_inputs

        self.memory_buffer = list()
        self.max_memory_buffer = 2000
        self.exploration_proba = 1.0
        self.exploration_proba_decay = 0.005
        self.batch_size = 32
        self.nA = num_actions
        self.epsilon = 0.1
        self.Q = np.zeros([self.num_inputs, self.num_actions])

    def update_exploration_probability(self):
        self.exploration_proba = self.exploration_proba * np.exp(-self.exploration_proba_decay)
        # print(self.exploration_proba)

    def get_action(self, state):
        A = np.ones(self.nA, dtype=float) * self.epsilon / self.nA
        best_action = np.argmax(self.Q[state])
        A[best_action] += (1.0 - self.epsilon)
        return np.random.choice(np.arange(self.nA), p=A)

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

    def update_policy_QL(self):
        np.random.shuffle(self.memory_buffer)
        # print('self.memory_buffer', len(self.memory_buffer))
        batch_sample = self.memory_buffer[0:self.batch_size]

        alpha = 0.1

        for experience in batch_sample:
            q_target = experience["reward"]

            if not experience["done"]:
                best_next_action = np.argmax(self.Q[experience["new_state"]])
                q_target = q_target + GAMMA * self.Q[experience["new_state"]][best_next_action]
                q_error = q_target - self.Q[experience["state"]][experience["action"]]
                self.Q[experience["state"]][experience["action"]] = self.Q[experience["state"]][
                                                                        experience["action"]] + alpha * q_error


def main():
    env = gym.make('CartPole-v1')
    policy_net = PolicyNetwork(env.observation_space.shape[0], env.action_space.n, 128)
    ql = QL(env.observation_space.shape[0], env.action_space.n)

    # max_episode_num = 5000
    # max_steps = 10000
    max_episode_num = 100
    max_steps = 1000
    numsteps = []
    avg_numsteps = []
    all_rewards = []
    total_steps = 0

    for episode in range(max_episode_num):
        state = env.reset()[0]
        rewards = []

        for steps in range(max_steps):
            env.render()
            total_steps = total_steps + 1
            # RL - DQL
            action = policy_net.get_action(state)
            # random - DQL
            # action = policy_net.get_random_action()

            # RL - QL
            # action = ql.get_action(state.astype(int))
            # random - QL
            # action = ql.get_random_action()

            # new_state, reward, done, _ = env.step(action)
            new_state, reward, done, _, _ = env.step(action)
            rewards.append(reward)

            # DQL
            policy_net.store_episode(np.array([state]), action, reward, np.array([new_state]), done)

            # QL
            # ql.store_episode(state.astype(int), action, reward, new_state.astype(int), done)

            if done:
                # DQL
                policy_net.update_exploration_probability()
                # QL
                # ql.update_exploration_probability()
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

    # DQL
    if total_steps >= policy_net.batch_size:
        policy_net.update_policy_DQL()

    # QL
    # if total_steps >= ql.batch_size:
    #     ql.update_policy_QL()

    plt.plot(numsteps)
    plt.plot(avg_numsteps)
    plt.xlabel('Episode')
    plt.show()


main()
