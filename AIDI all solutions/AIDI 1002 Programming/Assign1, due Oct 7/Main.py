# coding=utf-8
import unicodedata
import warnings

import re
import numpy as np
import pandas as pd
import seaborn as sns
from bs4 import BeautifulSoup
from sklearn.feature_selection import VarianceThreshold, mutual_info_regression, mutual_info_classif, SelectKBest, chi2
from sklearn.preprocessing import LabelEncoder, StandardScaler, MinMaxScaler
from nltk import corpus, RegexpTokenizer, word_tokenize, download, ToktokTokenizer

warnings.filterwarnings("ignore")

pd.set_option('display.max_columns', 20)
pd.set_option('display.width', 1000)


# %matplotlib
# %matplotlib inline

class TextPreprocessing:
    def __init__(self):
        download('punkt')
        self.stopword_list = corpus.stopwords.words('english')
        self.stopword_list.append('nan')  # empty dataframe cell float np.nan
        self.stopword_list.append('oh')
        self.stopword_list.remove('not')

        # see: https://github.com/dipanjanS/practical-machine-learning-with-python/blob/master/bonus%20content/nlp%20proven%20approach/contractions.py
        self.CONTRACTION_MAP = {
            "ain't": "is not",
            "aren't": "are not",
            "can't": "cannot",
            "can't've": "cannot have",
            "'cause": "because",
            "could've": "could have",
            "couldn't": "could not",
            "couldn't've": "could not have",
            "didn't": "did not",
            "doesn't": "does not",
            "don't": "do not",
            "hadn't": "had not",
            "hadn't've": "had not have",
            "hasn't": "has not",
            "haven't": "have not",
            "he'd": "he would",
            "he'd've": "he would have",
            "he'll": "he will",
            "he'll've": "he he will have",
            "he's": "he is",
            "how'd": "how did",
            "how'd'y": "how do you",
            "how'll": "how will",
            "how's": "how is",
            "I'd": "I would",
            "I'd've": "I would have",
            "I'll": "I will",
            "I'll've": "I will have",
            "I'm": "I am",
            "I've": "I have",
            "i'd": "i would",
            "i'd've": "i would have",
            "i'll": "i will",
            "i'll've": "i will have",
            "i'm": "i am",
            "i've": "i have",
            "isn't": "is not",
            "it'd": "it would",
            "it'd've": "it would have",
            "it'll": "it will",
            "it'll've": "it will have",
            "it's": "it is",
            "let's": "let us",
            "ma'am": "madam",
            "mayn't": "may not",
            "might've": "might have",
            "mightn't": "might not",
            "mightn't've": "might not have",
            "must've": "must have",
            "mustn't": "must not",
            "mustn't've": "must not have",
            "needn't": "need not",
            "needn't've": "need not have",
            "o'clock": "of the clock",
            "oughtn't": "ought not",
            "oughtn't've": "ought not have",
            "shan't": "shall not",
            "sha'n't": "shall not",
            "shan't've": "shall not have",
            "she'd": "she would",
            "she'd've": "she would have",
            "she'll": "she will",
            "she'll've": "she will have",
            "she's": "she is",
            "should've": "should have",
            "shouldn't": "should not",
            "shouldn't've": "should not have",
            "so've": "so have",
            "so's": "so as",
            "that'd": "that would",
            "that'd've": "that would have",
            "that's": "that is",
            "there'd": "there would",
            "there'd've": "there would have",
            "there's": "there is",
            "they'd": "they would",
            "they'd've": "they would have",
            "they'll": "they will",
            "they'll've": "they will have",
            "they're": "they are",
            "they've": "they have",
            "to've": "to have",
            "wasn't": "was not",
            "we'd": "we would",
            "we'd've": "we would have",
            "we'll": "we will",
            "we'll've": "we will have",
            "we're": "we are",
            "we've": "we have",
            "weren't": "were not",
            "what'll": "what will",
            "what'll've": "what will have",
            "what're": "what are",
            "what's": "what is",
            "what've": "what have",
            "when's": "when is",
            "when've": "when have",
            "where'd": "where did",
            "where's": "where is",
            "where've": "where have",
            "who'll": "who will",
            "who'll've": "who will have",
            "who's": "who is",
            "who've": "who have",
            "why's": "why is",
            "why've": "why have",
            "will've": "will have",
            "won't": "will not",
            "won't've": "will not have",
            "would've": "would have",
            "wouldn't": "would not",
            "wouldn't've": "would not have",
            "y'all": "you all",
            "y'all'd": "you all would",
            "y'all'd've": "you all would have",
            "y'all're": "you all are",
            "y'all've": "you all have",
            "you'd": "you would",
            "you'd've": "you would have",
            "you'll": "you will",
            "you'll've": "you will have",
            "you're": "you are",
            "you've": "you have"
        }

        self.doc = open("./data/wiki.txt", "r").readlines()
        self.test = "It's Eighty-seven NLP jobs in 1950 ~ 1960s, yet. ,  Onward!"

    def expand_match(self, contraction):
        match = contraction.group(0)
        first_char = match[0]
        expanded_contraction = CONTRACTION_MAP.get(match) \
            if CONTRACTION_MAP.get(match) \
            else CONTRACTION_MAP.get(match.lower())
        expanded_contraction = first_char + expanded_contraction[1:]
        return expanded_contraction

    def process_contraction(self, line):
        contractions_pattern = re.compile('({})'.format('|'.join(self.CONTRACTION_MAP.keys())),
                                          flags=re.IGNORECASE | re.DOTALL)
        return contractions_pattern.sub(self.expand_match, line)

    def remove_punctuations(self, line):
        # remove punctuations
        punctuation = '\[\]\.!,;:?"\''
        return re.sub(r'[{}]+'.format(punctuation), ' ', line)

    def process_ToktokTokenizer(self, line):
        tokenizer = ToktokTokenizer()
        tokens = tokenizer.tokenize(line)
        tokens = [token.strip() for token in tokens]
        return np.array(tokens)

    def remove_stopwords(self, tokens):
        tks = [token for token in tokens if token not in self.stopword_list]
        sws = [token for token in tokens if token in self.stopword_list]
        return np.array(tks), np.array(sws)


