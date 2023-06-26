import datetime
import logging
import requests
import schedule
import sys
import time

import DatabaseManager

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
interval_time = 10
subject = "ALERTA - FUGA DE AGUA"


def send_mail(subject, body):
    url = "http://sv-email/email"
    mail = {
        "subject": subject,
        "body": body
    }
    response = requests.post(url, json=mail)
    return response.status_code


def periodic_analysis():
    logging.info("""
    --------------------------------------------")
    Se analiza
    """)
    result = DatabaseManager.get_measurements_from()

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


def batch_job():
    logging.info("Ejecutando proceso batch...")
    periodic_analysis()


time.sleep(30)
schedule.every(interval_time).seconds.do(batch_job)

while True:
    schedule.run_pending()
