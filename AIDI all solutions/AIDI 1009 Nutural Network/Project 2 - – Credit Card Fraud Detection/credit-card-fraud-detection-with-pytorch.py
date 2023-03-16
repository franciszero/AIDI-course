# coding=utf-8
import math
import numpy as np
import pandas as pd
import torch
import seaborn as sns
from matplotlib import pyplot as plt
from sklearn.metrics import confusion_matrix, accuracy_score, classification_report
from torch import tensor, FloatTensor, LongTensor
from torch.nn import Linear, Module, ReLU, CrossEntropyLoss, Dropout
from torch.utils.data import TensorDataset, DataLoader
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from torch.autograd import Variable


class DataExplorer:
    def __init__(self):
        self.df = pd.read_excel('./CreditCardDataset.xlsx')
        self.c_label = 'Class'
        self.dfx = self.df.drop(self.c_label, axis=1)  # original X
        x_cols = self.dfx.columns
        self.dfx = pd.DataFrame(MinMaxScaler().fit(self.dfx).transform(self.dfx), columns=x_cols)
        self.dfy = self.df[[self.c_label]]
        self.dfy_n = self.dfy.value_counts().shape[0]
        self.dfy = self.dfy[self.c_label]  # 1-D
        pass

    def eda_info(self):
        return self.df.info()

    def eda_check_uniques(self):
        return self.df.nunique()

    def eda_df_columns(self):
        return self.df.columns

    def eda_describe(self):
        summary = pd.DataFrame(self.df.describe().T)
        summary = summary.style.background_gradient(cmap='Reds') \
            .set_table_attributes("style = 'display: inline'") \
            .set_caption('Statistics of the Dataset') \
            .set_table_styles([{'selector': 'caption', 'props': [('font-size', '16px')]}])
        return summary

    def eda_check_nan(self):
        is_there_any_null_values = self.df.isnull().values.any()
        print("[EDA] is there any null values: ", is_there_any_null_values)
        plt.figure(figsize=(15, 6))
        sns.heatmap(self.df.isnull(), cmap="viridis")

    def eda_feature_correlations_heatmap(self, x=10, y=10):
        plt.figure(figsize=(x, y))
        sns.heatmap(pd.DataFrame(self.dfx).corr(), annot=True, linewidths=.5, fmt='.1f', cmap="viridis")
        plt.title("feature correlation heatmap")

    def eda_kde_pairplot(self, frac=0.01):
        sns.pairplot(self.df.sample(frac=frac, replace=False, random_state=0), kind="kde")

    def eda_plot_dist_multi_cols(self, column_names_to_plot, gridspec_cols=2, idx=0):
        assert (gridspec_cols >= 2)  # not allowed single col gridspec plot
        assert (len(column_names_to_plot) / gridspec_cols > 1)  # not allowed single row gridspec plot
        gridspec_rows = math.ceil(len(column_names_to_plot) / gridspec_cols)

        fig, axes = plt.subplots(gridspec_rows, gridspec_cols, figsize=(6 * gridspec_cols, 4 * gridspec_rows))
        for i in range(gridspec_rows):
            for j in range(gridspec_cols):
                if idx < len(column_names_to_plot):
                    c = column_names_to_plot[idx]
                    idx += 1
                    f = self.dfx[[c]]
                    ax0 = axes[i][j]
                    sns.distplot(f, kde=True, ax=ax0, color='brown')
                    ax0.set_title("\"%s\" (%.2f, %.2f)" % (c, f.min(), f.max()))
        plt.show()

    def eda_plot_label_dist(self, col, color="brown"):
        plt.figure(figsize=(6, 3))
        sns.distplot(self.dfy, kde=True, color=color)
        plt.title("\"%s\" (%.2f, %.2f)" % (col, self.dfy.min(), self.dfy.max()))
        plt.show()


exp = DataExplorer()


