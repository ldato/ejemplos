const { Db } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url, (err, db) =>{
    if (err) throw err;
    const dbo = db.db("base-prueba-crear-node");
    dbo.createCollection("coleccion-crear-node", (err, res) => {
        console.log("Coleccion creada");
    })
    db.close();
})