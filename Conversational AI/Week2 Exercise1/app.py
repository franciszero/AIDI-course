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
