# coding=utf-8
import pandas as pd
import re
import unicodedata
import nltk
from nltk.tokenize.toktok import ToktokTokenizer
from bs4 import BeautifulSoup
from Exercise2.NLP.contractions import CONTRACTION_MAP
import spacy.cli

# nltk.download('stopwords')
# nltk.download('omw-1.4')
# nltk.download('wordnet')
# spacy.cli.download("en")
nlp = spacy.load('en_core_web_sm')

tokenizer = ToktokTokenizer()
stopword_list = nltk.corpus.stopwords.words('english')
stopword_list.append('nan')  # empty dataframe cell float np.nan
stopword_list.append('oh')


# other stopwords
# sw_spacy = nlp.Defaults.stop_words
# STOPWORDS


def p(df, i):
    print(df.loc[i, 'full_text'])
    print(df.loc[i, 'clean_text'])


# SEE:
# https://www.kdnuggets.com/2018/08/practitioners-guide-processing-understanding-text-2.html
class TextPreprocessing:
    def __init__(self):
        self.df0 = pd.read_csv('./data/netflix_titles.csv', encoding='utf8')
        pass

    # ( 996/1000)[  original text] Movie. Vizontele. Yılmaz Erdoğan, Ömer Faruk Sorak. Turkey. In 1974, a rural town in Anatolia gets its first television set – an event that's met with both excitement and trepidation by the villagers.
    # ( 996/1000)[ html stripping] Movie. Vizontele. Yılmaz Erdoğan, Ömer Faruk Sorak. Turkey. In 1974, a rural town in Anatolia gets its first television set – an event that's met with both excitement and trepidation by the villagers.
    # ( 996/1000)[   unicode norm] Movie. Vizontele. Ylmaz Erdogan, Omer Faruk Sorak. Turkey. In 1974, a rural town in Anatolia gets its first television set  an event that's met with both excitement and trepidation by the villagers.
    # ( 996/1000)[   contractions] Movie. Vizontele. Ylmaz Erdogan, Omer Faruk Sorak. Turkey. In 1974, a rural town in Anatolia gets its first television set  an event that is met with both excitement and trepidation by the villagers.
    # ( 996/1000)[  to lower case] movie. vizontele. ylmaz erdogan, omer faruk sorak. turkey. in 1974, a rural town in anatolia gets its first television set  an event that is met with both excitement and trepidation by the villagers.
    # ( 996/1000)[    remove \r\n] movie. vizontele. ylmaz erdogan, omer faruk sorak. turkey. in 1974, a rural town in anatolia gets its first television set  an event that is met with both excitement and trepidation by the villagers.
    # ( 996/1000)[  lemmatization] movie . vizontele . ylmaz erdogan , omer faruk sorak . turkey . in 1974 , a rural town in anatolia get its first television set   an event that be meet with both excitement and trepidation by the villager .
    # ( 996/1000)[  insert spaces] movie  .  vizontele  .  ylmaz erdogan , omer faruk sorak  .  turkey  .  in 1974 , a rural town in anatolia get its first television set   an event that be meet with both excitement and trepidation by the villager  .
    # ( 996/1000)[remove specials] movie    vizontele    ylmaz erdogan  omer faruk sorak    turkey    in   a rural town in anatolia get its first television set   an event that be meet with both excitement and trepidation by the villager
    # ( 996/1000)[   remove space] movie vizontele ylmaz erdogan omer faruk sorak turkey in a rural town in anatolia get its first television set an event that be meet with both excitement and trepidation by the villager
    # ( 996/1000)[      stopwords] movie vizontele ylmaz erdogan omer faruk sorak turkey rural town anatolia get first television set event meet excitement trepidation villager
    def normalize_corpus(self, size, html_stripping=True, contraction_expansion=True,
                         accented_char_removal=True, text_lower_case=True,
                         text_lemmatization=True, special_char_removal=True,
                         stopword_removal=True, remove_digits=True):

        df = self.df0.head(size).copy(deep=True)

        # combining interesting columns
        # optional columns: ['show_id', 'type', 'title', 'director', 'cast', 'country', 'date_added',
        #                   'release_year', 'rating', 'duration', 'listed_in', 'description']
        df['full_text'] = df["title"].map(str) + '. ' + \
                          df["director"].map(str) + '. ' + \
                          df["cast"].map(str) + '. ' + \
                          df["country"].map(str) + '. ' + \
                          df["date_added"].map(str) + '. ' + \
                          df["duration"].map(str) + '. ' + \
                          df["duration"].map(str) + '. ' + \
                          df["listed_in"].map(str) + '. ' + \
                          df["description"].map(str)

        corpus = df['full_text']
        normalized_corpus = []
        # normalize each document in the corpus
        s = len(corpus)
        for (i, doc) in enumerate(corpus):
            print("(%4d/%d)[%15s] %s" % (i + 1, s, 'original text', doc))

            # strip HTML structure
            if html_stripping:
                doc = BeautifulSoup(doc, "html.parser").get_text()
                print("(%4d/%d)[%15s] %s" % (i + 1, s, 'html stripping', doc))

            # Using dict to expand contractions from we'll, it's to we will, it is, etc.
            if contraction_expansion:
                contractions_pattern = re.compile('({})'.format('|'.join(CONTRACTION_MAP.keys())),
                                                  flags=re.IGNORECASE | re.DOTALL)

                def expand_match(contraction):
                    match = contraction.group(0)
                    first_char = match[0]
                    expanded_contraction = CONTRACTION_MAP.get(match) \
                        if CONTRACTION_MAP.get(match) \
                        else CONTRACTION_MAP.get(match.lower())
                    expanded_contraction = first_char + expanded_contraction[1:]
                    return expanded_contraction

                doc = contractions_pattern.sub(expand_match, doc)
                doc = re.sub("'", "", doc)
                print("(%4d/%d)[%15s] %s" % (i + 1, s, 'contractions', doc))

            # remove accented characters
            if accented_char_removal:
                # >> > s1 = 'Spicy Jalape\u00f1o'  # ”ñ”(U+00F1)
                # >> > s2 = 'Spicy Jalapen\u0303o'  # ”n~”(U+0303)
                # >> > s1
                # 'Spicy Jalapeño'
                # >> > s2
                # 'Spicy Jalapeño'
                # >> > s1 == s2
                # False
                # >> > len(s1)
                # 14
                # >> > len(s2)
                # 15
                tmp = unicodedata.normalize('NFKD', doc)  # see: https://en.wikipedia.org/wiki/Unicode_equivalence
                # >>> a
                # 'pýtĥöñ is awesome\n'
                # >>> b = unicodedata.normalize('NFD', a)
                # >>> b.encode('ascii', 'ignore').decode('ascii')
                # 'python is awesome\n'
                doc = tmp.encode('ascii', 'ignore').decode('utf-8', 'ignore')
                print("(%4d/%d)[%15s] %s" % (i + 1, s, 'unicode norm', doc))

            # lowercase the text
            if text_lower_case:
                doc = doc.lower()
                print("(%4d/%d)[%15s] %s" % (i + 1, s, 'to lower case', doc))

            # remove extra newlines
            doc = re.sub(r'[\r|\n|\r\n]+', ' ', doc)
            print("(%4d/%d)[%15s] %s" % (i + 1, s, 'remove \\r\\n', doc))

            # use en_core_web_sm to lemmatize text
            if text_lemmatization:
                tmp = nlp(doc)
                doc = ' '.join([word.lemma_ if word.lemma_ != '-PRON-' else word.text for word in tmp])
                print("(%4d/%d)[%15s] %s" % (i + 1, s, 'lemmatization', doc))

            # remove special characters and\or digits
            if special_char_removal:
                # insert spaces between special characters to isolate them
                special_char_pattern = re.compile(r'([{.(-)!}])')
                doc = special_char_pattern.sub(" \\1 ", doc)
                print("(%4d/%d)[%15s] %s" % (i + 1, s, 'insert spaces', doc))
                pattern = r'[^a-zA-z0-9\s]' if not remove_digits else r'[^a-zA-z\s]'
                doc = re.sub(pattern, '', doc)  # ignore hyphenated english words for now
                print("(%4d/%d)[%15s] %s" % (i + 1, s, 'remove specials', doc))

            # remove extra whitespace
            doc = re.sub(' +', ' ', doc)
            print("(%4d/%d)[%15s] %s" % (i + 1, s, 'remove space', doc))

            # remove stopwords
            if stopword_removal:
                tokens = tokenizer.tokenize(doc)
                tokens = [token.strip() for token in tokens]
                if text_lower_case:
                    filtered_tokens = [token for token in tokens if token not in stopword_list]
                else:
                    filtered_tokens = [token for token in tokens if token.lower() not in stopword_list]
                doc = ' '.join(filtered_tokens)
                print("(%4d/%d)[%15s] %s" % (i + 1, s, 'stopwords', doc))

            normalized_corpus.append(doc)
            print('\n')

        df['clean_text'] = normalized_corpus
        path = './data/netflix_titles_normalize_corpus.csv'
        df.to_csv(path, index=False, encoding='utf-8')
        print("save to path: %s" % path)
        return
