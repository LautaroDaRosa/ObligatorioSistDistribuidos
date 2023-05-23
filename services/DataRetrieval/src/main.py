from functools import wraps
from flask import jsonify, Flask, request
from Middleware import jwt_middleware
from datetime import datetime

import DatabaseManager
import json

app = Flask(__name__)

def jwt_protected(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        middleware = jwt_middleware('http://sv-jwt/check_token')
        return middleware(func)(*args, **kwargs)
    return wrapper


def serialize_datetime(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()  # Convertir el objeto datetime a una cadena en formato ISO

    # Si el objeto no es un datetime, dejar que el serializador por defecto se encargue de él
    raise TypeError(f"Object of type {obj.__class__.__name__} is not JSON serializable")


@app.get('/getData')
@jwt_protected
def get_meditions(request_middleware):
    meditions = DatabaseManager.execute_get_data()
    return json.dumps(meditions, default = serialize_datetime), 200, {'Content-Type': 'application/json'}


@app.post('/insertData')
@jwt_protected
def insert_data(request_middleware):
    print(request.get_json())
    body = request.get_json()
    data = DatabaseManager.execute_insert(body['sensor_id'], body['date_time'], body['value'])
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
