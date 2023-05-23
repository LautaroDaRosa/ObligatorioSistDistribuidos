import pymysql


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


def execute_query(query, params=None):
    conn = connect_to_database()
    cursor = conn.cursor()
    cursor.execute(query, params)
    conn.commit()
    results = cursor.fetchall()
    close_connection(conn)
    return results


def execute_get_data(params=None):
    query = "SELECT * FROM medition"
    conn = connect_to_database()
    cursor = conn.cursor()
    cursor.execute(query, params)
    conn.commit()
    results = cursor.fetchall()
    close_connection(conn)

    return results


def execute_insert(sensor_id, date_time, value):
    conn = connect_to_database()
    cursor = conn.cursor()
    query = "INSERT INTO medition(sensor_id, date, value) VALUES (%s, %s, %s)"
    params = (sensor_id, date_time, value)
    print("Inserto con los valores " + str(sensor_id) + " " + date_time + " " + str(value))
    cursor.execute(query, params)
    conn.commit()
    last_row_id = cursor.lastrowid
    cursor.execute("SELECT * FROM medition WHERE id=%s", (last_row_id,))
    result = cursor.fetchone()
    close_connection(conn)

    return result
