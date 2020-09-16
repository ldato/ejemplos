const { ObjectID } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

/* MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  var db = client.db('base-prueba-crear-node');
  var consulta = db.collection("coleccion-crear-node").find({});//podemos agregar parametros como a un where
  consulta.each(function(err, doc) {
    console.log(doc);  
  if (err) throw err;
    client.close();
  
});
}) */
// OTRA FORMA
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("base-prueba-crear-node");
    dbo.collection("coleccion-crear-node").find({"clave3":12}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });