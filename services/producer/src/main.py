import pika
import uvicorn
from fastapi import FastAPI, Request

app = FastAPI()

QUEUE_HOST = 'rabbitmq'
QUEUE_NAME = 'medition_queue'


@app.post("/insertData")
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
