import pickle
import numpy as np
from PIL import Image
import os

# The CIFAR-10 Dataset
# https://www.cs.toronto.edu/~kriz/cifar.html

root = "/Users/francis/Documents/Georgian College/AIDI/AIDI all solutions/AIDI 1006 AI Infrastructure and Arch/Assignment 1/"
workspace = root + "cifar-10-batches-py"
train_file = "data_batch"
test_file = "test_batch"

for p in ["train", "test"]:
    path = workspace + "/%s" % p
    isExists = os.path.exists(path)
    if not isExists:
        os.makedirs(path)

for p in ["train", "test"]:
    for k in range(10):
        path = workspace + "/%s/%d" % (p, k)
        isExists = os.path.exists(path)
        if not isExists:
            os.makedirs(path)


def unpickle(f):
    with open(f, 'rb') as fo:
        dd = pickle.load(fo, encoding='bytes')
    return dd


# train
cnt = 0
np.random.seed(0)
for i in range(1, 6):
    file = "%s/%s_%d" % (workspace, train_file, i)
    d = unpickle(file)
    ll = len(d['labels'.encode('utf-8')])
    for j in range(ll):
        label = d['labels'.encode('utf-8')][j]
        data = d['data'.encode('utf-8')][j]
        filename = d['filenames'.encode('utf-8')][j]

        data_RGB = np.reshape(data, (3, 32, 32))
        img = None
        for k in range(32):
            r = data_RGB[0][k]
            g = data_RGB[1][k]
            b = data_RGB[2][k]
            line = np.vstack((r, g, b)).T.reshape(1, 32, 3)
            if img is None:
                img = line
            else:
                img = np.vstack((img, line))
        pImg = Image.fromarray(img, mode='RGB')
        out_path = "%s/%s/%d/%s" % (workspace, "train", label, filename.decode('utf-8'))
        pImg.save(out_path)
        cnt += 1
        if cnt % 100 == 0:
            print(cnt)

# test
cnt = 0
file = "%s/%s" % (workspace, test_file)
d = unpickle(file)
ll = len(d['labels'.encode('utf-8')])
for j in range(ll):
    label = d['labels'.encode('utf-8')][j]
    data = d['data'.encode('utf-8')][j]
    filename = d['filenames'.encode('utf-8')][j]

    data_RGB = np.reshape(data, (3, 32, 32))
    img = None
    for k in range(32):
        r = data_RGB[0][k]
        g = data_RGB[1][k]
        b = data_RGB[2][k]
        line = np.vstack((r, g, b)).T.reshape(1, 32, 3)
        if img is None:
            img = line
        else:
            img = np.vstack((img, line))
    pImg = Image.fromarray(img, mode='RGB')
    out_path = "%s/%s/%d/%s" % (workspace, "test", label, filename.decode('utf-8'))
    pImg.save(out_path)
    cnt += 1
    if cnt % 100 == 0:
        print(cnt)

k = None
