from flask import Flask
import tensorflow as tf
from core import classify
app = Flask(__name__)

@app.route("/")
def hello():
	return str(classify('testimg.jpg'))
    

if __name__ == '__main__':
	app.run()