class FraudDetection:
    def __init__(self, exp, clf, lr=0.001, batch_size=64):
        self.x_train, self.x_test, self.y_train, self.y_test \
            = train_test_split(exp.dfx.to_numpy(), exp.dfy.to_numpy(), test_size=0.2, random_state=0)

        self.batch_size = batch_size
        self.train_loader = DataLoader(TensorDataset(tensor(self.x_train).float(),
                                                     tensor(self.y_train).float()),
                                       batch_size=self.batch_size)
        self.test_loader = DataLoader(TensorDataset(tensor(self.x_test).float(),
                                                    tensor(self.y_test).float()),
                                      batch_size=self.batch_size)
        self.test_inputs = torch.FloatTensor(tensor(self.x_test).float())
        self.test_labels = torch.FloatTensor(tensor(self.y_test).float())

        input_dim = self.x_train.shape[1]
        output_dim = 1
        self.clf = clf
        self.optimizer = torch.optim.SGD(self.clf.parameters(), lr=lr, nesterov=True, momentum=0.9, dampening=0)
        self.optimizer.zero_grad()  # Clear off the gradients from any past operation
        self.criterion = CrossEntropyLoss()  # torch.nn.BCEWithLogitsLoss(pos_weight=torch.tensor([5]))
        self.epochs = 200

    def visualization(self, train_loss, train_acc, test_loss, test_acc):
        plt.figure(figsize=(12, 8))
        plt.plot(train_loss, label='train loss')
        plt.plot(test_loss, label='test loss')
        plt.title("Train and Test Loss")
        plt.legend()
        plt.show()

        plt.figure(figsize=(12, 8))
        plt.plot(train_acc, label='train accuracy')
        plt.plot(test_acc, label='test accuracy')
        plt.title("Train and Test Accuracy")
        plt.legend()
        plt.show()

    def print_metrics(self):
        outputs = self.clf(self.test_inputs)
        predicted = [1 if output > 0.5 else 0 for output in outputs]
        print('confusion_matrix: %s' % confusion_matrix(self.y_test, predicted))
        print('accuracy_score: %s' % accuracy_score(self.y_test, predicted))
        print(classification_report(self.y_test, predicted))

    def run_gradient_descent(self, epoch, verbose=0):
        cum_loss, correct, total = 0, 0, 0

        # Put the network into training mode
        self.clf.train()
        for i, (inputs, labels) in enumerate(self.train_loader):

            outputs = self.clf(inputs)  # Do the forward pass
            loss = self.criterion(outputs.squeeze(), labels)  # Calculate the loss
            loss.backward()  # Calculate the gradients with help of back propagation
            self.optimizer.step()  # Ask the optimizer to adjust the parameters based on the gradients
            self.optimizer.zero_grad()  # Clear off the gradients from any past operation

            # Record the correct predictions for training data
            total += labels.size()[0]
            predicted = [1 if output > 0.5 else 0 for output in outputs]
            correct += (np.array(predicted) == np.array(labels.tolist())).sum()

            cum_loss += loss.item()
            if verbose > 0 and (i + 1) % 1 == 0:
                print('Epoch %d/%d, Iteration %d/%d, Loss: %.4f'
                      % (epoch + 1, self.epochs, i + 1, len(self.train_loader) // self.batch_size, loss.data))
        training_loss = cum_loss / len(self.train_loader)
        training_accuracy = 100 * correct / total

        # Put the network into evaluation mode
        self.clf.eval()
        cum_loss, correct, total = 0, 0, 0
        with torch.no_grad():
            for i, (inputs, labels) in enumerate(self.test_loader):
                outputs = self.clf(inputs)
                loss = self.criterion(outputs.squeeze(), labels).data
                cum_loss += loss.item()

                total += labels.size()[0]
                predicted = [1 if output > 0.5 else 0 for output in outputs]
                correct += (np.array(predicted) == np.array(labels.tolist())).sum()
        test_loss = cum_loss / len(self.test_loader)
        test_accuracy = 100 * correct / total
        return training_loss, training_accuracy, test_loss, test_accuracy

    def run(self, epochs=0):
        if epochs > 0:
            self.epochs = epochs
        lst_train_loss, lst_train_acc, lst_test_loss, lst_test_acc \
            = np.zeros(self.epochs), np.zeros(self.epochs), np.zeros(self.epochs), np.zeros(self.epochs)
        for epoch in range(self.epochs):
            lst_train_loss[epoch], lst_train_acc[epoch], lst_test_loss[epoch], lst_test_acc[epoch] \
                = self.run_gradient_descent(epoch, verbose=0)
            if epoch % 10 == 0:
                print(f"epoch %d: " % epoch +
                      f"Training loss=%.3f, " % lst_train_loss[:epoch + 1].mean() +
                      f"accuracy=%.3f, " % lst_train_acc[:epoch + 1].mean() +
                      f"Test loss=%.3f, " % lst_test_loss[:epoch + 1].mean() +
                      f"accuracy=%.3f" % lst_test_acc[:epoch + 1].mean()
                      )
        return lst_train_loss, lst_train_acc, lst_test_loss, lst_test_acc


results = []


def test_func(fraud_detect, clf, n_epochs=501):
    train_loss, train_acc, test_loss, test_acc = fraud_detect.run(epochs=n_epochs)
    outputs = clf(fraud_detect.test_inputs)
    pred = [1 if output > 0.5 else 0 for output in outputs]
    fraud_detect.print_metrics()
    return train_loss, train_acc, test_loss, test_acc, pred


class PyTorchClf1(Module):
    def __init__(self, in_dim=20, out_dim=1):
        super().__init__()
        self.relu = ReLU()
        self.l1 = Linear(in_dim, 128)
        self.l2 = Linear(128, 8)
        self.drop_out = Dropout(0.2)
        self.l3 = Linear(8, out_dim)

    def forward(self, xx):
        xx = xx.reshape(xx.shape[0], -1)
        xx = self.relu(self.l1(xx))
        xx = self.relu(self.l2(xx))
        xx = self.drop_out(xx)
        xx = self.l3(xx)
        return xx


clf1 = PyTorchClf1(in_dim=exp.dfx.shape[1], out_dim=1)
foo1 = FraudDetection(exp, clf1, lr=0.001, batch_size=128)
results.append(test_func(foo1, clf1, n_epochs=11))

for i, (train_loss, train_acc, test_loss, test_acc, pred) in enumerate(results):
#     print(i, len(train_loss))
    foo1.visualization(train_loss, train_acc, test_loss, test_acc)
    foo1.visualization(train_loss, train_acc, test_loss, test_acc)

# class FraudDetection:
#     def __init__(self, exp, clf, lr=0.001, batch_size=64):
#         self.x_train, self.x_test, self.y_train, self.y_test\
#             = train_test_split(exp.dfx.to_numpy(), exp.dfy.to_numpy(), test_size=0.2, random_state=0)
#
#         self.batch_size = batch_size
#         self.train_loader = DataLoader(TensorDataset(tensor(self.x_train).float(),
#                                                      tensor(self.y_train).float()),
#                                        batch_size=self.batch_size)
#         self.test_loader = DataLoader(TensorDataset(tensor(self.x_test).float(),
#                                                     tensor(self.y_test).float()),
#                                       batch_size=self.batch_size)
#         self.test_inputs = torch.FloatTensor(tensor(self.x_test).float())
#         self.test_labels = torch.FloatTensor(tensor(self.y_test).float())
#
#         input_dim = self.x_train.shape[1]
#         output_dim = 1
#         self.clf = clf
#         self.optimizer = torch.optim.SGD(self.clf.parameters(), lr=lr, nesterov=True, momentum=0.9, dampening=0)
#         self.optimizer.zero_grad()  # Clear off the gradients from any past operation
#         self.criterion = CrossEntropyLoss()  # torch.nn.BCEWithLogitsLoss(pos_weight=torch.tensor([5]))
#         self.epochs = 200
#
#     def run_gradient_descent(self, epoch, verbose=0):
#         cum_loss, correct, total = 0, 0, 0
#
#         # Put the network into training mode
#         self.clf.train()
#         for i, (inputs, labels) in enumerate(self.train_loader):
#
#             outputs = self.clf(inputs)  # Do the forward pass
#             loss = self.criterion(outputs.squeeze(), labels)  # Calculate the loss
#             loss.backward()  # Calculate the gradients with help of back propagation
#             self.optimizer.step()  # Ask the optimizer to adjust the parameters based on the gradients
#             self.optimizer.zero_grad()  # Clear off the gradients from any past operation
#
#             # Record the correct predictions for training data
#             total += labels.size()[0]
#             predicted = [1 if output > 0.5 else 0 for output in outputs]
#             correct += (np.array(predicted) == np.array(labels.tolist())).sum()
#
#             cum_loss += loss.item()
#             if verbose > 0 and (i + 1) % 1 == 0:
#                 print('Epoch %d/%d, Iteration %d/%d, Loss: %.4f'
#                       % (epoch + 1, self.epochs, i + 1, len(self.train_loader) // self.batch_size, loss.data))
#         training_loss = cum_loss / len(self.train_loader)
#         training_accuracy = 100 * correct / total
#
#         # Put the network into evaluation mode
#         self.clf.eval()
#         cum_loss, correct, total = 0, 0, 0
#         with torch.no_grad():
#             for i, (inputs, labels) in enumerate(self.test_loader):
#                 outputs = self.clf(inputs)
#                 loss = self.criterion(outputs.squeeze(), labels).data
#                 cum_loss += loss.item()
#
#                 total += labels.size()[0]
#                 predicted = [1 if output > 0.5 else 0 for output in outputs]
#                 correct += (np.array(predicted) == np.array(labels.tolist())).sum()
#         test_loss = cum_loss / len(self.test_loader)
#         test_accuracy = 100 * correct / total
#         return training_loss, training_accuracy, test_loss, test_accuracy
#
#     def run(self, epochs=0):
#         if epochs > 0:
#             self.epochs = epochs
#         lst_train_loss, lst_train_acc, lst_test_loss, lst_test_acc \
#             = np.zeros(self.epochs), np.zeros(self.epochs), np.zeros(self.epochs), np.zeros(self.epochs)
#         for epoch in range(self.epochs):
#             lst_train_loss[epoch], lst_train_acc[epoch], lst_test_loss[epoch], lst_test_acc[epoch] \
#                 = self.run_gradient_descent(epoch, verbose=0)
#             if epoch % 10 == 0:
#                 print(f"epoch %d: " % epoch +
#                       f"Training loss=%.3f, " % lst_train_loss[:epoch + 1].mean() +
#                       f"accuracy=%.3f, " % lst_train_acc[:epoch + 1].mean() +
#                       f"Test loss=%.3f, " % lst_test_loss[:epoch + 1].mean() +
#                       f"accuracy=%.3f" % lst_test_acc[:epoch + 1].mean()
#                       )
#         return lst_train_loss, lst_train_acc, lst_test_loss, lst_test_acc
#
#     def loss_batch(self, inputs, labels, opt=None):
#         outputs = self.clf(inputs)
#         loss = self.criterion(outputs.squeeze(), labels)
#         if opt is not None:
#             loss.backward()
#             opt.step()
#             opt.zero_grad()
#         return loss.item(), len(labels)
#
#     def train(self, epochs=0):
#         if epochs > 0:
#             self.epochs = epochs
#         for epoch in range(self.epochs):
#             self.clf.train()
#             losses, nums = zip(*[self.loss_batch(inputs, labels, self.optimizer) for inputs, labels in self.train_loader])
#             tra_loss = np.sum(np.multiply(losses, nums)) / np.sum(nums)
# #             self.clf.eval()
# #             with torch.no_grad():
# #                 losses, nums = zip(*[self.loss_batch(inputs, labels) for inputs, labels in self.test_loader])
# #             val_loss = np.sum(np.multiply(losses, nums)) / np.sum(nums)
#             print(epoch, tra_loss, 0)
