import json
import logging
import sys
import time

import requests
import datetime
import schedule
import DatabaseManager

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
interval_time = 10

def send_mail(subject, body):
    url = "http://sv-data-analytics/email"
    mail = {
        "subject": subject,
        "body": body
    }

    return print("Envio el mail: " + mail.__str__())
    #response = requests.post(url, data = mail)
    #return response.status_code

def periodic_analysis(interval):
    # Obtener los datos de la base de datos
    print("--------------------------------------------")
    print("Se analiza con intervalo " + str(interval))
    result = DatabaseManager.get_measurements_from(interval)

    # Realizar el envío de los datos
    for measure in result:
        medition_id, sensor_id, ubication, date, min_value, max_value, value = measure
        print("--------------------")
        print(datetime.datetime.now())
        print("--------------------")
        print("Medition ID:", medition_id)
        print("Sensor ID:", sensor_id)
        print("Ubication:", ubication)
        print("Date:", date)
        print("Min Value:", min_value)
        print("Max Value:", max_value)
        print("Value:", value)
        print("--------------------")
        DatabaseManager.set_analyzed(medition_id)
    # Imprimir el resultado del análisis
    print("Análisis periódico: ")
    print("Me duermo " + str(interval) + " segundos")
    print("--------------------------------------------")

def batch_job():
    logging.info("Ejecutando proceso batch...")
    periodic_analysis(12000)

time.sleep(30)
schedule.every(interval_time).seconds.do(batch_job)

while True:
    schedule.run_pending()