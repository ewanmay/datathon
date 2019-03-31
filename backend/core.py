# core.py
#
# -- this is the main logic for processing the data
# below is just a test to make sure machine learning predictions work 
# run ` python core.py `
# make sure you pip install keras, numpy, pillow and tensorflow

from keras.applications import mobilenet_v2
from keras.preprocessing import image
from keras.applications.mobilenet_v2 import preprocess_input, decode_predictions
import tensorflow as tf
import numpy as np

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

config = tf.ConfigProto(
    gpu_options = tf.GPUOptions(per_process_gpu_memory_fraction=0.8)
    # device_count = {'GPU': 1}
)
config.gpu_options.allow_growth = True
session = tf.Session(config=config)
set_session(session)

model = mobilenet_v2.MobileNetV2(input_shape=None, alpha=1.0, depth_multiplier=1, include_top=True, weights='imagenet', input_tensor=None, pooling=None, classes=1000)
model._make_predict_function()
graph = tf.get_default_graph()

varhello = 'Hello World from core!'

def classify(img_path='testimg.jpg'):
	#return varhello
	
	img = image.load_img(img_path, target_size=(224, 224))
	x = image.img_to_array(img)
	x = np.expand_dims(x, axis=0)
	x = preprocess_input(x)

	with graph.as_default():
		preds = model.predict(x)
	
	# decode the results into a list of tuples (class, description, probability)
	# (one such list for each sample in the batch)
	return decode_predictions(preds, top=3)[0]
# Predicted: [(u'n02504013', u'Indian_elephant', 0.82658225), (u'n01871265', u'tusker', 0.1122357), (u'n02504458', u'African_elephant', 0.061040461)]

def compute(newPatient):
	return model.predict(newPatient)[0,0], reverse(newPatient)



