const { ObjectID } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  var myquery = { clave3 : 10 };
  var newvalues = { $set: {clave2: "valor actulizado2"}};
  var db = client.db('base-prueba-crear-node');
    db.collection("coleccion-crear-node").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    client.close();
  });
});