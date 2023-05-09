from flask import jsonify, Flask

import DatabaseManager

app = Flask(__name__)

@app.get('/getData')
def getData():
    return "llegue"
    rows = DatabaseManager.execute_query("SELECT * FROM medida")
    data = [{'id': row[0], 'producer_id': row[1], 'date': row[2], 'value': row[3]} for row in rows]
    return jsonify(data)


@app.post('/insert')
def insertData():
    return "llegue"
    rows = DatabaseManager.execute_query(
        "INSERT INTO medida(producer_id,date,value) VALUES(10, '2023-05-04 11:11:11', 5)")
    data = [{'id': row[0], 'producer_id': row[1], 'date': row[2], 'value': row[3]} for row in rows]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
