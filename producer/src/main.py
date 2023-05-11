# SEND REQUESTS, NEEDS API-GATEWAY//////////////////////////

# import requests
# import threading
# import time
#
# def send_request():
#     url = 'https://example.com'  # Replace with your URL
#     response = requests.get(url)
#     print(response.status_code)  # Print the response status code
#
# def start_service():
#     while True:
#         send_request()
#         time.sleep(10)  # Wait for 10 seconds before sending the next request
#
# if __name__ == '__main__':
#     t = threading.Thread(target=start_service)
#     t.start()


# APP ENDPOINT INSERT//////////////////////////


# import json
#
# import pika
# from flask import Flask, make_response
#
# app = Flask(__name__)
#
# QUEUE_HOST = 'localhost'
# QUEUE_NAME = 'measurements_queue'
#
# MESSAGES = [
#     json.dumps((50, '2023-05-14 11:11:11', 50)),
#     json.dumps((60, '2023-06-15 11:11:11', 60)),
#     json.dumps((70, '2023-07-16 11:11:11', 70)),
#     json.dumps((80, '2023-08-17 11:11:11', 80)),
#     json.dumps((90, '2023-09-18 11:11:11', 90))
# ]
#
#
# @app.post("/sendMessages")
# def sendMessages():
#     # Establecemos una conexion con el broker
#     connection = pika.BlockingConnection(
#         pika.ConnectionParameters(host=QUEUE_HOST))
#     channel = connection.channel()
#
#     # Declaramos la cola que va a utiliar
#     channel.queue_declare(queue=QUEUE_NAME)
#
#     for message in MESSAGES:
#         # Publico los mensajes en la cola
#         channel.basic_publish(exchange='', routing_key=QUEUE_NAME, body=message)
#         print("[x] Mensaje enviado: %s " % message)
#
#     # Cierro la conexion con la cola
#     connection.close()
#     return make_response("Success", 200)

# if __name__ == '__main__':
#     app.run(port=5001)


# BATCH INSERT//////////////////////////


import json
import time

import pika
import schedule

QUEUE_HOST = 'localhost'
QUEUE_NAME = 'medition_queue'

MESSAGES = [
    json.dumps((1, '2023-05-14 11:11:11', 50)),
    json.dumps((2, '2023-06-15 11:11:11', 60)),
    json.dumps((3, '2023-07-16 11:11:11', 70)),
    json.dumps((1, '2023-08-17 11:11:11', 80)),
    json.dumps((2, '2023-09-18 11:11:11', 90))
]


def batch_job():
    # Aquí se coloca el código del proceso batch que se quiere ejecutar
    print("Ejecutando proceso batch...")
    # Establecemos una conexion con el broker
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host=QUEUE_HOST))
    channel = connection.channel()

    # Declaramos la cola que va a utiliar
    channel.queue_declare(queue=QUEUE_NAME)

    for message in MESSAGES:
        # Publico los mensajes en la cola
        channel.basic_publish(exchange='', routing_key=QUEUE_NAME, body=message)
        print("[x] Mensaje enviado: %s " % message)

    # Cierro la conexion con la cola
    connection.close()


# Se programa el proceso batch para que se ejecute cada hora
schedule.every(5).seconds.do(batch_job)

while True:
# Se ejecuta la cola de tareas de schedule
    schedule.run_pending()
    time.sleep(5)