foo1 = TextPreprocessing()
tokens1 = []
stopws1 = []
for i, line in enumerate(foo1.doc):
    line = line.lower()
    line = foo1.process_contraction(line)
    line = foo1.remove_punctuations(line)
    t = foo1.process_ToktokTokenizer(line)  # ToktokTokenizer
    token, stopw = foo1.remove_stopwords(t)
    tokens1 = np.append(tokens1, token)
    stopws1 = np.append(stopws1, stopw)

foo2 = TextPreprocessing()
tokens2 = []
stopws2 = []
for i, line in enumerate(foo2.doc):
    line = line.lower()
    line = foo2.process_contraction(line)
    line = foo2.remove_punctuations(line)
    t = words = word_tokenize(line)  # word_tokenizer
    token, stopw = foo2.remove_stopwords(t)
    tokens2 = np.append(tokens2, token)
    stopws2 = np.append(stopws2, stopw)


def compare_results(a1, a2):
    df1 = pd.DataFrame(pd.value_counts(a1))
    df1.rename({0: 'tokens1'}, axis='columns', inplace=True)
    df2 = pd.DataFrame(pd.value_counts(a2))
    df2.rename({0: 'tokens2'}, axis='columns', inplace=True)
    df3 = pd.concat([df1, df2], axis=1)
    df3['diff'] = df3['tokens1'] - df3['tokens2']
    print(df3[df3['diff'] != 0])


compare_results(tokens1, tokens2)

print(pd.value_counts(pd.Series(tokens1)).head(20))
print(pd.value_counts(pd.Series(stopws1)).head(20))
print(pd.value_counts(pd.Series(tokens2)).head(20))
print(pd.value_counts(pd.Series(stopws2)).head(20))


