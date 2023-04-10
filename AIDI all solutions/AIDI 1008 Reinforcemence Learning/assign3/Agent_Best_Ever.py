import random
from os.path import isfile
import numpy as np
import gym
from abc import ABC, abstractmethod
from collections import defaultdict, namedtuple, deque
import matplotlib.pyplot as plt
from keras import Sequential, Input
from keras.activations import relu, linear
from keras.layers import Dense, Dropout
from keras.losses import mse, huber_loss
import tensorflow as tf
from keras.optimizers import Adam
from scipy.stats import norm
import math
import json
import seaborn as sns
import pandas as pd
from itertools import count
import torch
import matplotlib
import gym
from gym import logger as gymlogger
gymlogger.set_level(40) #error only
import tensorflow as tf
import numpy as np
import random
import matplotlib
import matplotlib.pyplot as plt
import math
import glob
import io
import base64
from IPython.display import HTML
from IPython import display as ipythondisplay

from gym.wrappers.monitoring.video_recorder import VideoRecorder
from keras import Sequential, Input
from keras.activations import relu, linear
from keras.layers import Dense, Dropout
from keras.losses import mse, huber_loss
from itertools import count
from keras.optimizers import Adam
import numpy as np
import gym
from IPython.display import HTML
from IPython import display as ipythondisplay
import gym
from gym import logger as gymlogger
gymlogger.set_level(40) #error only
import tensorflow as tf
import numpy as np
import random
import matplotlib
import matplotlib.pyplot as plt
%matplotlib inline
import math
import glob
import io
import base64
from IPython.display import HTML
from IPython import display as ipythondisplay
from gym.wrappers.monitoring.video_recorder import VideoRecorder


def show_video():
    mp4list = glob.glob('video/*.mp4')
    if len(mp4list) > 0:
        mp4 = mp4list[-1]
        video = io.open(mp4, 'r+b').read()
        encoded = base64.b64encode(video)
        ipythondisplay.display(HTML(data='''<video alt="test" autoplay 
                controls style="height: 400px;">
                <source src="data:video/mp4;base64,{0}" type="video/mp4" />
             </video>'''.format(encoded.decode('ascii'))))
    else:
        print("Could not find video")


class Env:
    def __init__(self, new_step_api=True):
        self.name = 'CartPole-v1'
        self._env = gym.make(self.name)
        self.new_step_api = True
        pass

    def render(self, mode='rgb_array'):
        self._env.render(mode=mode)

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


dnn = Sequential([
    Input(shape=(4,)),
    Dense(128, activation=relu),
    Dense(128, activation=relu),
    Dense(2, activation=linear)
])
dnn.compile(loss=mse, optimizer=Adam(learning_rate=1.0e-4))
dnn._name = "agent_best_ever"
dnn.load_weights(workspace + "/policy4_500/target_net/")

env = Env()
rec = VideoRecorder(env._env, path="./video/vid.mp4")
for episode in range(10):
    s = env.reset()
    for step in count():
        s, _, done, trunc = env.step(np.argmax(dnn(s)))
        rec.capture_frame()
        if done or trunc:
            print("[%d/%d]: steps %d" % (episode + 1, 10, step + 1))
            break
rec.close()
show_video()
