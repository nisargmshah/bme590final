from gcr.io/tensorflow/tensorflow:latest
RUN pip install Flask
RUN pip install psycopg2
ENV FLASK_APP=main.py
