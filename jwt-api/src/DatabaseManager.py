import bcrypt
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


def check_credentials(username, password, params=None):
    conn = connect_to_database()
    cursor = conn.cursor()
    query = "SELECT * FROM user WHERE username = %s"
    values = username
    cursor.execute(query, values)
    conn.commit()
    results = cursor.fetchall()
    close_connection(conn)

    if not results:
        print("No se encontro el user " + username)
        return None

    hashed_password = results[0][1]  # El hash de la contraseña está en el tercer campo de la fila
    salt = str(results[0][4])
    expected_hash = bcrypt.hashpw(password.encode('utf-8'), salt.encode('utf-8')).decode('utf-8')
    if hashed_password == expected_hash:
        print("La contraseña es correcta")
        return results
    else:
        print("La contraseña es incorrecta")
        return None


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
