var mysql = require('mysql');
var conexion = mysql.createConnection({
  host: "104.155.161.18",
  user: "root",
  password: "uade",
  database: "production"
});

conexion.connect(function (error) {
  if (error) throw error;
  console.log("Conexión establecida");

  conexion.query('SELECT * FROM production.products', function (error, result) {
    if (error) throw error;
    console.log(result);


  });
});
