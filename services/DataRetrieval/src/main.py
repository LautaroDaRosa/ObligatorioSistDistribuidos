from flask import jsonify, Flask
from Middleware import jwt_middleware

import DatabaseManager

app = Flask(__name__)

@app.get('/getData')
@jwt_middleware('https://sv-jwt/check_token')
def getData():
    rows = DatabaseManager.execute_query("SELECT * FROM medition")
    data = [{'id': row[0], 'producer_id': row[1], 'date': row[2], 'value': row[3]} for row in rows]
    return jsonify(data)


@app.post('/insert')
def insertData():
    rows = DatabaseManager.execute_query(
        "INSERT INTO medition(producer_id,date,value) VALUES(10, '2023-05-04 11:11:11', 5)")
    data = [{'id': row[0], 'producer_id': row[1], 'date': row[2], 'value': row[3]} for row in rows]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
