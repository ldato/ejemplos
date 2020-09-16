const { ObjectID } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  var data = { clave3 : 10 }; //valor que paso como filtro para identificar el documento a borrar
  var db = client.db('base-prueba-crear-node');
    db.collection("coleccion-crear-node").deleteOne(data, function(err, res) {
    if (err) throw err;
    console.log("1 document borrado");
    client.close();
  });
});