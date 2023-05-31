import json
import logging
import sys
import time

import requests
import schedule

logging.basicConfig(stream=sys.stdout, level=logging.INFO)

MESSAGES = [
    # json.dumps((50, '2023-05-14 11:11:11', 50)),
    # json.dumps((60, '2023-06-15 11:11:11', 60)),
    # json.dumps((70, '2023-07-16 11:11:11', 70)),
    # json.dumps((80, '2023-08-17 11:11:11', 80)),
    json.dumps((1, '2023-09-18 11:11:11', 90))
]


def send_request(message):
    url = 'http://api-gateway:8080/insertData'
    return requests.post(url=url, json=message)


def batch_job():
    logging.info("Ejecutando proceso batch...")
    for message in MESSAGES:
        response = send_request(message)
        if (response.status_code == 200):
            logging.info("[x] Mensaje enviado: %s " % message)


time.sleep(40)
schedule.every(5).seconds.do(batch_job)

while True:
    schedule.run_pending()
    time.sleep(5)