def compare_results(a1, a2):
    df1 = pd.DataFrame(pd.value_counts(a1))
    df1.rename({0: 'tokens1'}, axis='columns', inplace=True)
    df2 = pd.DataFrame(pd.value_counts(a2))
    df2.rename({0: 'tokens2'}, axis='columns', inplace=True)
    df3 = pd.concat([df1, df2], axis=1)
    df3['diff'] = df3['tokens1'] - df3['tokens2']
    return df3

diff_df = compare_results(tokens1, tokens2)
print("differents between tokenizers: %d" % len(diff_df[diff_df['diff'] != 0]['diff']))
diff_df = compare_results(stopws1, stopws2)
print("differents between stopwords: %d" % len(diff_df[diff_df['diff'] != 0]['diff']))





words = [word.lower() for word in words if word.isalpha()]
print(words)

line = process_contraction(test)
print(line)

doc = open("./data/wiki.txt", "r").readlines()

tokenizer = word_tokenize(' ')

line = np.array(doc)[0]

for token in tokenizer.tokenize(doc):
    print(token)

tokenizer = RegexpTokenizer('\w+')

for i, line in enumerate(doc):
    special_char_pattern = re.compile(r'([{.(-)!}])')
    doc = special_char_pattern.sub(" \\1 ", doc)
    print("(%4d/%d)[%15s] %s" % (i + 1, len(doc), 'insert spaces', doc))
    pattern = r'[^a-zA-z\s]'
    doc = re.sub(pattern, '', doc)  # ignore hyphenated english words for now
    print("(%4d/%d)[%15s] %s" % (i + 1, len(doc), 'remove specials', doc))

tokenizer = RegexpTokenizer(r'\w+')
for line in doc:
    tokens1 = [t.lower() for t in tokenizer.tokenize(line)]
    print(line)
    print(tokens1)
    print()


class FeatureSelection:
    def __init__(self):
        self.skb = None

    @staticmethod
    def print_fs(fs):
        print("%17s\t%s\n%17s\t%s\n%17s\t%s\n" %
              ("feature score", fs.scores_,
               "feature pvalues", fs.pvalues_,
               "feature selected", fs.get_support(indices=True))
              )

    # Chi-square Test
    # see: https://www.analyticsvidhya.com/blog/2020/10/feature-selection-techniques-in-machine-learning/
    # The Chi-square src is used for categorical features in a dataset. We calculate Chi-square between each feature and the target and select the desired number of features with the best Chi-square scores. In order to correctly apply the chi-squared in order to src the relation between various features in the dataset and the target variable, the following conditions have to be met: the variables have to be categorical, sampled independently and values should have an expected frequency greater than 5.
    def chi_square_test(self, X, y, k='all'):
        skb = SelectKBest(chi2, k=k)
        skb.fit(X, y)

        df = pd.DataFrame(X.columns, columns=['name'])
        df['scores'] = skb.scores_
        df = df.sort_values(['scores'], ascending=False).reset_index(drop=True, inplace=False)
        print("%25s\t%15s" % ('colume', 'score'))
        for i, col in enumerate(df['name']):
            print("%25s\t%15s" % (col, "%.3f" % df['scores'][i]))
        new_x = skb.transform(X)
        selected_feature_names = df['name'].values[:k]
        return selected_feature_names, new_x

    def mutual_information_classification(self, dfx, dfy):
        X = dfx.to_numpy()
        y = dfy.to_numpy()
        mi_score = mutual_info_classif(X, y)

        df = pd.DataFrame(dfx.columns, columns=['name'])
        df['scores'] = mi_score
        df = df.sort_values(['scores'], ascending=False).reset_index(drop=True, inplace=False)

        print("%25s\t%25s" % ('colume', 'mutual information score'))
        for i, col in enumerate(df['name']):
            print("%25s\t%25s" % (col, "%.3f" % df['scores'][i]))
        return X, y

    def mutual_information_regression(self, dfx, dfy):
        X = dfx.to_numpy()
        y = dfy.to_numpy()
        mi_score = mutual_info_regression(X, y)
        print("%25s\t%25s" % ('colume', 'mutual information score'))
        for i, col in enumerate(dfx.columns):
            print("%25s\t%25s" % (col, "%.3f" % mi_score[i]))
        return X, y

    def variance_threshold(self, dfx):
        selector = VarianceThreshold()
        selector.fit(dfx)
        print("%25s\t%10s" % ('colume', 'variances'))
        for i, col in enumerate(dfx.columns):
            print("%25s\t%10s" % (col, "%.3f" % selector.variances_[i]))
        X = dfx.transform(dfx.to_numpy())
        return X


