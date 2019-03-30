from flask import Flask
from core import classify
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
    #return classify('testimg.jpg')

if __name__ == '__main__':
	app.run()