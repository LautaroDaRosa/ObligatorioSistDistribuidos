import asyncio
from typing import List
from datetime import datetime
from dbconn.db import db_connect, db_disconnect, get_data
from pydantic import BaseModel


class Data(BaseModel):
    id: int
    producer_id: int
    value: float
    date_time: datetime


class AnalysisResult(BaseModel):
    mean: float
    max: float
    min: float


async def analyze_data(data_list: List[Data]) -> AnalysisResult:
    for data in data_list:
        print(data)
    return "Se analizo todo"


async def periodic_analysis(interval: int):
    # Obtener la conexión a la base de datos
    conn = db_connect()

    while True:
        # Obtener los datos de la base de datos
        data = get_data(conn)

        # Realizar el análisis de los datos
        result = await analyze_data(data)

        # Imprimir el resultado del análisis
        print(f"Análisis periódico: {result}")

        # Esperar el tiempo especificado antes de volver a realizar el análisis
        await asyncio.sleep(interval)

    # Cerrar la conexión a la base de datos al finalizar el programa
    db_disconnect(conn)


if __name__ == "__main__":
    # Crear un loop de eventos
    loop = asyncio.get_event_loop()

    # Crear una tarea para realizar el análisis periódico
    interval = 15  # segundos
    analysis_task = loop.create_task(periodic_analysis(interval))
    print("Empiezo a analizar")

    try:
        # Ejecutar la tarea de análisis de manera continua
        loop.run_until_complete(analysis_task)
    except asyncio.CancelledError:
        pass

    # Cerrar el loop de eventos al finalizar el programa
    loop.close()