# def scaling(f, col_idx, action=None, plot=False):
#     c = f.columns[col_idx]
#     tmp = f[[c]]
#     if action == 'log':
#         tmp = np.log(tmp + 1)
#         color = 'r'
#     elif action == 'minmax':
#         tmp = MinMaxScaler().fit_transform(tmp)
#         color = 'g'
#     elif action == 'standard':
#         tmp = StandardScaler().fit_transform(tmp)
#         color = 'b'
#     else:
#         color = 'k'
#
#     if plot:
#         plt.figure(figsize=(7, 2), dpi=100)
#         sns.distplot(tmp, kde=True, color=color)
#         plt.title("\"%s\" scaling:%s, (%.2f, %.2f)" % (c, action, tmp.min(), tmp.max()))
#         plt.show()
#     f[c] = tmp
#     return f
#
#
# df = pd.read_csv('./data/noisy_data.csv')
# df['Income'] = df['Income'].fillna(df['Income'].mean())
# df['Age'] = df['Age'].fillna(df['Age'].mean())
# df.isnull().values.any()
df['Region'] = LabelEncoder().fit_transform(df['Region'])
# df['Online Shopper'] = LabelEncoder().fit_transform(df['Online Shopper'])
#
# i = 0
# df1 = df.copy(deep=True)
# df1 = scaling(df1, i, plot=True)
# df1 = scaling(df1, i, action='minmax', plot=True)
#
# i = None


# other stopwords
# sw_spacy = nlp.Defaults.stop_words
# STOPWORDS

