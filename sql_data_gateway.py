import psycopg2

try:
	con = psycopg2.connect("dbname='bme590' user='postgres' host='db' port=5432 password = 'bme590'")
except:
	print("Unable to connect to the database")

cur = con.cursor()
cur.execute("""SELECT image_id from melanoma_images""")

rows = cur.fetchall()

print("\nShow me the databases:\n")
for row in rows:
	print("   ", row[0])
