import psycopg2
import sys

con = None
dbname = "bme590"

try:
	con = psycopg2.connect("dbname='bme590' user='postgres' host='localhost' port=5433 password='bme590'")
	con.autocommit = True
	cur = con.cursor()
	cur.execute("CREATE TABLE melanoma_images(Image_Id SERIAL PRIMARY KEY, Model_Prediction VARCHAR(20));")

	con.commit()
except psycopg2.DatabaseError as e:
	if con:
		con.rollback()

	print('Error %s' % e)
	sys.exit(1)
finally:
	if con:
		con.close()
