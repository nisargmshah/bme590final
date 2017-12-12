from flask import Flask, request, jsonify
#from get_prediction import get_prediction
from ImageConversion import Image

app = Flask(__name__)


@app.route("/upload_image", methods=['POST'])
def lesion():
    """

    :return: the predicted classification of the lesion (benign or malignant)
    """

    image = request.args.get('fileData')
    predictions = image # remove
    #lesion_image = Image(input_image=image)
    #(labels, predictions) = get_prediction(lesion_image.bin_from_64())
    return predictions
