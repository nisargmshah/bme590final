import psycopg2
import sys

con = None
dbname = "nms"

try:
    #con = psycopg2.connect("dbname='bme590' user='postgres' host='db' port=5432 password='bme590'")
	con = psycopg2.connect("dbname='bme590' user='postgres' host='vcm-1842.vm.duke.edu' port=5433 password='bme590'")
	con.autocommit = True
	cur = con.cursor()
	cur.execute("CREATE TABLE melanoma_images(Image_Id VARCHAR(20) PRIMARY KEY, Model_Prediction VARCHAR(20), Actual_Result VARCHAR(20));")
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