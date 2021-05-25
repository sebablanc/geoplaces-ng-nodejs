from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import redis

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def connect_db():
    """Crear conexión a base de datos."""
    conexion = redis.StrictRedis(host='127.0.0.1', port=6379,  db=1, decode_responses=True)
    if(conexion.ping()):
        print("Conectado al servidor de redis")
    else:
        print("Error...")
    return conexion

@app.route('/', methods=['GET'])
@cross_origin()
def welcome():
    return jsonify({'exito': True, 'message': 'Bienvenido a tu API de lugares', 'lugares': []})

@app.route('/save_item', methods=['POST'])
@cross_origin()
def saveItem():
    if request.is_json :
        conn = connect_db()
        reqSendedData = request.get_data()
        reqSendedJson = request.get_json()
        parsedName = reqSendedJson['nombre'].lower().replace(' ', '_')
        category = reqSendedJson['categoria']
        print(reqSendedJson)
        alreadyExists = conn.get(category+':'+parsedName) != None
        setResult = conn.set(category+':'+parsedName, reqSendedData)
        
        if (setResult and not alreadyExists) :
            conn.lpush(category, category+':'+parsedName)
        return jsonify({'exito': True, 'message': 'Item guardado', 'lugares': []})
    
    return jsonify({'exito': False, 'message': 'Item no guardado', 'lugares': []})

@app.route('/itemslist_by_category/<string:categoria>', methods=['GET'])
@cross_origin()
def getItemsListByCategory(categoria):
    if categoria is not None:
        conn = connect_db()
        list = conn.lrange(categoria, 0, -1)
        parsedList = []
        for item in list:
            parsedList.append(conn.get(item))
        return jsonify({'exito': True, 'message': 'Item guardado', 'lugares': parsedList})
    return jsonify({'exito': False, 'message': 'Debe proporcionar una categoria', 'lugares': []})

if __name__ == '__main__':
    app.run(port = 5000, debug = True)