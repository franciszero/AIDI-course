# coding=utf-8
import os
import math
import time
import joblib
import random
import numpy as np
import pandas as pd
import random as rd
import seaborn as sns
import warnings
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec
import category_encoders as ce
from time import time

from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
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
        return tks


if __name__ == '__main__':
    foo = TextPreprocessing()
    X = foo.doc['review']
    y = foo.doc['sentiment']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=0, stratify=y)
    X_train = X_train.reset_index(drop=True)
    X_test = X_test.reset_index(drop=True)
    X_train = X_train.head(100)
    X_train = X_train.apply(lambda l: l.lower())
    X_train = X_train.apply(lambda l: foo.process_contraction(l))
    X_train = X_train.apply(lambda l: foo.remove_punctuations(l))
    X_train = X_train.apply(lambda l: foo.remove_stopwords(foo.process_ToktokTokenizer(l)))

    # Tfidf vectorizer
    tv = TfidfVectorizer(min_df=0, max_df=1, use_idf=True, ngram_range=(1, 3))
    tv_train_reviews = tv.fit_transform(X_train)
    print('Tfidf_train:', tv_train_reviews.shape)

    # training the model
    lr = LogisticRegression(penalty='l2', max_iter=500, C=1, random_state=42)
    # Fitting the model for Bag of words
    lr_bow = lr.fit(cv_train_reviews, y_train)
    print(lr_bow)
    # Fitting the model for tfidf features
    lr_tfidf = lr.fit(tv_train_reviews, y_train)
    print(lr_tfidf)