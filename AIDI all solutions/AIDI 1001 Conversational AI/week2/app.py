from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def hello():
    return "<p>Hello 111</p>"


@app.route("/json")
def foo():
    return "xxx"


@app.route("/webpage")
def webpage():
    return render_template("1.html")


#
# @app.getdocpic("/getdog")
# def getdog():
#     return render_template("1.html")


# see: https://github.com/rbigelow/flask-intro/blob/main/app.py
@app.route("/ross")
def ross():
    return "<p> Hi I'm Ross. </p><img src='https://bigelow.cc/wp-content/uploads/sites/3/cropped-ross-bigelow.png'> "


myData = {
    "name": 'Ross Bigelow',
    "dream": "To inspire others to fulfil thier dreams.",
    'age': 1,
    'birthdate': "2020-01-01"
}


@app.route("/json")
def myJson():
    return myData

