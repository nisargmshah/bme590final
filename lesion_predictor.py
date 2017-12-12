from flask import Flask, request, jsonify
from get_prediction import get_prediction

app = Flask(__name__)


@app.route("/upload_image", methods=['POST'])
def lesion():




#(labels, predictions) = get_prediction(image)