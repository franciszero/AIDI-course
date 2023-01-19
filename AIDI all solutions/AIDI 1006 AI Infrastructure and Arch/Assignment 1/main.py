import pickle
import numpy as np
from PIL import Image
import os

file = "/Users/francis/Downloads/cifar-10-batches-py/data_batch_1"


def unpickle(file):
    with open(file, 'rb') as fo:
        dict = pickle.load(fo, encoding='bytes')
    return dict


d = unpickle(file)
# dict_keys([b'batch_label', b'labels', b'data', b'filenames'])


for p in ["train", "validation", "test"]:
    path = "./%s" % (p)
    isExists = os.path.exists(path)
    if not isExists:
        os.makedirs(path)

for p in ["train", "validation", "test"]:
    for i in range(10):
        path = "./%s/%d" % (p, i)
        isExists = os.path.exists(path)
        if not isExists:
            os.makedirs(path)

np.random.seed(0)
p = np.array([0.6, 0.2, 0.2])
# index = np.random.choice(["train", "validation", "test"], p=p.ravel())

for idx in range(10000):
    label = d['labels'.encode('utf-8')][idx]
    data = d['data'.encode('utf-8')][idx]
    filename = d['filenames'.encode('utf-8')][idx]

    data_RGB = np.reshape(data, (3, 32, 32))
    img = None
    for i in range(32):
        r = data_RGB[0][i]
        g = data_RGB[1][i]
        b = data_RGB[2][i]
        line = np.vstack((r, g, b)).T.reshape(1, 32, 3)
        if img is None:
            img = line
        else:
            img = np.vstack((img, line))
    pImg = Image.fromarray(img, mode='RGB')
    pImg.save("./%s/%d/%s" % (np.random.choice(["train", "validation", "test"], p=p.ravel()), label, filename.decode('utf-8')))

i = None
