from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from get_prediction import get_prediction
from ImageConversion import Image
import matplotlib.image as mpimg
import psycopg2

app = Flask(__name__)
CORS(app)

con = None
dbname = "bme590"

@app.route("/upload_image", methods=['POST'])
def lesion():
    """

    :return: the predicted classification of the lesion (benign or malignant)
    """
    image = str(request.json['fileData'])
    index = 0
    found = False
    while (found is False) and index<len(image):
        if image[index]==',':
            image = image[index+1:len(image)]
        else:
            index = index + 1

    filename = "melanoma.jpg"
    #the below line is for testing outside the docker container only
    #predictions = str(lesion_image.__image)

    lesion_image = Image(input_image=image, thefilename=filename)
    lesion_image.save_image_string(file=filename)
    (labels, predictions) = get_prediction(mpimg.imread(filename))
    if(predictions[0]>=predictions[1]):
        result = "benign"
    else:
	   result = "malignant"
    
    try:
	   con = psycopg2.connect("dbname='bme590' user='postgres' host='localhost' port=5433 password='bme590'")
    except: 
	   print("Unable to connect to the database")

    cur = con.cursor()
    cur.execute("""Insert into melanoma_images(Model_Prediction) VALUES (%s);""", result)
    #cur.execute("""Select count(*) from melanoma_images where Model_Prediction == 'benign')

    return jsonify([result, count_benign, count_malignant])

