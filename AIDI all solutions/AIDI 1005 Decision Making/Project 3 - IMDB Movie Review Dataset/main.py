# coding=utf-8
import os
import math
import time
import joblib
import random

import nltk
import numpy as np
import pandas as pd
import random as rd
import seaborn as sns
import warnings
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec
import category_encoders as ce
from time import time
from xgboost import *
from scipy.stats import normaltest, linregress
from sklearn.svm import SVC, SVR
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import *
from sklearn.cluster import *
from sklearn.ensemble import *
from sklearn.datasets import load_digits, make_hastie_10_2, load_breast_cancer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.preprocessing import *
from sklearn.decomposition import *
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import *
from sklearn.feature_selection import *
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from pyclustering.cluster.kmeans import kmeans
from pyclustering.utils.metric import distance_metric, type_metric
from pyclustering.cluster.center_initializer import kmeans_plusplus_initializer
import unicodedata
import warnings
import re
from bs4 import BeautifulSoup
from sklearn.feature_selection import VarianceThreshold, mutual_info_regression, mutual_info_classif, SelectKBest, chi2
from sklearn.preprocessing import LabelEncoder, StandardScaler, MinMaxScaler
from nltk import corpus, RegexpTokenizer, word_tokenize, download, ToktokTokenizer

import nltk
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelBinarizer
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from wordcloud import WordCloud, STOPWORDS
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize, sent_tokenize
from bs4 import BeautifulSoup
import spacy
import re
import string
import unicodedata
from nltk.tokenize.toktok import ToktokTokenizer
from nltk.stem import LancasterStemmer, WordNetLemmatizer
from sklearn.linear_model import LogisticRegression, SGDClassifier
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from textblob import TextBlob, Word
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

# %matplotlib
# %matplotlib inline
warnings.filterwarnings("ignore")
pd.set_option('display.max_rows', 100)
pd.set_option('display.max_columns', 100)
pd.set_option('display.width', 5000)


class TextPreprocessing:
    def __init__(self):
        download('punkt')
        self.stopword_list = corpus.stopwords.words('english')
        self.stopword_list.append('nan')  # empty dataframe cell float np.nan
        self.stopword_list.append('oh')
        self.stopword_list.remove('not')
        self.stopword_list.append('ok')

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

        self.doc = pd.read_excel("IMDB_dataset.xlsx")
        self.test = "It's Eighty-seven NLP jobs in 1950 ~ 1960s, yet. ,  Onward!"

    def expand_match(self, contraction):
        match = contraction.group(0)
        first_char = match[0]
        expanded_contraction = self.CONTRACTION_MAP.get(match) \
            if self.CONTRACTION_MAP.get(match) \
            else self.CONTRACTION_MAP.get(match.lower())
        expanded_contraction = first_char + expanded_contraction[1:]
        return expanded_contraction

    def process_contraction(self, line):
        contractions_pattern = re.compile('({})'.format('|'.join(self.CONTRACTION_MAP.keys())),
                                          flags=re.IGNORECASE | re.DOTALL)
        return contractions_pattern.sub(self.expand_match, line)

    def remove_punctuations(self, line):
        # remove punctuations
        punctuation = '\[\]\.!,;:?"\'\(\)\*-[0-9]\{1-3\}'
        return re.sub(r'[{}]+'.format(punctuation), ' ', line)

    def process_ToktokTokenizer(self, line):
        tokenizer = ToktokTokenizer()
        tokens = tokenizer.tokenize(line)
        tokens = [token.strip() for token in tokens]
        return np.array(tokens)

    def process_ToktokTokenizer(self, line):
        tokenizer = ToktokTokenizer()
        tokens = tokenizer.tokenize(line)
        tokens = [token.strip() for token in tokens]
        return np.array(tokens)

    def remove_stopwords(self, tokens):
        tks = [token for token in tokens if token not in self.stopword_list and len(token) != 1]
        sws = [token for token in tokens if token in self.stopword_list]
        return str(tks)  # , np.array(sws)


