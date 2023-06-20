import datetime
import json
import logging
import random
import sys
import time

import pytz
import requests
import schedule

logging.basicConfig(stream=sys.stdout, level=logging.INFO)


def authenticate():
    url = 'http://api-gateway:8080/get_token'
    message = {"username": "sensor01",
               "password": "99l0*2%aeX4Z"}
    return requests.post(url=url, json=message)


def send_request(message, authToken):
    url = 'http://api-gateway:8080/insert_data'
    bearerToken = "Bearer %s" % authToken
    return requests.post(url=url, json=message, headers={'Authorization': bearerToken})


def batch_job():
    logging.info("Ejecutando proceso batch...")
    uruguay_timezone = pytz.timezone('America/Montevideo')
    randomValue = random.randint(10, 50)
    message = json.dumps((1, datetime.datetime.now(tz=uruguay_timezone).strftime("%Y-%m-%d %H:%M:%S"), randomValue))
    jwtResponse = authenticate()
    authToken = jwtResponse.content.decode().split(':')[1].replace('}', '').replace('"', '')
    send_request(message, authToken)
    logging.info("[x] Mensaje enviado: %s " % message)


time.sleep(40)
schedule.every(5).seconds.do(batch_job)

while True:
    schedule.run_pending()
    time.sleep(5)
