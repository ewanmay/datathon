# core.py
#
# -- this is the main logic for processing the data
# below is just a test to make sure machine learning predictions work 
# run ` python core.py `
# make sure you pip install keras, numpy, pillow and tensorflow

from keras.models import model_from_json
import tensorflow as tf
import keras
import numpy as np
import keras.backend as K

from keras.backend.tensorflow_backend import set_session

ref = {
	"Body mass index, adjusted self-reported, adult (18 years and over), obese":0,
	"Body mass index, adjusted self-reported, adult (18 years and over), overweight":1,
	"Body mass index, self-reported, youth (12 to 17 years old), overweight or obese":2,
	"Current smoker, daily or occasional":3,
	"Fruit and vegetable consumption, 5 times or more per day":4,
	"High blood pressure":5,
	"Life satisfaction, satisfied or very satisfied":6,
	"Mood disorder":7,
	"Perceived health, very good or excellent":8,
	"Perceived life stress, most days quite a bit or extremely stressful":9,
	"Self-reported physical activity, 150 minutes per week, adult (18 years and over)":10,
	"Self-reported physical activity, average 60 minutes per day, youth (12 to 17 years old)":11,
	"Sense of belonging to local community, somewhat strong or very strong":12
}
def _compute_gradients(tensor, var_list):
  grads = tf.gradients(tensor, var_list)
  return [grad if grad is not None else tf.zeros_like(var)
		  for var, grad in zip(var_list, grads)]

def reverse(inputArr, inputPlaceholder):
	loss = 1-K.mean(model.layers[-1].output)
	#print(inputArr.dtype)
	grads = _compute_gradients(loss, [inputPlaceholder])[0]
	grads /= (K.sqrt(K.mean(K.square(grads)))+ 1e-5) #yikes

	iterate = K.function([inputPlaceholder],[loss,grads])

	step = 0.02

	inputArrNew = inputArr.copy()
	loss_val, grads_val = (0,0)

	for i in range(100):
		loss_val, grads_val = iterate([inputArrNew])
		for ind in range(0,13):
			if ind in [12,6,7]:
				continue
			new_val = inputArrNew[0,ind] - grads_val[0][ind] * step
			inputArrNew[0,ind] = min(max(new_val, 0),1)
		print("iter:",i,np.mean(loss_val))

	print("Before:")
	print(inputArr,"->",model.predict(inputArr))


	print("After:")
	print(inputArrNew,"->",model.predict(inputArrNew))

	# loss_val, grads_val = iterate([inputArr])
	# print("Gradients:")
	# print(-grads_val)
	return [model.predict(inputArr)[0,0], model.predict(inputArrNew)[0,0]], (inputArrNew-inputArr)
config = tf.ConfigProto(
    gpu_options = tf.GPUOptions(per_process_gpu_memory_fraction=0.8)
    # device_count = {'GPU': 1}
)
config.gpu_options.allow_growth = True
session = tf.Session(config=config)
set_session(session)

json_file = open('model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()
model = model_from_json(loaded_model_json)
# load weights into new model
model.load_weights("model.h5")
opt = keras.optimizers.Adam(lr=0.00003)
model.compile(loss='mean_squared_error', optimizer=opt)
model._make_predict_function()
print("Loaded model from disk")
graph = tf.get_default_graph()

varhello = 'Hello World from core!'

def getPrediction(inputData):
	#return varhello

	#with graph.as_default():
	preds = model.predict(inputData)
	
	# decode the results into a list of tuples (class, description, probability)
	# (one such list for each sample in the batch)
	global graph
	with graph.as_default():
		return reverse(inputData, model.input)




