from flask import Flask, request

app = Flask(__name__)
app.debug = True


@app.route("/")
def hello():
    return "<p>Hello 111</p>"


@app.route("/webhook", methods=['POST'])
def foo():
    reply = "" "xxx"
    body = request.json
    city = body['queryResult']['parameters']['geo-city']
    temperature = str(random)
    return reply
