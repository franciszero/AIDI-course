import numpy as np
import gym
from keras import Sequential, Input
from keras.models import Sequential
from keras.layers import Dense, Activation, Flatten
from keras.optimizers import Adam
from rl.agents.dqn import DQNAgent
from rl.policy import BoltzmannQPolicy, Policy
from rl.memory import SequentialMemory
from rl.policy import BoltzmannQPolicy, GreedyQPolicy
from rl.agents.dqn import DQNAgent as KerasDQN

# GitHub 实现
# https://github.com/keras-rl/keras-rl/blob/master/examples/dqn_cartpole.py
# Keras-RL 官方 doc
# https://keras-rl.readthedocs.io/en/latest/agents/dqn/
# 然后点 source 可以看到官方文档 Agent 类的内部实现
# https://github.com/keras-rl/keras-rl/blob/master/rl/agents/dqn.py#L89


# Get the environment and extract the number of actions.
env = gym.make('CartPole-v1')
np.random.seed(123)
env.seed(123)
nb_actions = env.action_space.n

model = Sequential()
model.add(Dense(20, activation='relu', input_shape=(1, 4)))
model.add(Dense(20, activation='relu'))
model.add(Dense(2, activation='linear'))
model.add(Flatten())
print(model.summary())

class RandomQPolicy(Policy):
    """Implement the random policy
    Random policy returns a random action
    """
    def select_action(self, q_values):
        assert q_values.ndim == 1
        action = np.random.randint(0, 1)
        return action

policy_random = RandomQPolicy()
policy_greedy = GreedyQPolicy()

memory = SequentialMemory(limit=50000, window_length=1)
policy = BoltzmannQPolicy()
dqn = KerasDQN(model=model, nb_actions=2, memory=memory, nb_steps_warmup=10, target_model_update=1e-2, policy=policy)
dqn.compile(Adam(lr=1e-3), metrics=['mae'])

trains = dqn.fit(env, nb_steps=1000, visualize=False, verbose=2)
tests = dqn.test(env, nb_episodes=5, visualize=False)

dqn.save_weights('dqn_{}_weights.h5f'.format("CartPole-v1"), overwrite=True)





