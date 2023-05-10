import asyncio

import pymysql

import DatabaseManager
from typing import List
from datetime import datetime
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
    while True:
        try:
            # Obtener los datos de la base de datos
            rows = DatabaseManager.execute_query("SELECT * FROM medition")

            # Realizar el análisis de los datos
            result = await analyze_data(rows)

            # Imprimir el resultado del análisis
            print(f"Análisis periódico: {result}")
        except:
            print("No se pudo hacer la consulta a la base de datos")

        # Esperar el tiempo especificado antes de volver a realizar el análisis
        await asyncio.sleep(interval)

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