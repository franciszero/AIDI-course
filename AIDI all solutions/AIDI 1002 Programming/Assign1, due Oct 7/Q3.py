import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.datasets import load_digits
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.feature_selection import SelectKBest, chi2, mutual_info_classif, mutual_info_regression, VarianceThreshold
from sklearn.preprocessing import LabelEncoder, StandardScaler, MinMaxScaler


class Q3:
    def __init__(self):
        # melb_data.csv
        self.df = pd.read_csv('./data/melb_data.csv')

    def __label_encoding(self, c):
        self.df[c] = LabelEncoder().fit_transform(self.df[c])

    def label_encoding(self):
        self.__label_encoding('Suburb')
        self.__label_encoding('Address')
        self.__label_encoding('Type')
        self.__label_encoding('Method')
        self.__label_encoding('SellerG')
        self.__label_encoding('CouncilArea')
        self.__label_encoding('Regionname')

    def handle_nan(self):
        self.df['Car'] = self.df['Car'].fillna(0)
        self.df = self.df.dropna()

    def extract_date(self):
        self.df['sale_year'] = pd.to_datetime(self.df["Date"]).apply(lambda x: x.year)
        self.df['sale_month'] = pd.to_datetime(self.df["Date"]).apply(lambda x: x.month)
        self.df['sale_day'] = pd.to_datetime(self.df["Date"]).apply(lambda x: x.day)
        self.df['sale_week'] = pd.to_datetime(self.df["Date"]).apply(lambda x: x.week)
        self.df = self.df.drop('Date', axis=1)

    def scaling(self, f, c, action=None, plot=False):
        tmp = f[[c]]
        if action == 'log':
            tmp = np.log(tmp + 1)
            color = 'r'
        elif action == 'minmax':
            tmp = MinMaxScaler().fit_transform(tmp)
            color = 'g'
        elif action == 'standard':
            tmp = StandardScaler().fit_transform(tmp)
            color = 'b'
        else:
            color = 'k'

        if plot:
            plt.figure(figsize=(7, 2), dpi=70)
            sns.histplot(tmp, kde=True, color=color)
            plt.title("\"%s\" scaling:%s, (%.2f, %.2f)" % (c, action, tmp.min(), tmp.max()))
            plt.show()
        f[c] = tmp
        return f

    def chi_square_test(self, X, y, printed=False):
        skb = SelectKBest(chi2, k=len(X.columns))
        skb.fit(X.to_numpy(), y.to_numpy())
        return self.feature_importance_report(X, skb.scores_, printed)

    def variance_threshold(self, X, printed=False):
        selector = VarianceThreshold()
        selector.fit(X)
        return self.feature_importance_report(X, selector.variances_, printed)

    def mutual_information_classification(self, X, y, printed=False):
        mi_score = mutual_info_classif(X.to_numpy(), y.to_numpy())
        return self.feature_importance_report(X, mi_score, printed)

    def mutual_information_regression(self, X, y, printed=False):
        mi_score = mutual_info_regression(X.to_numpy(), y.to_numpy())
        return self.feature_importance_report(X, mi_score, printed)

    def random_forest_feature_importance(self, X, y):
        clf = RandomForestRegressor(n_estimators=50)
        clf.fit(X, y)
        return self.feature_importance_report(X, clf.feature_importances_)

    def feature_importance_report(self, X, scores, printed=False):
        scores_df = pd.DataFrame(X.columns, columns=['name'])
        scores_df['scores'] = scores
        scores_df = scores_df.sort_values(['scores'], ascending=False).reset_index(drop=True, inplace=False)
        if printed:
            print("%25s\t%15s" % ('colume', 'score'))
            for i, col in enumerate(scores_df['name']):
                print("%25s\t%15s" % (col, "%.3f" % scores_df['scores'][i]))
        return scores_df

    def feature_importance_compare_visualization(self):
        df_chi2 = self.chi_square_test(dfx, dfy)
        df_chi2 = self.scaling(df_chi2, 'scores', action='minmax', plot=False)
        df_chi2['selector'] = 'chi_square'
        df_mir = self.mutual_information_regression(dfx, dfy)
        df_mir = self.scaling(df_mir, 'scores', action='minmax', plot=False)
        df_mir['selector'] = 'mutual information'
        df_rf = self.random_forest_feature_importance(dfx, dfy)
        df_rf = self.scaling(df_rf, 'scores', action='minmax', plot=False)
        df_rf['selector'] = 'Random Forest feature importance'
        df_feature_important_report = pd.concat([df_mir, df_rf, df_chi2], axis=0)
        sns.set(rc={'figure.figsize': (20, 10)})
        locs, labels = plt.xticks()
        plt.setp(labels, rotation=45)
        sns.barplot(data=df_feature_important_report, x="name", y="scores", hue="selector")
        plt.show()

    def heatmap(self, X):
        plt.figure(figsize=(10, 8), dpi=80)
        corr = X.corr()
        mask = np.zeros_like(corr)
        mask[np.triu_indices_from(mask)] = True
        sns.heatmap(corr, mask=mask, cmap="viridis")


if __name__ == '__main__':
    foo = Q3()
    foo.label_encoding()
    foo.handle_nan()
    foo.extract_date()

    dfx = foo.df.drop('Price', axis=1)
    for _, c in enumerate(dfx.columns):
        dfx = foo.scaling(dfx, c, action='minmax', plot=False)

    foo.scaling(foo.df, 'Price', action='log', plot=False)
    foo.scaling(foo.df, 'Price', action='minmax', plot=False)
    dfy = foo.df['Price']

    df_chi2 = foo.chi_square_test(dfx, dfy)
    df_chi2 = foo.scaling(df_chi2, 'scores', action='minmax', plot=False)
    df_chi2['selector'] = 'chi_square'
    pass
