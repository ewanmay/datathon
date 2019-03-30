# core.py
#
# -- this is the main logic for processing the data
# below is just a test to make sure machine learning predictions work 
# run ` python core.py `
# make sure you pip install keras, numpy and tensorflow

from keras.applications import mobilenet_v2
from keras.preprocessing import image
from keras.applications.mobilenet_v2 import preprocess_input, decode_predictions
import tensorflow as tf
import numpy as np

from keras.backend.tensorflow_backend import set_session

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