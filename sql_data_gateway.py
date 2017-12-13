import psycopg2

try:
	con = psycopg2.connect("dbname='bme590' user='postgres' host='vcm-1842.vm.duke.edu' port=5433 password = 'bme590'")
except:
	print("Unable to connect to the database")

cur = con.cursor()
cur.execute("""Insert into melanoma_images (image_id, model_prediction, actual_result) values("ISIC_0000000", null, "benign");""")
cur.execute("""SELECT image_id from melanoma_images;""")

rows = cur.fetchall()

print("\nShow me the databases:\n")
for row in rows:
	print("   ", row[0])