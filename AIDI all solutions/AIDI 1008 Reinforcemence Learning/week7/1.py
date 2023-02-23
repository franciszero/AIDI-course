import numpy as np
import gym
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Activation
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.metrics import mean_squared_error
from matplotlib import pyplot as plt


class DQNAgent:
    def __init__(self, state_size, action_size):
        self.n_actions = action_size
        # we define some parameters and hyperparameters:
        # "lr" : learning rate
        # "gamma": discounted factor
        # "exploration_proba_decay": decay of the exploration probability
        # "batch_size": size of experiences we sample to train the DNN
        self.lr = 0.001
        self.gamma = 0.99
        self.exploration_proba = 1.0
        self.exploration_proba_decay = 0.005
        self.batch_size = 32

        # We define our memory buffer where we will store our experiences
        # We stores only the 2000 last time steps
        self.memory_buffer = list()
        self.max_memory_buffer = 2000

        # We creaate our model having to hidden layers of 24 units (neurones)
        # The first layer has the same size as a state size
        # The last layer has the size of actions space
        self.model = Sequential([
            Dense(units=24, input_dim=state_size, activation='relu'),  # input with state size
            Dense(units=24, activation='relu'),  # hidden layers
            Dense(units=action_size, activation='linear')  # output with action size
        ])
        self.model.compile(loss="mse",
                           optimizer=Adam(lr=self.lr))

    # The agent computes the action to perform given a state
    def compute_action(self, current_state):
        # We sample a variable uniformly over [0,1]
        # if the variable is less than the exploration probability
        #     we choose an action randomly
        # else
        #     we forward the state through the DNN and choose the action
        #     with the highest Q-value.
        if np.random.uniform(0, 1) < self.exploration_proba:  # exploration
            return np.random.choice(range(self.n_actions))
        else:  # exploitation 1-epsilon
            q_values = self.model.predict(current_state)[0]
            print("This is qvalues:", q_values)
            return np.argmax(q_values)

    # when an episode is finished, we update the exploration probability using
    # espilon greedy algorithm
    def update_exploration_probability(self):
        self.exploration_proba = self.exploration_proba * np.exp(-self.exploration_proba_decay)
        # print(self.exploration_proba)  # epsilon

    # At each time step, we store the corresponding experience
    def store_episode(self, current_state, action, reward, next_state, done):
        # We use a dictionnary to store them
        self.memory_buffer.append({
            "current_state": current_state,
            "action": action,
            "reward": reward,
            "next_state": next_state,
            "done": done
        })
        # If the size of memory buffer exceeds its maximum, we remove the oldest experience
        if len(self.memory_buffer) > self.max_memory_buffer:
            self.memory_buffer.pop(0)

    # At the end of each episode, we train our model
    def train(self):
        # We shuffle the memory buffer and select a batch size of experiences
        np.random.shuffle(self.memory_buffer)
        batch_sample = self.memory_buffer[0:self.batch_size]  # use random 32 of at most 2000

        # We iterate over the selected experiences
        for experience in batch_sample:  # repeat the predict action for all s in batch_sample space
            current_state = experience["current_state"]
            q_target = experience["reward"]  # We compute the Q-target using Bellman optimality equation
            is_terminate = experience["done"]
            action = experience["action"]
            next_state = experience["next_state"]

            # We compute the Q-values of S_t
            q_current_state = self.model.predict(current_state)
            if not is_terminate:  # if not a terminal state
                q_next_state = self.model.predict(next_state)
                q_target = q_target + self.gamma * np.max(q_next_state[0])
            q_current_state[0][action] = q_target  # update it to the experience of current state
            # train the model
            self.model.fit(current_state, q_current_state, verbose=0)


# We create our gym environment
env = gym.make("CartPole-v1")
# We get the shape of a state and the actions space size
state_size = env.observation_space.shape[0]
action_size = env.action_space.n
# Number of episodes to run
n_episodes = 100
# Max iterations per epiode
max_iteration_ep = 200
# We define our agent
agent = DQNAgent(state_size, action_size)
total_steps = 0

# We iterate over episodes
for e in range(n_episodes):
    # We initialize the first state and reshape it to fit
    #  with the input layer of the DNN
    current_state = env.reset()
    current_state = np.array([current_state])
    for step in range(max_iteration_ep):
        total_steps = total_steps + 1
        # the agent computes the action to perform
        action = agent.compute_action(current_state)
        # the envrionment runs the action and returns
        # the next state, a reward and whether the agent is done
        next_state, reward, done, _ = env.step(action)
        next_state = np.array([next_state])

        # We sotre each experience in the memory buffer
        agent.store_episode(current_state, action, reward, next_state, done)

        # if the episode is ended, we leave the loop after
        # updating the exploration probability
        if done:
            agent.update_exploration_probability()
            break
        current_state = next_state
    # if the have at least batch_size experiences in the memory buffer
    # than we tain our model
if total_steps >= agent.batch_size:
    print('memory_buffer: %d' % len(agent.memory_buffer))
    agent.train()


from gym import wrappers
def make_video():
    env_to_wrap = gym.make('CartPole-v1')
    env = wrappers.Monitor(env_to_wrap, 'videos', force = True)
    rewards = 0
    steps = 0
    done = False
    state = env.reset()
    state = np.array([state])
    while not done:
        action = agent.compute_action(state)
        state, reward, done, _ = env.step(action)
        state = np.array([state])
        steps += 1
        rewards += reward
    print(rewards)
    #env.close()
    #env_to_wrap.close()
make_video()
