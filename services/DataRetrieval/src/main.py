from datetime import datetime
from functools import wraps

from flask import jsonify, Flask, request
from pydantic import BaseModel

from Middleware import jwt_middleware

import DatabaseManager

app = Flask(__name__)

def jwt_protected(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        middleware = jwt_middleware('http://sv-jwt/check_token')
        return middleware(func)(*args, **kwargs)
    return wrapper


@app.get('/getData')
@jwt_protected
def getData(request_middleware):
    rows = DatabaseManager.execute_query("SELECT * FROM medition")
    data = [{'id': row[0], 'sensor_id': row[1], 'date': row[2], 'value': row[3]} for row in rows]
    return jsonify(data)



@app.post('/insertData')
@jwt_protected
def insertData(request_middleware):
    print(request.get_json())
    body = request.get_json()
    row = DatabaseManager.execute_insert(body['sensor_id'], body['date_time'], body['value'])
    data = {'id': row[0], 'sensor_id': row[1], 'date': row[2], 'value': row[3]}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
