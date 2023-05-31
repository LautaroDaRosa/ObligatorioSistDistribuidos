import pymysql
import datetime

def connect_to_database():
    conn = pymysql.connect(
        host='db',
        user='root',
        password='12345',
        db='test-db',
        port=3306
    )
    return conn

def close_connection(conn):
    conn.close()

def get_measurements_from(seconds):
    conn = connect_to_database()
    cursor = conn.cursor()
    
    query = """
        SELECT a.medition_id, b.sensor_id, b.ubication, DATE_FORMAT(a.date, '%%Y-%%m-%%d %%H:%%i:%%s'), b.min_value, b.max_value, a.value
        FROM medition a INNER JOIN sensor b ON a.sensor_id = b.sensor_id
        WHERE a.date >= DATE_SUB(NOW(), INTERVAL %s SECOND)
        AND (a.value < b.min_value OR a.value > b.max_value)
        AND a.analyzed = 0;
        """
    cursor.execute(query, seconds)
    resultados = cursor.fetchall()

    return resultados

def set_analyzed(medition_id):
    conn = connect_to_database()
    cursor = conn.cursor()
    
    query = """
    UPDATE medition
    SET analyzed = 1
    WHERE medition_id = %s;
    """
    cursor.execute(query, (medition_id,))
    
    # Confirmar los cambios en la base de datos
    conn.commit()

    # Cerrar la conexión y el cursor
    cursor.close()
    conn.close()

    # Devolver algún indicador de éxito, si es necesario
    return True
