import uvicorn
from fastapi import FastAPI

import DatabaseManager
from Middleware import jwt_middleware

app = FastAPI()

from functools import wraps
from starlette.requests import Request


def jwt_protected(func):
    @wraps(func)
    def wrapper(request: Request, *args, **kwargs):
        middleware = jwt_middleware('http://sv-jwt/check_token')
        return middleware(func, request)(*args, **kwargs)

    return wrapper


@app.get('/getData')
@jwt_protected
def get_meditions(request: Request):
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
    return {"measurements": result}


if __name__ == '__main__':
    uvicorn.run(app, port=80, host="0.0.0.0")
