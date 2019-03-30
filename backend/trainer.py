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

def stretch(num):
	return num * (maxY-minY) +minY
# load dataset
dataframe = pandas.read_csv("datafiles/statscanada/newMH.csv", header=1)
dataset = dataframe.values
"Perceived mental health, fair or poor","Perceived mental health, very good or excellent",
# split into input (X) and output (Y) variables
X = dataset[:,1:-1]
Y = dataset[:,-1]
#X = np.reshape(X, (-1,1))
Y = np.reshape(Y, (-1,1))

minY = np.min(Y)
maxY = np.max(Y)

scaler = MinMaxScaler()
scaler.fit(X)
Xnew=scaler.transform(X)
# Xnew = X
scaler.fit(Y)
Ynew=scaler.transform(Y)
# Ynew = Y

print(Xnew)
print(Ynew)
opt = keras.optimizers.Adam(lr=0.001)

model = Sequential()
model.add(Dense(3, input_dim=3, kernel_initializer='normal', activation='relu'))
model.add(Dense(10, kernel_initializer='normal', activation=LeakyReLU()))
model.add(Dense(5, kernel_initializer='normal', activation=LeakyReLU()))
model.add(Dense(1, kernel_initializer='normal', activation='sigmoid'))
model.compile(loss='mean_squared_error', optimizer=opt,  metrics=['accuracy'])
model.summary()

history = model.fit(Xnew, Ynew, epochs=100, verbose=2, shuffle=True)

for i in range(0,10):
	results = model.predict(Xnew[i:i+1])
	print(Xnew[i:i+1],"->",stretch(results[0,0]), Ynew[i:i+1])


