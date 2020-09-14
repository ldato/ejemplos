const { Db } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url, (err, client) =>{
    if (err) throw err;
        var db = client.db('base-prueba-crear-node');
        db.collection('coleccion-crear-node').insertOne ({
        clave1 : "segunda insercion",
        clave2 : "otro valor para la clave",
        clave3 : 15,
        clave4 : "otro valor mas"
    })
    console.log("Documento creado");
    client.close();
})

