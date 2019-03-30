from flask import Flask
from core import classify
app = Flask(__name__)

@app.route("/")
def hello():
	result = classify('testimg.jpg')
	print(type(result))
	print(result)
	return str(result)
    

if __name__ == '__main__':
	app.run()