#
# def p(df, i):
#     print(df.loc[i, 'full_text'])
#     print(df.loc[i, 'clean_text'])
#
#
# # SEE:
# # https://www.kdnuggets.com/2018/08/practitioners-guide-processing-understanding-text-2.html
# class TextPreprocessing:
#     def __init__(self):
#         self.df0 = pd.read_csv('./data/wiki.csv', encoding='utf8')
#         pass
#
#     def normalize_corpus(self, size, html_stripping=True, contraction_expansion=True,
#                          accented_char_removal=True, text_lower_case=True,
#                          text_lemmatization=True, special_char_removal=True,
#                          stopword_removal=True, remove_digits=True):
#
#         df = self.df0.head(size).copy(deep=True)
#
#         # combining interesting columns
#         # optional columns: ['show_id', 'type', 'title', 'director', 'cast', 'country', 'date_added',
#         #                   'release_year', 'rating', 'duration', 'listed_in', 'description']
#         df['full_text'] = df["title"].map(str) + '. ' + \
#                           df["director"].map(str) + '. ' + \
#                           df["cast"].map(str) + '. ' + \
#                           df["country"].map(str) + '. ' + \
#                           df["date_added"].map(str) + '. ' + \
#                           df["duration"].map(str) + '. ' + \
#                           df["duration"].map(str) + '. ' + \
#                           df["listed_in"].map(str) + '. ' + \
#                           df["description"].map(str)
#
#         corpus = df['full_text']
#         normalized_corpus = []
#         # normalize each document in the corpus
#         s = len(corpus)
#         for (i, doc) in enumerate(corpus):
#             print("(%4d/%d)[%15s] %s" % (i + 1, s, 'original text', doc))
#
#             # strip HTML structure
#             if html_stripping:
#                 doc = BeautifulSoup(doc, "html.parser").get_text()
#                 print("(%4d/%d)[%15s] %s" % (i + 1, s, 'html stripping', doc))
#
#             # Using dict to expand contractions from we'll, it's to we will, it is, etc.
#             if contraction_expansion:
#                 contractions_pattern = re.compile('({})'.format('|'.join(CONTRACTION_MAP.keys())),
#                                                   flags=re.IGNORECASE | re.DOTALL)
#
#                 def expand_match(contraction):
#                     match = contraction.group(0)
#                     first_char = match[0]
#                     expanded_contraction = CONTRACTION_MAP.get(match) \
#                         if CONTRACTION_MAP.get(match) \
#                         else CONTRACTION_MAP.get(match.lower())
#                     expanded_contraction = first_char + expanded_contraction[1:]
#                     return expanded_contraction
#
#                 doc = contractions_pattern.sub(expand_match, doc)
#                 doc = re.sub("'", "", doc)
#                 print("(%4d/%d)[%15s] %s" % (i + 1, s, 'contractions', doc))
#
#             # remove accented characters
#             if accented_char_removal:
#                 # >> > s1 = 'Spicy Jalape\u00f1o'  # ”ñ”(U+00F1)
#                 # >> > s2 = 'Spicy Jalapen\u0303o'  # ”n~”(U+0303)
#                 # >> > s1
#                 # 'Spicy Jalapeño'
#                 # >> > s2
#                 # 'Spicy Jalapeño'
#                 # >> > s1 == s2
#                 # False
#                 # >> > len(s1)
#                 # 14
#                 # >> > len(s2)
#                 # 15
#                 tmp = unicodedata.normalize('NFKD', doc)  # see: https://en.wikipedia.org/wiki/Unicode_equivalence
#                 # >>> a
#                 # 'pýtĥöñ is awesome\n'
#                 # >>> b = unicodedata.normalize('NFD', a)
#                 # >>> b.encode('ascii', 'ignore').decode('ascii')
#                 # 'python is awesome\n'
#                 doc = tmp.encode('ascii', 'ignore').decode('utf-8', 'ignore')
#                 print("(%4d/%d)[%15s] %s" % (i + 1, s, 'unicode norm', doc))
#
#             # lowercase the text
#             if text_lower_case:
#                 doc = doc.lower()
#                 print("(%4d/%d)[%15s] %s" % (i + 1, s, 'to lower case', doc))
#
#             # remove extra newlines
#             doc = re.sub(r'[\r|\n|\r\n]+', ' ', doc)
#             print("(%4d/%d)[%15s] %s" % (i + 1, s, 'remove \\r\\n', doc))
#
#             # use en_core_web_sm to lemmatize text
#             if text_lemmatization:
#                 tmp = nlp(doc)
#                 doc = ' '.join([word.lemma_ if word.lemma_ != '-PRON-' else word.text for word in tmp])
#                 print("(%4d/%d)[%15s] %s" % (i + 1, s, 'lemmatization', doc))
#
#             # remove special characters and\or digits
#             if special_char_removal:
#                 # insert spaces between special characters to isolate them
#                 special_char_pattern = re.compile(r'([{.(-)!}])')
#                 doc = special_char_pattern.sub(" \\1 ", doc)
#                 print("(%4d/%d)[%15s] %s" % (i + 1, s, 'insert spaces', doc))
#                 pattern = r'[^a-zA-z0-9\s]' if not remove_digits else r'[^a-zA-z\s]'
#                 doc = re.sub(pattern, '', doc)  # ignore hyphenated english words for now
#                 print("(%4d/%d)[%15s] %s" % (i + 1, s, 'remove specials', doc))
#
#             # remove extra whitespace
#             doc = re.sub(' +', ' ', doc)
#             print("(%4d/%d)[%15s] %s" % (i + 1, s, 'remove space', doc))
#
#             # remove stopwords
#             if stopword_removal:
#                 tokens = tokenizer.tokenize(doc)
#                 tokens = [token.strip() for token in tokens]
#                 if text_lower_case:
#                     filtered_tokens = [token for token in tokens if token not in stopword_list]
#                 else:
#                     filtered_tokens = [token for token in tokens if token.lower() not in stopword_list]
#                 doc = ' '.join(filtered_tokens)
#                 print("(%4d/%d)[%15s] %s" % (i + 1, s, 'stopwords', doc))
#
#             normalized_corpus.append(doc)
#             print('\n')
#
#         df['clean_text'] = normalized_corpus
#         path = './data/netflix_titles_normalize_corpus.csv'
#         df.to_csv(path, index=False, encoding='utf-8')
#         print("save to path: %s" % path)
#         return


