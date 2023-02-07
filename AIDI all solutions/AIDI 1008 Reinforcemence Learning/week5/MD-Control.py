import numpy as np
import sys
from collections import defaultdict
from blackjack import BlackjackEnv

env = BlackjackEnv()
epsilon = 0.1
nA = 2


def get_epision_greedy_action_policy(Q, observation):
    # Choose a random action with probability epsilon / nA
    A = np.ones(nA, dtype=float) * epsilon / nA

    # Get the action values corresponding to the observation(action_values = Q[observation]) & then Get the greedy/best action
    best_action = np.argmax(Q[observation])

    # Choose the greedy action with probability (1 - epsilon)
    A[best_action] += (1.0 - epsilon)

    # return the probability scores for each action
    return A


# This generates the episode by following the epsilon greedy policy
def generate_episode(Q):
    episode = []
    # print("episode : " + str(episode))
    current_state = env.reset()
    while (True):
        # The optimal policy to be returned
        prob_scores = get_epision_greedy_action_policy(Q, current_state)
        # sample the action from the epsilon greedy policy
        action = np.random.choice(np.arange(len(prob_scores)), p=prob_scores)  # 0 or 1
        # perform the action in the environment
        next_state, reward, done, _ = env.step(action)
        s1, s2, ace = next_state
        # print("score %d:%d, ace[%s], action[%d], reward[%d], done = %s" % (s1, s2, str(ace), action, reward, done))
        episode.append((current_state, action, reward))
        if done:
            break
        # update the current state
        current_state = next_state
    return episode


def mc_control_epsilon_greedy(total_episodes):
    returns_sum = defaultdict(float)
    ## store the number of times each state is visited
    states_count = defaultdict(float)
    ## Action Value function to be returned
    # where Number of actions = env.action_space.n
    Q = defaultdict(lambda: np.zeros(env.action_space.n))
    for k in range(total_episodes):
        episode = generate_episode(Q)
        # print("episode : " + str(episode))
        state_actions_in_episode = list(set([(sar[0], sar[1]) for sar in episode]))  # sar : state action reward
        for i, sa_pair in enumerate(state_actions_in_episode):
            state, action = sa_pair
            G = sum([sar[2] for i, sar in enumerate(episode[i:])])
            # print("G : " + str(G))
            # Taking the means of episodes to calculate mean values
            returns_sum[sa_pair] += G
            # print("%s, %d" % (str(sa_pair), G))
            states_count[sa_pair] += 1.0
            Q[state][action] = returns_sum[sa_pair] / states_count[sa_pair]
            # if state == (16, 10, False):
            #     print("episode : " + str(episode))
            #     print("state[%s] take action %s, " % (str(state), action), end='')
            #     print("got action value Q: %d/%d=%.2f, " % (returns_sum[sa_pair], states_count[sa_pair], Q[state][action], ), end='')
            #     print("and Got action state-space as [%s]" % (Q[state]), end='')
            #     print("")

    return Q

# Connected to pydev debugger (build 222.3739.56)
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -1/1=-1.00, and Got action state-space as [[-1.  0.]]
# episode : [((16, 10, False), 1, 0), ((19, 10, False), 0, -1)]
# state[(16, 10, False)] take action 1, got action value Q: -1/1=-1.00, and Got action state-space as [[-1. -1.]]
# episode : [((16, 10, False), 0, 1)]
# state[(16, 10, False)] take action 0, got action value Q: 0/2=0.00, and Got action state-space as [[ 0. -1.]]
# episode : [((16, 10, False), 0, 1)]
# state[(16, 10, False)] take action 0, got action value Q: 1/3=0.33, and Got action state-space as [[ 0.33333333 -1.        ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: 0/4=0.00, and Got action state-space as [[ 0. -1.]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -1/5=-0.20, and Got action state-space as [[-0.2 -1. ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -2/6=-0.33, and Got action state-space as [[-0.33333333 -1.        ]]
# episode : [((16, 10, False), 0, 1)]
# state[(16, 10, False)] take action 0, got action value Q: -1/7=-0.14, and Got action state-space as [[-0.14285714 -1.        ]]
# episode : [((16, 10, False), 0, 1)]
# state[(16, 10, False)] take action 0, got action value Q: 0/8=0.00, and Got action state-space as [[ 0. -1.]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -1/9=-0.11, and Got action state-space as [[-0.11111111 -1.        ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -2/10=-0.20, and Got action state-space as [[-0.2 -1. ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -3/11=-0.27, and Got action state-space as [[-0.27272727 -1.        ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -4/12=-0.33, and Got action state-space as [[-0.33333333 -1.        ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -5/13=-0.38, and Got action state-space as [[-0.38461538 -1.        ]]
# episode : [((16, 10, False), 0, 1)]
# state[(16, 10, False)] take action 0, got action value Q: -4/14=-0.29, and Got action state-space as [[-0.28571429 -1.        ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -5/15=-0.33, and Got action state-space as [[-0.33333333 -1.        ]]
# episode : [((12, 10, False), 1, 0), ((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -6/16=-0.38, and Got action state-space as [[-0.375 -1.   ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -7/17=-0.41, and Got action state-space as [[-0.41176471 -1.        ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -8/18=-0.44, and Got action state-space as [[-0.44444444 -1.        ]]
# episode : [((14, 10, False), 1, 0), ((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -9/19=-0.47, and Got action state-space as [[-0.47368421 -1.        ]]
# episode : [((16, 10, False), 0, -1)]
# state[(16, 10, False)] take action 0, got action value Q: -10/20=-0.50, and Got action state-space as [[-0.5 -1. ]]
result = mc_control_epsilon_greedy(50000)

i = None
