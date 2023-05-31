import json

import pika
from flask import Flask

from DatabaseManager import execute_query

app = Flask(__name__)

QUEUE_HOST = 'rabbitmq'
QUEUE_NAME = 'medition_queue'

connection = pika.BlockingConnection(pika.ConnectionParameters(host=QUEUE_HOST))
channel = connection.channel()
channel.queue_declare(queue=QUEUE_NAME)


def callback(body):
    body = json.loads(body)
    print(body)
    execute_query("INSERT INTO medition(sensor_id,date,value) VALUES(%s,%s,%s)", body)
    print(" [x] Mensaje recibido %s" % body)


channel.basic_consume(queue=QUEUE_NAME, on_message_callback=callback, auto_ack=True)
channel.start_consuming()

if __name__ == '__main__':
    app.run()
