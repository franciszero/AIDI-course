import pandas as pd

from DQNAgent import DQNAgent
from Environment import EnvCartPole

# train agent1
env = EnvCartPole(discrete_base=8, new_step_api=False)
agent3 = DQNAgent(env, n_episodes=20, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=1, )
cp1 = "policy3"
agent3.run(checkpoint_name=cp1, new_r=False)
agent3.visualization()

# # train agent2
# env = EnvCartPole(discrete_base=8, new_step_api=False)
# agent4 = DQNAgent(env, n_episodes=300, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=None,
#                   epsilon_start=0.5, epsilon_end=0.0001, epsilon_decay=1.0e+04, )
# cp2 = "policy4"
# agent4.run(checkpoint_name=cp2, new_r=False)
# agent4.visualization()
#
# # test agent1+agent2
# agent3 = DQNAgent(env, n_episodes=1000, epsilon=1)
# test3 = agent3.test(checkpoint_name=cp1, new_r=False)
#
# agent4 = DQNAgent(env, n_episodes=1000, epsilon=None)
# test4 = agent4.test(checkpoint_name=cp2, new_r=False)
#
# # plot and compare them
# df = pd.DataFrame({"Random Baseline": test3[-1000:], "Smart Agent": test4[-1000:]})
# df = df.stack().reset_index()
# df.columns = ["x", "hue", "y"]
#
# agent4.visualization(last_n_steps=-1000, outside_df=df)
