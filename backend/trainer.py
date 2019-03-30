import numpy as np
import pandas
import keras
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import Dense, LeakyReLU
from keras.wrappers.scikit_learn import KerasRegressor

def strech(num):
	return num * (maxY-minY) +minY
# load dataset
dataframe = pandas.read_csv("datafiles/merged.csv", header=0)
dataset = dataframe.values
# split into input (X) and output (Y) variables
X = dataset[:,0:-1]
Y = dataset[:,-1]
#X = np.reshape(X, (-1,1))
Y = np.reshape(Y, (-1,1))

minY = np.min(Y)
maxY = np.max(Y)

scaler = MinMaxScaler()
scaler.fit(X)
Xnew=scaler.transform(X)
scaler.fit(Y)
Ynew=scaler.transform(Y)

print(Xnew)
print(Ynew)
opt = keras.optimizers.Adam(lr=0.0001)

model = Sequential()
model.add(Dense(3, input_dim=3, kernel_initializer='normal', activation='relu'))
model.add(Dense(1, kernel_initializer='normal', activation='relu'))
model.compile(loss='mean_squared_error', optimizer=opt,  metrics=['accuracy'])
model.summary()

history = model.fit(Xnew, Ynew, epochs=100, verbose=2, shuffle=True)

for i in range(0,10):
	results = model.predict(Xnew[i:i+1])
	print(Xnew[i:i+1],"->",strech(results[0,0]))


