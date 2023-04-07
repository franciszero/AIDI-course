import pandas as pd

from QAgent import QAgent
from Environment import EnvCartPole

# train agent1
env = EnvCartPole(discrete_base=8, new_step_api=False)
agent1 = QAgent(env, n_episodes=300, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=1, )
cp1 = "policy1"
agent1.run(checkpoint_name=cp1, new_r=False)
agent1.visualization()

# train agent2
env = EnvCartPole(discrete_base=8, new_step_api=False)
agent2 = QAgent(env, n_episodes=300, n_steps=1000, gamma=0.99, alpha=0.5, epsilon=None,
                epsilon_start=0.5, epsilon_end=0.0001, epsilon_decay=1.0e+04, )
cp2 = "policy2"
agent2.run(checkpoint_name=cp2, new_r=False)
agent2.visualization()

# test agent1+agent2
agent1 = QAgent(env, n_episodes=1000, epsilon=1)
test1 = agent1.test(checkpoint_name=cp1, new_r=False)

agent2 = QAgent(env, n_episodes=1000, epsilon=None)
test2 = agent2.test(checkpoint_name=cp2, new_r=False)

# plot and compare them
df = pd.DataFrame({"Random Baseline": test1[-1000:], "Smart Agent": test2[-1000:]})
df = df.stack().reset_index()
df.columns = ["x", "hue", "y"]

agent2.visualization(last_n_steps=-1000, outside_df=df)
