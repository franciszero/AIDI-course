# coding=utf-8
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import pandas as pd
import re
import string
import math

import nltk

nltk.download('stopwords')
nltk.download('omw-1.4')
# remove stopwords
from nltk.corpus import stopwords

from nltk.stem import PorterStemmer


def stem_words(text):
    return " ".join([stemmer.stem(word) for word in text.split()])


stop_words = set(stopwords.words('english'))
stop_words.add('subject')
stop_words.add('http')


def remove_stopwords(text):
    return " ".join([word for word in str(text).split() if word not in stop_words])


data = pd.read_csv('./data/spam.csv')
contractions_dict = {"ain't": "are not", "'s": " is", "aren't": "are not"}
# Regular expression for finding contractions
contractions_re = re.compile('(%s)' % '|'.join(contractions_dict.keys()))


def expand_contractions(text, contractions_dict=contractions_dict):
    def replace(match):
        return contractions_dict[match.group(0)]

    return contractions_re.sub(replace, text)


# Expanding Contractions in the reviews


if __name__ == '__main__':
    df = pd.read_csv("./data/Dataset.csv")
    print df.columns
    print df.shape[0]
    print df.describe().T
    print df.iloc[1]
    # importing an array of features
    x = df.iloc[:, :-1].values
    # importing an array of dependent variable
    y = df.iloc[:, -1].values

    '''
    missing data
    '''
    from sklearn.impute import SimpleImputer

    # To replace the missing value we create below object of SimpleImputer class
    imputa = SimpleImputer(missing_values=np.nan, strategy='mean')
    ''' Using the fit method, we apply the `imputa` object on the matrix of our feature x.
    The `fit()` method identifies the missing values and computes the mean of such feature a missing value is present.
    '''
    imputa.fit(x[:, 1:3])
    # Repalcing the missing value using transform method
    x[:, 1:3] = imputa.transform(x[:, 1:3])
    df['Country'].value_counts()

    '''
    Encoding Categorical Data
    '''
    from sklearn.compose import ColumnTransformer
    from sklearn.preprocessing import OneHotEncoder

    ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [0])], remainder='passthrough')
    x = np.array(ct.fit_transform(x))

    from sklearn.preprocessing import LabelEncoder

    le = LabelEncoder()
    y = le.fit_transform(y)
    y

    '''
    Handling of Text Data
    '''
    data.head()

    data.rename(columns={'Category': 'class', 'Message': 'text'}, inplace=True)
    contractions_dict = {"ain't": "are not", "'s": " is", "aren't": "are not"}
    # Regular expression for finding contractions
    contractions_re = re.compile('(%s)' % '|'.join(contractions_dict.keys()))

    '''
    use nltk
    '''
    data['text'] = data['text'].apply(lambda x: remove_stopwords(x))
    stop_words = set(stopwords.words('english'))
    var = data['text'][0]
    stemmer = PorterStemmer()
    data["text"] = data["text"].apply(lambda x: stem_words(x))

    print(1)