class Driver:
    def __init__(self, testing=False, frac=0.01, test_split_size=0.1):
        self.foo = TextPreprocessing()
        if testing:
            self.foo.doc = self.foo.doc.sample(frac=frac, replace=False, random_state=0)
        r = random.randint(1, 10000)
        print("test site split random_state : %d" % r)
        self.df = self.foo.doc
        if testing:
            self.foo.df = self.foo.df.sample(frac=frac, replace=False, random_state=0)
        self.X = self.foo.doc['review']
        self.y = self.foo.doc['sentiment']
        self.X_train, self.X_test, self.y_train, self.y_test = \
            train_test_split(self.X, self.y, test_size=test_split_size, random_state=r, stratify=self.y)
        self.X_train = self.X_train.reset_index(drop=True)
        self.X_test = self.X_test.reset_index(drop=True)

        print("sample size: %s" % str(self.foo.doc.shape))
        print("training data size: %s" % str(self.X_train.shape))
    pass

    def text_processing(self):
        print('lower case', end='')
        t = time()
        self.X_train = self.X_train.apply(lambda l: l.lower())
        print('time cost %.2fs' % (time() - t))
        print('remove html structures', end='')
        t = time()
        self.X_train = self.X_train.apply(lambda l: BeautifulSoup(l, "html.parser").get_text())
        print('time cost %.2fs' % (time() - t))
        print('remove single charactors', end='')
        t = time()
        self.X_train = self.X_train.apply(lambda l: re.sub(r'[^a-zA-Z0-9\s]', '', l))
        print('time cost %.2fs' % (time() - t))
        print('remove punctuation structures', end='')
        t = time()
        self.X_train = self.X_train.apply(lambda l: re.sub('\[[^]]*\]', '', l))
        print('time cost %.2fs' % (time() - t))
        print('stemming', end='')
        t = time()
        self.X_train = self.X_train.apply(lambda l: ' '.join([nltk.porter.PorterStemmer().stem(word) for word in l.split()]))
        print('time cost %.2fs' % (time() - t))
        print('expand contractions', end='')
        t = time()
        self.X_train = self.X_train.apply(lambda l: self.foo.process_contraction(l))
        print('time cost %.2fs' % (time() - t))
        print('remove all punctuations', end='')
        t = time()
        self.X_train = self.X_train.apply(lambda l: self.foo.remove_punctuations(l))
        print('time cost %.2fs' % (time() - t))
        print('tokenization', end='')
        t = time()
        self.X_train = self.X_train.apply(lambda l: self.foo.remove_stopwords(self.foo.process_ToktokTokenizer(l)))
        print('time cost %.2fs' % (time() - t))
        print()
        pass

    def tfidf_vectorizer(self):
        tfidf_vect = TfidfVectorizer()
        tfidf_vect.fit(self.X_train.values)
        X_train_vect = tfidf_vect.transform(self.X_train.values)
        X_test_vect = tfidf_vect.transform(self.X_test.values)
        return X_train_vect, X_test_vect

    def model_select(self, results):
        print("Now the best model is")
        best_model_name = None
        best_accuracy = 0.0
        self.__print_title()
        for _, tup in enumerate(results):
            self.__print_result(tup)
            name = tup[0]
            accuracy = tup[1][2]
            if accuracy > best_accuracy:
                best_accuracy = accuracy
                best_model_name = name

        algo = best_model_name.split(' ')[0]
        print(
            "%s received the highest average performance with accuracy %.4f. Therefore %s is the most suitable model.\n" % (
                algo, best_accuracy, algo))

    def evaluating(self, callable_, verbose=0):
        self.__print_title()
        buffer = []
        name = None
        # pred_lst = []
        for _ in range(5):
            name, clf = callable_(self.X_train, self.y_train,
                                  random_state=random.randint(1, 10000), verbose=verbose)
            start = time()
            y_pred = clf.predict(self.X_test)
            # pred_lst.append(y_pred)
            cost = (time() - start) * 1000
            # tmp_params = clf.cv_results_['params'][clf.best_index_]
            tup = (
                round(clf.cv_results_['mean_test_score'][clf.best_index_], 3),
                round(clf.cv_results_['std_test_score'][clf.best_index_] * 2, 3),
                round(accuracy_score(self.y_test, y_pred), 3),
                round(precision_score(self.y_test, y_pred, average="binary", pos_label='positive'), 3),
                round(recall_score(self.y_test, y_pred, average="binary", pos_label='positive'), 3),
                round(cost, 3),
            )
            buffer.append(np.array(tup))
            self.__print_result((name, tup))
        tup = np.array(buffer).mean(axis=0)
        self.__print_result(("%s avg" % name, tup))
        print()
        # self.df[name] = pd.DataFrame(pred_lst).mode().values.flatten()
        return "%s avg" % name, tup

    @staticmethod
    def __print_title():
        print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" % (
            "model", "mean", "std", "accuracy", "precision", "recall", "latency"))

    @staticmethod
    def __print_result(tup):
        name, r = tup
        if name.find("avg") >= 0:
            std = ""
        else:
            std = "+/-%.3f" % r[1]
        print("%15s\t%10s\t%10s\t%10s\t%10s\t%10s\t%10s" % (
            "%s" % name, "%.3f" % r[0], std, "%.3f" % r[2], "%.3f" % r[3], "%.3f" % r[4], "%.3f ms" % r[5]))

    def evaluating_model(self, clf):
        pred = clf.predict(self.X_test)
        print('Training set score: {:.4f}'.format(clf.score(self.X_train, self.y_train)))
        print('Test set score: {:.4f}'.format(clf.score(self.X_test, self.y_test)))
        print('Model accuracy score: {0:0.4f}'.format(accuracy_score(self.y_test, pred)))
        print(classification_report(self.y_test, pred))
        pass

    def train_RF(self, x, y, random_state=0, verbose=0):
        model = RandomForestClassifier()
        params = {
            'bootstrap': [True, False],
            'max_depth': [2, 4, 8, 16, 32],
            'max_features': ['auto', 'sqrt', 'log2'],
            'min_samples_leaf': [1, 2, 4],
            'min_samples_split': [2, 5, 10],
            'n_estimators': [10, 20, 50, 100, 200],
            'criterion': ['gini', 'entropy']
        }
        # scoring = {
        #     "Accuracy": make_scorer(accuracy_score),
        #     "mean_absolute_error": make_scorer(mean_absolute_error),
        #     "mean_squared_error": make_scorer(mean_squared_error),
        #     "r2_score": make_scorer(r2_score),
        # }
        k_fold = StratifiedKFold(5, shuffle=True, random_state=random_state)
        clf = self.search_cv(model, params, k_fold, verbose=verbose)
        clf.fit(x, y)
        return "RF", clf

    def train_XGB(self, x, y, random_state=0, verbose=0):
        model = XGBClassifier(eval_metric='logloss')
        params = {
            "learning_rate": [0.001, 0.01, 0.1, 1],
            "max_depth": [2,4,6,8,10],
            "min_child_weight": range(1, 10),
            "gamma": np.arange(0, 0.7, 0.2),
            "colsample_bytree": np.arange(0.1, 1.1, 0.1),
            "n_estimators": [10,20,50,100,200,500]
        }
        k_fold = StratifiedKFold(5, shuffle=True, random_state=random_state)
        clf = self.search_cv(model, params, k_fold, verbose=verbose)
        clf.fit(x, y)
        return "XGB", clf

    @staticmethod
    def search_cv(model, params, fold, verbose=0):
        return RandomizedSearchCV(model, params, cv=fold, verbose=verbose, return_train_score=True, )
        # return RandomizedSearchCV(model, params, cv=fold, verbose=0,
        #                           scoring=scoring, refit=list(scoring.items())[0][0], return_train_score=True, )


if __name__ == '__main__':
    go = Driver(testing=False, test_split_size=0.1)
