const express = require('express');
const logger = require('morgan');
const http = require('http');
const cors = require('cors');

// creando la app
const app = express();


// store integration
const { get, set, keys, geoRadius, geoAdd } = require('./store');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(cors());

// Logueo de peticiones
app.use(logger('dev'));

// Parseando la data entrante
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ruta de prueba
app.get('/', (req, res)=>{
    return res.status(200).send({message: 'Bienvenido a tu api de Locaciones'});
});

app.post('/save_item', async (req, res) => {
    var reqSendedData = req.body;
    
    if(reqSendedData != null){
        var parsedName = reqSendedData['nombre'].toLowerCase().replace(' ', '_');
        var category = reqSendedData['categoria'];
        var key = category+':'+parsedName;

        //seteo los nuevos datos en la clave
        var setResult = await set(key, JSON.stringify(reqSendedData)).catch((err) => { if(err) console.log(err); });
        
        //guardo la geoposición de la clave
        if(setResult == 'OK'){
            await geoAdd("locations", reqSendedData['latitud'], reqSendedData['longitud'], key).catch((err) => { if(err) console.log(err); });
        }

        return res.status(200).send({exito: true, message:'Locación guardada', 'lugares': []});
       
    } else {
        return res.status(400).send({exito: false, message:'No se envió información para guardar', 'lugares': []});
    }

});

app.get('/itemslist_by_category?:category', async (req, res) => {
    var categoria = req && req.query && req.query.category ? req.query.category : null;
    if(categoria){
        
        let responseKeys = await keys(categoria+":*").catch((err) => { if(err) console.log('Error al intentar obtener las keys: '+err);});
        
        if(responseKeys){
            let lista = [];
            responseKeys.forEach(async (key, index) => {
                let getResponse = await get(key).catch((err) => { if(err) console.log(err);});
                lista.push(JSON.parse(getResponse));
                if(lista.length == responseKeys.length){
                    return res.status(200).send({exito: true, message: 'Listado encontrado', lugares: lista});
                }
            });

       }

    } else {
        return res.status(400).send({exito: false, message:'Debe enviar una categoria para consultar', lugares: []});
    }
})

app.get('/nearest_places_by_distance?:latitude?:longitude?:distance', async (req, res) =>{
    var distance = req && req.query && req.query.distance ? req.query.distance : null;
    var latitude = req  && req.query && req.query.latitude ? req.query.latitude : null;
    var longitude = req  && req.query && req.query.longitude ? req.query.longitude : null;

    if(distance){
        let geoRadiusResponse = await geoRadius('locations', latitude, longitude, distance, 'km', 'WITHDIST').catch((err) => { if(err) console.log(err);});

        if(geoRadiusResponse){
            let lista = [];
            await geoRadiusResponse.forEach(async (item, index) =>{
                let getResponse = await get(item[0]).catch((err) => { if(err) console.log(err);});
                let getParsed = JSON.parse(getResponse);
                getParsed.distance = item[1];
                lista.push(getParsed);

                if(lista.length == geoRadiusResponse.length){
                    return res.status(200).send({exito: true, message: 'Listado encontrado', lugares: lista});
                }
            })
    
        }
       
    } else {
        return res.status(400).send({exito: false, message:'Debe enviar una distancia para consultar', lugares: []});
    }
})

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;