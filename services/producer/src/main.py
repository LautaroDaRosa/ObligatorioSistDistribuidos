from functools import wraps
from flask import jsonify, Flask, request
from Middleware import jwt_middleware

import pika

QUEUE_HOST = 'rabbitmq'
QUEUE_NAME = 'measurements_queue'

app = Flask(__name__)

def jwt_protected(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        middleware = jwt_middleware('http://sv-jwt/check_token')
        return middleware(func)(*args, **kwargs)
    return wrapper


@app.post('/insertData')
@jwt_protected
def insert_data(request_middleware):
    print(request.get_json())
    body = request.get_json()

    connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=QUEUE_HOST))
    channel = connection.channel()

    # Declaramos la cola que va a utiliar
    channel.queue_declare(queue=QUEUE_NAME)

    channel.basic_publish(exchange='', routing_key=QUEUE_NAME, body=str(body))
    return jsonify(body)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)