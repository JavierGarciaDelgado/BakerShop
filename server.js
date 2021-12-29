const express = require('express');
const app = express();
const { mongoose } = require("./database");

// mongoDB

//Routes
app.use("/api/Flour", require("./routes/Flour.routes"));

// Server connection

app.use(express.static(__dirname + '/public/'));

app.listen('5000', function() {
  console.log('Servidor web escuchando en el puerto 5000');
});