# https://github.com/dipanjanS/practical-machine-learning-with-python/blob/master/bonus%20content/nlp%20proven%20approach/contractions.py
CONTRACTION_MAP = {
    "ain't": "is not",
    "aren't": "are not",
    "can't": "cannot",
    "can't've": "cannot have",
    "'cause": "because",
    "could've": "could have",
    "couldn't": "could not",
    "couldn't've": "could not have",
    "didn't": "did not",
    "doesn't": "does not",
    "don't": "do not",
    "hadn't": "had not",
    "hadn't've": "had not have",
    "hasn't": "has not",
    "haven't": "have not",
    "he'd": "he would",
    "he'd've": "he would have",
    "he'll": "he will",
    "he'll've": "he he will have",
    "he's": "he is",
    "how'd": "how did",
    "how'd'y": "how do you",
    "how'll": "how will",
    "how's": "how is",
    "I'd": "I would",
    "I'd've": "I would have",
    "I'll": "I will",
    "I'll've": "I will have",
    "I'm": "I am",
    "I've": "I have",
    "i'd": "i would",
    "i'd've": "i would have",
    "i'll": "i will",
    "i'll've": "i will have",
    "i'm": "i am",
    "i've": "i have",
    "isn't": "is not",
    "it'd": "it would",
    "it'd've": "it would have",
    "it'll": "it will",
    "it'll've": "it will have",
    "it's": "it is",
    "let's": "let us",
    "ma'am": "madam",
    "mayn't": "may not",
    "might've": "might have",
    "mightn't": "might not",
    "mightn't've": "might not have",
    "must've": "must have",
    "mustn't": "must not",
    "mustn't've": "must not have",
    "needn't": "need not",
    "needn't've": "need not have",
    "o'clock": "of the clock",
    "oughtn't": "ought not",
    "oughtn't've": "ought not have",
    "shan't": "shall not",
    "sha'n't": "shall not",
    "shan't've": "shall not have",
    "she'd": "she would",
    "she'd've": "she would have",
    "she'll": "she will",
    "she'll've": "she will have",
    "she's": "she is",
    "should've": "should have",
    "shouldn't": "should not",
    "shouldn't've": "should not have",
    "so've": "so have",
    "so's": "so as",
    "that'd": "that would",
    "that'd've": "that would have",
    "that's": "that is",
    "there'd": "there would",
    "there'd've": "there would have",
    "there's": "there is",
    "they'd": "they would",
    "they'd've": "they would have",
    "they'll": "they will",
    "they'll've": "they will have",
    "they're": "they are",
    "they've": "they have",
    "to've": "to have",
    "wasn't": "was not",
    "we'd": "we would",
    "we'd've": "we would have",
    "we'll": "we will",
    "we'll've": "we will have",
    "we're": "we are",
    "we've": "we have",
    "weren't": "were not",
    "what'll": "what will",
    "what'll've": "what will have",
    "what're": "what are",
    "what's": "what is",
    "what've": "what have",
    "when's": "when is",
    "when've": "when have",
    "where'd": "where did",
    "where's": "where is",
    "where've": "where have",
    "who'll": "who will",
    "who'll've": "who will have",
    "who's": "who is",
    "who've": "who have",
    "why's": "why is",
    "why've": "why have",
    "will've": "will have",
    "won't": "will not",
    "won't've": "will not have",
    "would've": "would have",
    "wouldn't": "would not",
    "wouldn't've": "would not have",
    "y'all": "you all",
    "y'all'd": "you all would",
    "y'all'd've": "you all would have",
    "y'all're": "you all are",
    "y'all've": "you all have",
    "you'd": "you would",
    "you'd've": "you would have",
    "you'll": "you will",
    "you'll've": "you will have",
    "you're": "you are",
    "you've": "you have"
}
