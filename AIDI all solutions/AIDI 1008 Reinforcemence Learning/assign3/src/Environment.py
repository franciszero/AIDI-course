import numpy as np
import gym
from scipy.stats import norm
import math


class EnvCartPole:
    def __init__(self, discrete_base=10, new_step_api=True):
        self.new_step_api = new_step_api
        if new_step_api:
            self._env = gym.make("CartPole-v1", new_step_api=new_step_api)
        else:
            self._env = gym.make("CartPole-v1")
        self.n_actions = self._env.action_space.n
        self.n_observation_space = self._env.observation_space.shape[0]
        self.base = discrete_base
        pass

    def sample_action(self):
        return self._env.action_space.sample()

    @staticmethod
    def norm_spacing(x, lim, base):
        """
        see example of discretizing:
        for x in np.arange(-base, base, 0.1):
            print("x=%.1f, bin id: %d" % (x, math.ceil(norm.cdf(x / lim * 3) * base) - 1))
        """
        assert (abs(x) <= lim)
        if math.isinf(lim):
            b = math.ceil(norm.cdf(x) * base) - 1
        else:
            b = math.ceil(norm.cdf(x / lim * 3) * base) - 1
        return b if b >= 0 else 0

    def state_discretize(self, s):
        """
        See definition of observation-space:
        https://www.gymlibrary.dev/environments/classic_control/cart_pole/#observation-space
        """
        [Cart_Position, Cart_Velocity, Pole_Angle, Pole_Angular_Velocity] = s
        bins = np.array([
            self.norm_spacing(Cart_Position, 4.8, self.base) * math.pow(self.base, 3),
            self.norm_spacing(Cart_Velocity, np.inf, self.base) * math.pow(self.base, 2),
            self.norm_spacing(Pole_Angle, 0.418, self.base) * math.pow(self.base, 1),
            self.norm_spacing(Pole_Angular_Velocity, np.inf, self.base) * math.pow(self.base, 0),
        ], dtype=int)
        # print("current bin id: ", bins.sum())
        return str(bins.sum())

    def reset(self, discretize=False):
        s = self._env.reset()
        if discretize:
            return self.state_discretize(s)
        else:
            return np.array([s])

    def step(self, a, discretize=False, new_reward=False):
        """
        SEE API definition: https://github.com/openai/gym/blob/master/gym/core.py
        """
        if self.new_step_api:
            s_, r, terminated, truncated = self._env.step(a)[:4]
        else:
            s_, r, terminated = self._env.step(a)[:3]
            truncated = False

        if terminated:
            s_ = None  # delete s_ after a terminate state
        else:
            if discretize:
                s_ = self.state_discretize(s_)  # discretize s_ to a limited state_space
            else:
                s_ = np.array([s_])

        if new_reward:  # instead of the default setting, only a punishment will return when failed, otherwise 0.
            r = -1 if terminated else 0

        return s_, r, terminated, truncated