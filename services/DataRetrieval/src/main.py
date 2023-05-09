from flask import jsonify, Blueprint

import DatabaseManager

bp = Blueprint('DataRetrievalService', __name__)


@bp.get('/getData')
def getData():
    rows = DatabaseManager.execute_query("SELECT * FROM medida")
    data = [{'id': row[0], 'producer_id': row[1], 'date': row[2], 'value': row[3]} for row in rows]
    return jsonify(data)


@bp.post('/insert')
def insertData():
    rows = DatabaseManager.execute_query(
        "INSERT INTO medida(producer_id,date,value) VALUES(10, '2023-05-04 11:11:11', 5)")
    data = [{'id': row[0], 'producer_id': row[1], 'date': row[2], 'value': row[3]} for row in rows]
    return jsonify(data)