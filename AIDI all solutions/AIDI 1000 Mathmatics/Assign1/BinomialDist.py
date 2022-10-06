import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy.stats import binom, norm, normaltest, ttest_ind, stats, wilcoxon, mannwhitneyu, chi2_contingency

dt = np.array([93, 94, 89, 88, 78, 89, 76, 98])
lr = np.array([78, 90, 89, 76, 89])
wilcoxon(dt, lr)
mannwhitneyu(dt, lr)

from scipy.stats import binom, norm, normaltest, ttest_ind, stats, wilcoxon, mannwhitneyu, chi2_contingency
chi2_contingency()

def wilcoxon_rank_sign_test(x1, x2):
    return mannwhitneyu(x1, x2)


print(mannwhitneyu(dt, lr, method='exact'))

normaltest(dt)

a, b, c, d = 88.125, 11.875, 84.400, 15.6

e = 200 * pow((a * d - b * c), 2)
f = (a + b) * (c + d) * (a + c) * (b + d)
e / f

ttest_ind(equal_var=False)

i = None

p = 0.5  # probability of heads
k = 4  # observations
n = 6

m = []
for _ in range(100000):
    m.append(np.random.binomial(1, 0.5, 4).sum())
plt.show()

fig = plt.figure(figsize=(10, 10), dpi=50, constrained_layout=True)
ax = fig.add_subplot()
ax.hist(m)
sns.histplot(m, kde=True)
plt.show()

scipy.statsbinom.cdf(20, 70, 107. / 347)
sns.ecdfplot(np.random.binomial(5, 0.4, 2))
pow(p, k) * pow((1 - p), (n - k))

x = np.random.normal(loc=530, scale=110, size=200000)
norm.cdf()
