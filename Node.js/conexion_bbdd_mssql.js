var dbConfig = {
    user:  "sa",
    password: "acevedo535",
    server: "DESKTOP-0S2D3E7",
    database: "prueba",
    options: {
      port: 1433,
      instancename: 'SQLEXPRESS',
      encrypt: false
    }
};


app.get("/facturas", function(req , res){
  var dbConn = new sql.ConnectionPool(dbConfig);
  dbConn.connect().then(function () {
      var request = new sql.Request(dbConn);
      request.query("select * from pagos1 where estado ='En proceso' order by fecha_actualizacion;").then(function (resp) {
          console.log(resp.recordset);
          res.send(resp.recordset);
          dbConn.close();
});
});
});
