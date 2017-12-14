from gcr.io/tensorflow/tensorflow:latest
RUN apt-get install python3
RUN pip install Flask
RUN pip install psycopg2
RUN pip install pytest
RUN pip install pytest-pep8
RUN pip install pytest-cov
RUN pip install numpy
RUN pip install pandas
RUN pip install flask
RUN pip install flask-cors
ENV FLASK_APP=lesion_predictor.py
