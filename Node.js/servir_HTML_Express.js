const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const publicDirectory = path.join(__dirname, '../public/');

app.use(express.static(publicDirectory));

console.log(__dirname);

app.listen(port, () => {
  console.log('Escuchando en el puerto: '+port);
})
