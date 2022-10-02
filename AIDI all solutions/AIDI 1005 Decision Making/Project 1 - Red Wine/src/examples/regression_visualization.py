import numpy as np
import matplotlib.pyplot as plt

# 2.1.3 Python 实现
# 我们利用 Python 简单实现一下 θ \thetaθ 以及回归方程的计算，首先方程 y = 4 + 3 × x y=4+3\times xy=4+3×x生成 100 个数据点并可视化：
# ————————————————
# 版权声明：本文为CSDN博主「X1AO___X1A」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
# 原文链接：https://blog.csdn.net/weixin_45488228/article/details/99345417

X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

plt.plot(X, y, "b.")
plt.xlabel("$x_1$", fontsize=18)
plt.ylabel("$y$", rotation=0, fontsize=18)
plt.axis([0, 2, 0, 15])
plt.show()

X_b = np.c_[np.ones((100, 1)), X]  # 向量形式下 x 的输入为 (x, 1)
theta = np.linalg.inv(X_b.T.dot(X_b)).dot(X_b.T).dot(y)

X_new = np.array([[0], [2]])
X_new_b = np.c_[np.ones((2, 1)), X_new]  # add x0 = 1 to each instance
y_predict = X_new_b.dot(theta)

plt.plot(X_new, y_predict, "r-")
plt.plot(X, y, "b.")
plt.axis([0, 2, 0, 15])
plt.show()

# # 3. Sklearn 实现
# # 我们将使用线性回归根据体质指数 (BMI) 预测预期寿命。
# #
# # 对于线性模型，我们将使用 sklearn.linear_model.LinearRegression 类（Sklearn 官方文档）。
# #
# # 我们将使用线性回归模型对数据进行拟合并画出拟合直线。
# # ————————————————
# # 版权声明：本文为CSDN博主「X1AO___X1A」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
# # 原文链接：https://blog.csdn.net/weixin_45488228/article/details/99345417
# import numpy as np
# import pandas as pd
# import matplotlib.pyplot as plt
# from sklearn.linear_model import LinearRegression
#
# bmi_life_data = pd.read_csv("data/bmi_and_life_expectancy.csv")
#
# bmi_life_model = LinearRegression()
# bmi_life_model.fit(bmi_life_data[['BMI']], bmi_life_data[['BMI']])
#
# y_1 = bmi_life_model.predict(np.array(min(bmi_life_data['BMI'])).reshape(-1, 1))
# y_2 = bmi_life_model.predict(np.array(max(bmi_life_data['BMI'])).reshape(-1, 1))
#
# y_1 = y_1.tolist()
# y_1 = [y for x in y_1 for y in x]
#
# y_2 = y_2.tolist()
# y_2 = [y for x in y_2 for y in x]
#
# plt.plot(bmi_life_data['BMI'], bmi_life_data['BMI'], 'b.')
# plt.plot([min(bmi_life_data['BMI']), max(bmi_life_data['BMI'])], [y_1, y_2], "r-")
# plt.xlabel("BMI")
# plt.ylabel('life_expectancy')
# plt.show()
