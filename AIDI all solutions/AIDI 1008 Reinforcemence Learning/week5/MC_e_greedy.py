import numpy as np
import sys
from collections import defaultdict
from blackjack import BlackjackEnv

env = BlackjackEnv()

epsilon = 0.1
nA = 2
np.ones(nA, dtype=float) * epsilon / nA
Q = defaultdict(lambda: np.zeros(env.action_space.n))


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
    current_state = env.reset()

    while (True):

        # The optimal policy to be returned
        prob_scores = get_epision_greedy_action_policy(Q, current_state)

        # sample the action from the epsilon greedy policy
        action = np.random.choice(np.arange(len(prob_scores)), p=prob_scores)  # 0 or 1

        # perform the action in the environment
        next_state, reward, done, _ = env.step(action)
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

        state_actions_in_episode = list(set([(sar[0], sar[1]) for sar in episode]))

        for i, sa_pair in enumerate(state_actions_in_episode):
            state, action = sa_pair

            G = sum([sar[2] for i, sar in enumerate(episode[i:])])

            # Taking the means of episodes to calculate mean values
            returns_sum[sa_pair] += G
            states_count[sa_pair] += 1.0
            Q[state][action] = returns_sum[sa_pair] / states_count[sa_pair]

    return Q


mc_control_epsilon_greedy(1)
