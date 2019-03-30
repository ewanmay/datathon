from flask import Flask
from flask import request
from core import classify
app = Flask(__name__)

dummyReturn = {
	'prediction': 86.32,		# float 0 to 100, how bad your mental health is (100 is bad)
	'BMI': -12.3,				# float -100 to 100, recommendation reduce or increase your bmi by x
	'exercise': 34.3			# float, recommendation to increase weekly workout time by x minutes
	#...
}

@app.route("/predict", methods=['POST'])
def prediction():
    if not request.data:
        abort(400)
        
    return jsonify({'response' : dummyReturn}), 201
    

if __name__ == '__main__':
	app.run()