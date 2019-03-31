import numpy as np
import matplotlib.pyplot as plt
import pandas
import keras
import tensorflow as tf
from keras.models import model_from_json
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import Dense, LeakyReLU, Dropout, ReLU
from keras.wrappers.scikit_learn import KerasRegressor
import keras.backend as K
from core import ref, reverse

def stretch(num):
	return num * (maxY-minY) +minY

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

trainingMode = False
scaler = MinMaxScaler()
scaler.fit(X)
Xnew=scaler.transform(X)
# Xnew = X
scaler.fit(Y)
Ynew=scaler.transform(Y)
# Ynew = Y
Xtrain, Xtest, Ytrain, Ytest = train_test_split(Xnew, Ynew, test_size=0.2)

avg_values = np.mean(Xnew, axis=0)
print(avg_values)
# print(Xnew)
# print(Y)

def train():
	model = Sequential()
	if trainingMode:
		opt = keras.optimizers.Adam(lr=0.0001)
		model.add(Dense(13, input_dim=13, kernel_initializer='normal'))
		model.add(ReLU(max_value=1.))
		model.add(Dense(200, kernel_initializer='normal'))
		model.add(LeakyReLU())
		model.add(Dense(70, kernel_initializer='normal'))
		model.add(LeakyReLU())
		model.add(Dense(40, kernel_initializer='normal'))
		model.add(LeakyReLU())
		model.add(Dense(1, kernel_initializer='normal', activation='sigmoid'))
		model.compile(loss='mean_squared_error', optimizer=opt)
		model.summary()

		history = model.fit(Xtrain, Ytrain, epochs=2000, validation_data=(Xtest,Ytest), verbose=2, shuffle=True)
		# serialize model to JSON
		model_json = model.to_json()
		with open("model.json", "w") as json_file:
		    json_file.write(model_json)
		# serialize weights to HDF5
		model.save_weights("model.h5")
		print("Saved model to disk")
		# "Loss"
		plt.plot(history.history['loss'])
		plt.plot(history.history['val_loss'])
		plt.title('model loss')
		plt.ylabel('loss')
		plt.xlabel('epoch')
		plt.legend(['train', 'validation'], loc='upper left')
		plt.show()
	else:
		json_file = open('model.json', 'r')
		loaded_model_json = json_file.read()
		json_file.close()
		model = model_from_json(loaded_model_json)
		# load weights into new model
		model.load_weights("model.h5")
		opt = keras.optimizers.Adam(lr=0.00003)
		model.compile(loss='mean_squared_error', optimizer=opt)
		print("Loaded model from disk")

	for i in range(0,len(Xtest)):
		results = model.predict(Xtest[i:i+1])
		print(Xtest[i:i+1],"->",(results[0,0]), (Ytest[i:i+1]))

	scores = model.evaluate(Xtest, Ytest, verbose=1)
	print(scores)

	newPatient = np.array([[0.26826923, 0.16643159, 0.17498192, 0.08873505, 0.58562555, 0.37325349,0.76,0.59472422,0.57688113,0.85923218,0.41318477,0.27671914,0.58829365]])
	print("-------------")
	print(K.mean(model.layers[-1].output))
	print("-------------")
	print(newPatient)
	print(stretch(model.predict(newPatient)[0,0]))

	diff = reverse(np.array([[0.26826923, 0.16643159, 0.17498192, 0.08873505, 0.58562555, 0.37325349,0.76,0.59472422,0.57688113,0.85923218,0.41318477,0.27671914,0.58829365]]), model.input)
	print(diff)
	newPatient[0,np.argmax(diff[0])] += np.max(diff[0]) * 0.2
	print(newPatient)
	print((model.predict(newPatient)[0,0]))

