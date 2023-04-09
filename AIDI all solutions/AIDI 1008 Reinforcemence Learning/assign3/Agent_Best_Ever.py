from keras import Sequential, Input
from keras.activations import relu, linear
from keras.layers import Dense, Dropout
from keras.losses import mse, huber_loss
from itertools import count
from keras.optimizers import Adam
import numpy as np
import gym


class Env:
    def __init__(self, new_step_api=True):
        self._env = gym.make("CartPole-v1")
        self.new_step_api = True
        pass

    def render(self):
        self._env.render()

    def step(self, action):
        if self.new_step_api:
            s_, r, terminated, truncated = self._env.step(action)[:4]
            if len(truncated.items()) > 1:
                print('Unexpected [truncated] response.')
            if isinstance(truncated, dict):
                try:
                    truncated = truncated.get("TimeLimit.truncated")
                except Exception as e:
                    print('Failed to access key [TimeLimit.truncated], reset truncated as False. Error msg:')
                    print(str(e))
                    truncated = False
        else:
            s_, r, terminated = self._env.step(action)[:3]
            truncated = False

        s_ = np.array([s_])
        return s_, r, terminated, truncated

    def reset(self):
        s = self._env.reset()
        if isinstance(s[1], dict) and isinstance(s[0], np.ndarray):
            return np.array([s[0]])
        else:
            return np.array([s])


if __name__ == '__main__':
    dnn = Sequential([
        Input(shape=(4,)),
        Dense(128, activation=relu),
        Dense(128, activation=relu),
        Dense(2, activation=linear)
    ])
    dnn.compile(loss=mse, optimizer=Adam(learning_rate=1.0e-4))
    dnn._name = "agent_best_ever"
    dnn.load_weights("policy4_500/target_net/")

    try:
        env = Env(new_step_api=True)
    except Exception:
        env = Env()
    for episode in range(1, 11):
        s = env.reset()
        for step in count():
            a = np.argmax(dnn(s))
            env.render()
            s, _, done, trunc = env.step(a)
            if done or trunc:
                print("[%d/%d]: steps %d" % (episode, 10, step + 1))
                break

    i = 0
