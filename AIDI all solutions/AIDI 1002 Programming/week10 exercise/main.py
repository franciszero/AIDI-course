import numpy as np
from keras.datasets import boston_housing
from keras import Sequential, layers


class Foo:
    def __init__(self):
        (self.train_data, self.train_targets), (self.test_data, self.test_targets) = boston_housing.load_data()
        # 404 training samples and 102 test samples,
        # each with 13 numerical feature
        print("train_data.shape", self.train_data.shape)

        # normalize the data
        mean = self.train_data.mean(axis=0)
        self.train_data -= mean
        std = self.train_data.std(axis=0)
        self.train_data /= std
        self.test_data -= mean
        self.test_data /= std

    # few samples are available, use a very small network
    # with two hidden layers, each with 64 units.
    # In general, the less training data you have,
    # the worse overfitting will be, and using a small network
    # is one way to mitigate overfitting.

    def build_model(self, l1, a1, l2=128, a2='relu', l3=64, a3='relu', l4=32, a4='relu'):
        model = Sequential()
        model.add(layers.Dense(l1, activation=a1, input_shape=(self.train_data.shape[1],)))
        model.add(layers.Dense(l2, activation=a2))
        model.add(layers.Dense(l3, activation=a3))
        model.add(layers.Dense(l4, activation=a4))

        # network ends with a single unit and no activation.
        # This is a typical setup for scalar regression
        model.add(layers.Dense(1))
        model.compile(optimizer='rmsprop', loss='mse', metrics=['mae'])
        return model

    def eval(self, l1=128, a1='relu', l2=128, a2='relu', l3=64, a3='relu', l4=32, a4='relu', epoc=80):
        model = self.build_model(l1, a1, l2, a2, l3, a3, l4, a4)
        model.fit(self.train_data, self.train_targets, epochs=epoc, batch_size=16, verbose=0)
        test_mse_score, test_mae_score = model.evaluate(self.test_data, self.test_targets)
        print("test_mae_score", np.round(test_mae_score, 3))


if __name__ == 'main':
    foo = Foo()
    foo.eval(l1=128, a1='relu', l2=128, a2='relu', l3=64, a3='relu', l4=32, a4='relu', epoc=80)
