# coding=utf-8
from NLP.TextPreprocessing import TextPreprocessing

if __name__ == '__main__':
    pr = TextPreprocessing()
    pr.normalize_corpus(1000)
