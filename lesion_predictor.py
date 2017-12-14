from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from get_prediction import get_prediction
from ImageConversion import Image

app = Flask(__name__)
CORS(app)

@app.route("/upload_images", methods=['POST'])
def lesion():
    """

    :return: the predicted classification of the lesion (benign or malignant)
    """
    image = request.json['fileData']
    filename = "example.jpg"
    #the below line is for testing outside the docker container only
    #predictions = image

    lesion_image = Image(input_image=image, file=filename)
    lesion_image.save_image_string(file=lesion_image.__filename)
    lesion_image.__image = lesion_image.encode_image_string(file=lesion_image.__filename)
    (labels, predictions) = get_prediction(lesion_image.print2())
    return jsonify(predictions)

