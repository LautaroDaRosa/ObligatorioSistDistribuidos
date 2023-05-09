import pymysql


def connect_to_database():
    conn = pymysql.connect(
        host='localhost',
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
