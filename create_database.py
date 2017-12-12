import psycopg2
import sys

con = None
dbname = "nms"

try:
	con = psycopg2.connect("dbname='nms' user='nms' host='localhost' password='bme590'")
	con.autocommit = True
	cur = con.cursor()
	cur.execute("CREATE TABLE melanoma_images(Image_Id INTEGER PRIMARY KEY, Model_Prediction VARCHAR(10), Actual_Result VARCHAR(10));")
	cur.execute("CREATE TABLE web_client_users(User_Id INTEGER PRIMARY KEY, Image_Id INTEGER, Date_Uploaded TIMESTAMP);")
	con.commit()
except psycopg2.DatabaseError as e:
	if con:
		con.rollback()

	print('Error %s' % e)
	sys.exit(1)
finally:
	if con:
		con.close()