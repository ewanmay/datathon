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
from keras.layers import Dense, LeakyReLU
from keras.wrappers.scikit_learn import KerasRegressor

ref = {
	"Body mass index, adjusted self-reported, adult (18 years and over), obese":0,
	"Body mass index, adjusted self-reported, adult (18 years and over), overweight":1,
	"Body mass index, self-reported, youth (12 to 17 years old), overweight or obese":2,
	"Current smoker, daily or occasional":3,
	"Fruit and vegetable consumption, 5 times or more per day":4,
	"Life satisfaction, satisfied or very satisfied":5,
	"Mood disorder":6,
	"Perceived health, very good or excellent":7,
	"Perceived life stress, most days quite a bit or extremely stressful":8,
	"Self-reported physical activity, 150 minutes per week, adult (18 years and over)":9,
	"Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)":10,
	"Sense of belonging to local community, somewhat strong or very strong":11
}

def stretch(num):
	return num * (maxY-minY) +minY
# load dataset
dataframe = pandas.read_csv("datafiles/statscanada/newMH.csv", header=0)
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
print([stretch(num) for num in Ynew])
opt = keras.optimizers.Adam(lr=0.0001)

model = Sequential()
model.add(Dense(12, input_dim=12, kernel_initializer='normal', activation='relu'))
model.add(Dense(100, kernel_initializer='normal', activation=LeakyReLU()))
model.add(Dense(50, kernel_initializer='normal', activation=LeakyReLU()))
model.add(Dense(25, kernel_initializer='normal', activation=LeakyReLU()))
model.add(Dense(1, kernel_initializer='normal', activation='sigmoid'))
model.compile(loss='mean_squared_error', optimizer=opt,  metrics=['accuracy'])
model.summary()

history = model.fit(Xtrain, Ytrain, epochs=300, validation_data=(Xtest,Ytest), verbose=2, shuffle=True)
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
	print(Xtest[i:i+1],"->",stretch(results[0,0]), stretch(Ytest[i:i+1]))

scores = model.evaluate(Xtest, Ytest, verbose=1)
print(scores)

newPatient = Xtest[2:3]
print(newPatient)
print(stretch(model.predict(newPatient)[0,0]))

newPatient[0,ref["Fruit and vegetable consumption, 5 times or more per day"]] -= 0.3
newPatient[0,ref["Perceived life stress, most days quite a bit or extremely stressful"]] += 0.3

print(newPatient)
print(stretch(model.predict(newPatient)[0,0]))


