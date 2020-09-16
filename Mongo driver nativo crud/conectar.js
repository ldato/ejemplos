const { Db } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url, (err, db) =>{
if (err) throw err;
console.log("Conectado a la base de Mongo local");
db.close();
})