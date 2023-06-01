import datetime
import logging
import sys
import time

import requests
import schedule

import DatabaseManager

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
interval_time = 10
subject = "ALERTA - FUGA DE AGUA"


def send_mail(subject, body):
    url = "http://api-gateway:8080/send_email"
    mail = {
        "subject": subject,
        "body": body
    }
    response = requests.post(url, json=mail)
    return response.status_code


def periodic_analysis(interval):
    # Obtener los datos de la base de datos
    logging.info("""
    --------------------------------------------")
    Se analiza con intervalo {}
    """.format(str(interval)))
    result = DatabaseManager.get_measurements_from(interval)

    # Realizar el envío de los datos
    for measure in result:
        medition_id, sensor_id, ubication, date, min_value, max_value, value = measure
        body = """
        --------------------
        {}
        --------------------
        Medition ID: {}
        Sensor ID: {}
        Ubication: {}
        Date: {}
        Min Value: {}
        Max Value: {}
        Value: {}
        --------------------
        """.format(datetime.datetime.now(), medition_id, sensor_id, ubication, date, min_value, max_value, value)
        logging.info(body)
        DatabaseManager.set_analyzed(medition_id)
        send_mail(subject, body)
    # Imprimir el resultado del análisis
    logging.info("""
    --------------------------------------------
    Análisis periódico:
    Me duermo {} segundos
    --------------------------------------------
    """.format(str(interval)))


def batch_job():
    logging.info("Ejecutando proceso batch...")
    periodic_analysis(12000)


time.sleep(30)
schedule.every(interval_time).seconds.do(batch_job)

while True:
    schedule.run_pending()
