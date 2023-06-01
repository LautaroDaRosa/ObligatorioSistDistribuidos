from functools import wraps
from flask import Flask
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
    result = []
    for measure in meditions:
        medition_id, sensor_id, ubication, date, min_value, max_value, value = measure
        measure_json = {
            "medition_id": medition_id,
            "sensor_id": sensor_id,
            "ubication": ubication,
            "date": date,
            "min_value": min_value,
            "max_value": max_value,
            "value": value
        }
        result.append(measure_json)
    return json.dumps(result, default=serialize_datetime), 200, {'Content-Type': 'application/json'}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
