import datetime
import json
import logging
import random
import sys
import time

import requests
import schedule

logging.basicConfig(stream=sys.stdout, level=logging.INFO)


def send_request(message):
    url = 'http://api-gateway:8080/insertData'
    return requests.post(url=url, json=message)


def batch_job():
    logging.info("Ejecutando proceso batch...")
    randomValue = random.randint(10, 50)
    message = json.dumps((1, datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), randomValue))
    send_request(message)
    logging.info("[x] Mensaje enviado: %s " % message)


time.sleep(40)
schedule.every(5).seconds.do(batch_job)

while True:
    schedule.run_pending()
    time.sleep(5)
