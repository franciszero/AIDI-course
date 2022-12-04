import pandas as pd
import numpy as np
import torch
import torch.nn.functional as F
from sklearn.datasets import load_boston
from sklearn.utils import shuffle
from torch.autograd import Variable
from sklearn.metrics import r2_score
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split


class Net(torch.nn.Module):
    def __init__(self, input_features, l1=128, l2=128, l3=16, l4=16, l5=4, l6=4, output=1):
        super(Net, self).__init__()
        self.h0 = torch.nn.Linear(input_features, l1)
        self.h1 = torch.nn.Linear(l1, l2)
        self.h2 = torch.nn.Linear(l2, l3)
        self.h3 = torch.nn.Linear(l3, l4)
        self.h4 = torch.nn.Linear(l4, l5)
        self.h5 = torch.nn.Linear(l5, l6)
        self.output_layer = torch.nn.Linear(l6, output)

    def forward(self, x):
        x = F.relu(self.h0(x))
        x = F.relu(self.h1(x))
        x = F.relu(self.h2(x))
        x = F.relu(self.h3(x))
        x = F.relu(self.h4(x))
        x = F.relu(self.h5(x))
        x = self.output_layer(x)
        return x


class Foo:
    def __init__(self):
        boston = load_boston()
        boston_df = pd.DataFrame(boston['data'], columns=boston['feature_names'])
        boston_df['PRICE'] = boston['target']
        self.X = boston_df.iloc[:, 0:13]
        self.y = boston_df['PRICE']
        self.X_train, self.X_test, self.y_train, self.y_test = \
            train_test_split(self.X, self.y, test_size=0.3, random_state=0)

        print(self.X_train.shape, self.X_test.shape, self.y_train.shape, self.y_test.shape)

        self.X_train = self.X_train.values
        self.y_train = self.y_train.values
        self.X_test = self.X_test.values
        self.y_test = self.y_test.values
        self.cols = self.X_train.shape[1]  # Number of columns in input matrix
        self.model_pytorch = None

    def eval(self, batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.MSELoss(reduction='sum')):
        batch_no = len(self.X_train) // batch_size  # batches

        # device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
        # # Assume that we are on a CUDA machine, then this should print a CUDA device:
        # print("Executing the model on :", device)

        # self.model_pytorch = Net(self.cols, size_hidden, self.n_output)

        # Adam is a specific flavor of gradient decent which is typically better
        optimizer = torch.optim.Adam(self.model_pytorch.parameters(), lr=learning_rate)
        # optimizer = torch.optim.SGD(net.parameters(), lr=0.2)

        running_loss = 0.0
        for epoch in range(num_epochs):

            # Shuffle just mixes up the dataset between epochs
            X_train, y_train = shuffle(self.X_train, self.y_train)

            # Mini batch learning
            for i in range(batch_no):
                start = i * batch_size
                end = start + batch_size
                inputs = Variable(torch.FloatTensor(X_train[start:end]))
                labels = Variable(torch.FloatTensor(y_train[start:end]))

                # zero the parameter gradients
                optimizer.zero_grad()

                # forward + backward + optimize
                outputs = self.model_pytorch(inputs)
                # print("outputs",outputs)
                # print("outputs",outputs,outputs.shape,"labels",labels, labels.shape)

                loss = criterion(outputs, torch.unsqueeze(labels, dim=1))
                loss.backward()
                optimizer.step()

                # print statistics
                running_loss += loss.item()

            # print progress every 20th epoch
            if (epoch + 1) % 1000 == 0:
                print('Epoch {}'.format(epoch + 1), "loss: ", running_loss)
            running_loss = 0.0
        result1 = self.calculate_r2_mae(self.X_train, self.y_train)
        result2 = self.calculate_r2_mae(self.X_test, self.y_test)
        pass

    def calculate_r2_mae(self, x, y=None):
        """
        This function will return the r2 if passed x and y or return predictions if just passed x.
        """

        # Evaluate the model with the test set.
        if y is None:
            y = []
        X = Variable(torch.FloatTensor(x))

        result = self.model_pytorch(X)  # This outputs the value for regression
        result = result.data[:, 0].numpy()

        if len(y) != 0:
            r2 = r2_score(result, y)
            mae = mean_absolute_error(result, y)
            print("R-Squared: %.3f, MAE: %.2f" % (r2, mae))

            # print('Accuracy {:.2f}'.format(num_right / len(y)), "for a total of ", len(y), "records")
            return pd.DataFrame(data={'actual': y, 'predicted': result})
        else:
            print("returning predictions")
            return result


foo = Foo()

foo.model_pytorch = Net(foo.cols, l1=30, l2=20, l3=5, l4=2, output=1)

foo.eval(batch_size=80, num_epochs=3000, learning_rate=0.002, criterion=torch.nn.HuberLoss(reduction='sum'))
foo.eval(batch_size=80, num_epochs=3000, learning_rate=0.002, criterion=torch.nn.MSELoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.BCELoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.CTCLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.CrossEntropyLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.BCEWithLogitsLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.AdaptiveLogSoftmaxWithLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.CosineEmbeddingLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.GaussianNLLLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.HingeEmbeddingLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.KLDivLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.L1Loss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.MarginRankingLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.MultiLabelMarginLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.MultiMarginLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.NLLLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.PoissonNLLLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.SmoothL1Loss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.SoftMarginLoss(reduction='sum'))
foo.eval(batch_size=50, num_epochs=200, learning_rate=0.01, criterion=torch.nn.TripletMarginLoss(reduction='sum'))

i = None
