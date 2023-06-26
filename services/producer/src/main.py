import pika
import uvicorn
from fastapi import FastAPI, Request
from fastapi.exceptions import HTTPException
from fastapi.responses import JSONResponse
from functools import wraps

from Middleware import jwt_middleware

app = FastAPI()

QUEUE_HOST = 'rabbitmq'
QUEUE_NAME = 'medition_queue'


def jwt_protected(func):
    @wraps(func)
    async def wrapper(request: Request, *args, **kwargs):
        middleware = jwt_middleware('http://sv-jwt/check_token')
        try:
            response = await middleware(func, request)(*args, **kwargs)
            return response
        except HTTPException as e:
            return JSONResponse({"message": e.detail}, e.status_code)

    return wrapper


@app.post("/insertData")
@jwt_protected
async def sendMessages(request: Request):
    body_message = await request.json()
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=QUEUE_HOST))
    channel = connection.channel()
    channel.queue_declare(queue=QUEUE_NAME)
    channel.basic_publish(exchange='', routing_key=QUEUE_NAME, body=str(body_message))
    print("[x] Mensaje enviado: %s " % body_message)
    connection.close()
    return {"Success", 200}


if __name__ == '__main__':
    uvicorn.run(app, port=80, host="0.0.0.0")
