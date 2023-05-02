from flask import Flask, jsonify
# import psycopg2

# app = Flask(__name__)

# conn = psycopg2.connect(database="test-db", user="root", password="12345", host="localhost", port="3306")
# cur = conn.cursor()

import pymysql

connection = pymysql.connect(
    host='localhost',
    user='root',
    password='12345',
    db='test-db',
    port=3306
)

cursor = connection.cursor()

@app.route('/getData')
def getData():
    cursor.execute("SELECT * FROM measurement_data;")
    rows = cursor.fetchall()
    data = [{'id': row[0], 'producer_id': row[1], 'date': row[2], 'value': row[3]} for row in rows]
    return jsonify(data)

