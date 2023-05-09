import json

import pika
from flask import Flask

from DatabaseManager import execute_query

app = Flask(__name__)

QUEUE_HOST = 'rabbitmq'
QUEUE_NAME = 'measurements_queue'

# Creo la conexion con el broker
connection = pika.BlockingConnection(pika.ConnectionParameters(host=QUEUE_HOST))
channel = connection.channel()

# Declaramos la cola que va a utiliar
channel.queue_declare(queue=QUEUE_NAME)


# Creo la función que va a ejecutarse al recibir un mensaje
def callback(ch, method, properties, body):
    # Inserta en la base
    body = json.loads(body)
    print(body)
    execute_query("INSERT INTO medida(producer_id,date,value) VALUES(%s,%s,%s)", body)
    print(" [x] Mensaje recibido %s" % body)


# Configuro la suscripción
channel.basic_consume(queue=QUEUE_NAME, on_message_callback=callback, auto_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')

# Quedo a la escucha de nuevos mensajes
channel.start_consuming()

if __name__ == '__main__':
    app.run()
