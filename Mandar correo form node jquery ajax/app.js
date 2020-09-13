const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var cors = require('cors');


var app = express();
var port = 3000;
app.use(bodyParser.json());
app.options('*', cors());
app.use(cors());

app.post('/enviarCorreo', function (req, res) {
  console.log("Le pego al endpoint de mandar correo");
  var contacto = req.body;
  var correo = contacto.correo;
  var mensaje = contacto.mensaje;
  console.log("correo: "+correo+" mensaje: "+mensaje);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lucianodato82@gmail.com',
      pass: 'heisenberg',
    },
    tls: {
          rejectUnauthorized: false
          }
  });

  var mailOptions = {
    from: 'lucianodato82@gmail.com',
    to: correo,
    subject: "Mail enviado desde post node",
    text: mensaje
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado' + info.response);
    }
  });
  res.send("email enviado");
})
 




app.listen(port, function(err) {
  if (err) throw err;
  console.log("Programa escuchando en puerto 3000");
});