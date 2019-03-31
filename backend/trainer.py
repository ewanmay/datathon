import numpy as np
import matplotlib.pyplot as plt
import pandas
import keras
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import Dense, LeakyReLU, Dropout
from keras.wrappers.scikit_learn import KerasRegressor
import keras.backend as K
from core import ref

def stretch(num):
	return num * (maxY-minY) +minY

def reverse(inputArr):
	loss = 1 - K.mean(model.output)
	grads = K.gradients(loss, inputArr)
	grads /= (K.sqrt(K.mean(K.square(grads)))+ 1e-5) #yikes

	iterate = K.function([inputArr],[loss,grads])

	step = 0.1

	inputArrNew = inputArr.copy()

	for i in range(100):
	     loss_val, grads_val = iterate([inputArrNew])
	     inputArrNew -= grads_val[0] * step
	     print("iter:",i,np.mean(loss_value))

	print("Before:")
	print(model.predict(inputArr))


	print("After:")
	print(model.predict(inputArrNew))
# load dataset
dataframe = pandas.read_csv("datafiles/statscanada/newMH_percents.csv", header=0)
dataset = dataframe.values
# split into input (X) and output (Y) variables
X = np.concatenate((dataset[:,5:-4], dataset[:,-3:]), axis = 1)
Y = dataset[:,-4]
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
Xtrain, Xtest, Ytrain, Ytest = train_test_split(Xnew, Ynew, test_size=0.2)

print(Xnew)
print(Y)

opt = keras.optimizers.Adam(lr=0.00003)

model = Sequential()
model.add(Dense(13, input_dim=13, kernel_initializer='normal', activation='relu'))
model.add(Dense(100, kernel_initializer='normal', activation=LeakyReLU()))
model.add(Dense(50, kernel_initializer='normal', activation=LeakyReLU()))
model.add(Dense(25, kernel_initializer='normal', activation=LeakyReLU()))
model.add(Dense(1, kernel_initializer='normal', activation='sigmoid'))
model.compile(loss='mean_squared_error', optimizer=opt,  metrics=['accuracy'])
model.summary()

history = model.fit(Xtrain, Ytrain, epochs=200, validation_data=(Xtest,Ytest), verbose=2, shuffle=True)
# "Loss"
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('model loss')
plt.ylabel('loss')
plt.xlabel('epoch')
plt.legend(['train', 'validation'], loc='upper left')
plt.show()

for i in range(0,len(Xtest)):
	results = model.predict(Xtest[i:i+1])
	print(Xtest[i:i+1],"->",(results[0,0]), (Ytest[i:i+1]))

scores = model.evaluate(Xtest, Ytest, verbose=1)
print(scores)

newPatient = Xtest[2:3]
print("-------------")
print(K.mean(model.predict(newPatient)))
print("-------------")
print(newPatient)
print(stretch(model.predict(newPatient)[0,0]))

reverse(newPatient)

newPatient[0,ref["Fruit and vegetable consumption, 5 times or more per day"]] -= 0.3
newPatient[0,ref["Perceived life stress, most days quite a bit or extremely stressful"]] += 0.3
print(newPatient)
print(stretch(model.predict(newPatient)[0,0]))


