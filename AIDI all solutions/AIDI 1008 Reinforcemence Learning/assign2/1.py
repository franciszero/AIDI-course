import numpy as np
import gymnasium as gym
import time
import seaborn as sns
from matplotlib import pyplot as plt
import pandas as pd


class Foo:
    def __init__(self):
        self.g = gym.make('FrozenLake-v1', desc=None, map_name="4x4", is_slippery=False, render_mode="human")
        self.g.reset()
        self.theta = 0.01  # error threshold
        self.gamma = 1  # discord factor
        self.S = np.zeros(16)  # save the state values in a matrix
        self.Pie = np.zeros(16)  # action_space in a policy matrix
        pass

    def get_accum(self, current_state):
        action_space = self.g.P[current_state]  # scan for all the actions
        vs2 = 0
        for j, (action, x) in enumerate(action_space.items()):  # accumulation(p(a|s) * p(s',r|s,a) * [r+gV(s')])
            p = 1 / len(action_space)  # P(a|s)
            (trans_prob, next_state, reward, is_terminal_state) = x[0]  # extract variables
            vs2 += p * 1 * (reward + self.gamma * self.S[next_state])  # P(a|s) * p(s',r|s,a) * [r+gV(s')]
            # print('p(s\'=%d|s=%d,a=%d) = %.1f, vs2=%.2f' % (next_state, current_state, action, prob['prob'], vs2))
        return vs2

    def policy_iter(self):  # implementation of Iterative Policy Evaluation, for estimating V = v(pie)
        max_iter = 100  # prevent from a dead loop
        for i in range(max_iter):  # ---------------------------------------------   Loop:
            print('iter=%d, ' % i, end='')
            delta = 0  # current error -------------------------------------------      delta <- 0
            for current_state in range(self.g.observation_space.n):  # -----------      loop for each s belongs to S
                vs1 = self.S[current_state]  # -----------------------------------         v <- V(s)
                vs2 = self.get_accum(current_state)  # ---------------------------         V(s) <- sigma(p(a|s) * p(s',r|s,a) * [r+gV(s')])
                delta = max(np.fabs(vs1 - vs2), delta)  # ------------------------      delta <- max(delta, abs(vs1-vs2))
                self.S[current_state] = vs2  # update state value
            if delta < self.theta:  # --------------------------------------------   until delta < theta
                print('converge at i=%d, delta=%f\n' % (i, delta))
                break
            else:
                print('continue')
        pass

    def get_argmax_pa(self, current_state):
        # a = argmax(r + gV(s')|s',r)
        action_space = self.g.P[current_state]  # scan for all the actions
        tmp = np.zeros(4)
        for j, (action, x) in enumerate(action_space.items()):  # argmax(p(a|s) * p(s',r|s,a) * [r+gV(s')])
            (trans_prob, next_state, reward, is_terminal_state) = x[0]  # extract variables
            tmp[action] = reward + self.gamma * self.S[next_state]
        return np.argmax(tmp)  # r + gV(s')

    def policy_improvement(self, visual=True):
        max_iter = 10  # prevent from a dead loop
        for i in range(max_iter):
            policy_stable = True
            for current_state in range(self.g.observation_space.n):  # -------------    for each s belongs to S:
                old_action_policy = self.Pie[current_state]  # ---------------------       old-action <- pie(s)
                self.Pie[current_state] = self.get_argmax_pa(current_state)  # -----       pie(s) <- argmax(sigma(p(s',r|s,a) * [r+gV(s')]))
                if old_action_policy != self.Pie[current_state]:  # ----------------       if old-action != pie(s), then
                    policy_stable = False  # ---------------------------------------          policy-stable <- false
            if policy_stable:  # ---------------------------------------------------    if policy-stable, then
                print('policy stable')
                break  # -----------------------------------------------------------       return V = v*
            else:  # ---------------------------------------------------------------    else:
                print('policy improving')
                self.policy_iter()  # ----------------------------------------------       go to 2 (improve it)
        if visual:
            self.post_processing()  # this is improved V and Pai
        pass

    def get_max_vs(self, current_state):
        action_space = self.g.P[current_state]  # scan for all the actions
        tmp = np.zeros(4)
        for j, (action, x) in enumerate(action_space.items()):  # argmax(p(a|s) * p(s',r|s,a) * [r+gV(s')])
            (trans_prob, next_state, reward, is_terminal_state) = x[0]  # extract variables
            tmp[action] = reward + self.gamma * self.S[next_state]
        vs2 = max(tmp)  # V(s) <-- max(a)
        return vs2

    def value_iter(self, visual=True):
        max_iter = 20  # prevent from a dead loop
        for i in range(max_iter):  # ----------------------------------------------   loop:
            print('iter=%d, ' % i, end='')
            delta = 0  # delta init  # --------------------------------------------      delta <= 0
            for current_state in range(self.g.observation_space.n):  # -----------------      for each s belongs to S:
                vs1 = self.S[current_state]  # v <- V(s)  # -----------------------         v <- V(s)
                vs2 = self.get_max_vs(current_state)  # ---------------------------         V(s) <- max(sigma(p(s',r|s,a) * [r+gV(s')]))
                delta = max(np.fabs(vs1 - vs2), delta)  # -------------------------         delta <- max(delta, abs(vs1-vs2))
                self.S[current_state] = vs2  # update state value
            if delta < self.theta:  # ---------------------------------------------   until delta < theta
                print('converge at i=%d, delta=%f\n' % (i, delta))
                break
            else:
                print('continue')
        for current_state in range(self.g.observation_space.n):  # ----------------   output a deterministic policy pie*, such that
            self.Pie[current_state] = self.get_argmax_pa(current_state)  # --------      pie(s) = argmax(sigma(p(s',r|s,a) * [r+gV(s')]))
        if visual:
            self.post_processing()  # this is improved V and Pai
        pass

    def policy_iter(self):
        max_iter = 10
        for i in range(max_iter):
            print('iter=%d' % i, end='')
            delta = 0
            for current_state in range(self.g.observation_space.n):  # for all s in S
                vs1 = self.S[current_state]  # v <- V(s)
                action_space = self.g.P[current_state]  # scan for all the actions
                vs2 = 0
                for j, (action, x) in enumerate(action_space.items()):  # sigma(p(a|s) * p(s',r|s,a) * [r+gV(s')])
                    p = 1 / len(action_space)  # P(a|s)
                    (trans_prob, next_state, reward, is_terminal_state) = x[0]  # extract variables
                    vs2 += p * 1 * (reward + self.gamma * self.S[next_state])  # P(a|s) * p(s',r|s,a) * [r+gV(s')]
                    # print('p(s\'=%d|s=%d,a=%d) = %.1f, vs2=%.2f' % (next_state, current_state, action, prob['prob'], vs2))
                delta = max(np.fabs(vs1 - vs2), delta)
                self.S[current_state] = vs2
            if delta < self.theta:
                print('converge at i=%d, delta=%f\n' % (i, delta))
                break
            else:
                print('continue\n')
        pass

    def policy_improvement(self, visual=True):
        max_iter = 10
        for i in range(max_iter):
            policy_stable = True
            for current_state in range(self.g.observation_space.n):  # for all s in S
                old_action_policy = self.Pie[current_state]
                # a = argmax(r + gV(s')|s',r)
                action_space = self.g.P[current_state]  # scan for all the actions
                tmp = np.zeros(4)
                for j, (action, x) in enumerate(action_space.items()):  # argmax(p(a|s) * p(s',r|s,a) * [r+gV(s')])
                    (trans_prob, next_state, reward, is_terminal_state) = x[0]  # extract variables
                    tmp[action] = reward + self.gamma * self.S[next_state]
                new_action_policy = np.argmax(tmp)  # r + gV(s')
                self.Pie[current_state] = new_action_policy
                if old_action_policy != new_action_policy:
                    policy_stable = False
            if policy_stable:
                print('policy stable')
                break
            else:
                print('policy improving')
                self.policy_iter()  # improve it
        if visual:
            self.post_processing()  # this is improved V and Pai
        pass

    def value_iter(self):
        max_iter = 20
        for i in range(max_iter):
            print('iter=%d, ' % i, end='')
            delta = 0  # delta init
            for current_state in range(self.g.observation_space.n):  # for all s in S
                vs1 = self.S[current_state]  # v <- V(s)
                action_space = self.g.P[current_state]  # scan for all the actions
                tmp = np.zeros(4)
                for j, (action, x) in enumerate(action_space.items()):  # argmax(p(a|s) * p(s',r|s,a) * [r+gV(s')])
                    (trans_prob, next_state, reward, is_terminal_state) = x[0]  # extract variables
                    tmp[action] = reward + self.gamma * self.S[next_state]
                vs2 = max(tmp)  # V(s) <-- max(a)
                delta = max(np.fabs(vs1 - vs2), delta)  # update delta for all states
                self.S[current_state] = vs2  # update state value
            if delta < self.theta:
                print('converge at i=%d, delta=%f\n' % (i, delta))
                break
            else:
                print('continue')

        # output a deterministic policy pie*
        for current_state in range(self.g.observation_space.n):  # for all s in S
            action_space = self.g.P[current_state]  # scan for all the actions
            tmp = np.zeros(4)
            for j, (action, x) in enumerate(action_space.items()):  # argmax(p(a|s) * p(s',r|s,a) * [r+gV(s')])
                (trans_prob, next_state, reward, is_terminal_state) = x[0]  # extract variables
                tmp[action] = reward + self.gamma * self.S[next_state]
            self.Pie[current_state] = np.argmax(tmp)  # r + gV(s')
        pass

    def post_processing(self):
        arr = self.S.reshape(-1, 4)
        df = pd.DataFrame(arr)  # turn 2-d array to dataframe
        fig, ax = plt.subplots(figsize=(4, 3))  # figure size
        sns.heatmap(df, annot=True)  # display both color and value

        arr = self.Pie.reshape(-1, 4)
        df = pd.DataFrame(arr)  # turn 2-d array to dataframe
        fig, ax = plt.subplots(figsize=(4, 3))  # figure size
        sns.heatmap(df, annot=True)  # display both color and value
        pass

    def play(self):
        self.g.reset()  # Resets the environment to an initial state, required before calling step. Returns the first agent observation for an episode and information, i.e. metrics, debug info.
        self.g.render()  # Renders the environments to help visualise what the agent see, examples modes are “human”, “rgb_array”, “ansi” for text.

        s = 0
        is_terminated = False
        while not is_terminated:
            a = int(self.Pie[s])
            (s, reward, is_terminated, truncated, prob) = self.g.step(a)
            time.sleep(1)
        pass


foo = Foo()
print('#############################################################')
print('## Training  Agent with policy iteration ####################')
print('#############################################################')
foo.policy_improvement(visual=False)
print('#############################################################')
print('## Playing FrozenLake with trainedpolicy ####################')
print('#############################################################')
foo.play()

print('## Reset the game ###########################################')

foo = Foo()
print('#############################################################')
print('## Training  Agent with policy iteration ####################')
print('#############################################################')
foo.value_iter()
print('#############################################################')
print('## Playing FrozenLake with trainedpolicy ####################')
print('#############################################################')
foo.play()
