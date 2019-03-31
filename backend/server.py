from flask import Flask
from flask import request
from flask import jsonify
from core import getPrediction
import numpy as np
from kernel import mentalHelp, str_recc
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)


dummyReturn = {
	'prediction': 86.32,		# float 0 to 100, how good your mental health is (0 is bad)
	'BMI': -12.3,				# float -100 to 100, recommendation reduce or increase your bmi by x
	'exercise': 34.3			# float, recommendation to increase weekly workout time by x minutes
	#...
}

@app.route("/predict", methods=['POST'])
def prediction():
	requestJson = request.get_json()
	#print(requestJson)
	if not requestJson["form"]:
		abort(400)
	
	pred, recc, mess = mentalHelp(requestJson["form"])[0]

	inputData = jsonify({
			'prediction' : pred,
			'reccomendation' : recc,
			'message' : mess,
			'str_recc' : str_recc(recc)
		}), 200
	#inputData.headers.add('Access-Control-Allow-Origin', 'localhost')
	return inputData

@app.route("/testApi", methods=['GET'])
def display():
	inp = np.array([[0.26826923, 0.16643159, 0.17498192, 0.08873505, 0.58562555, 0.37325349,0.76,0.59472422,0.57688113,0.85923218,0.41318477,0.27671914,0.58829365]])
	return str(getPrediction(inp))

if __name__ == '__main__':
	app.run()
