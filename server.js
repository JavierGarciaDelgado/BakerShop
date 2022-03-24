const express = require('express');
const app = express();
const { mongoose } = require("./database");
const bodyParser = require("body-parser")
const cors = require('cors');

app.use(cors());

// mongoDB

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use("/api/Product", require("./routes/Product.routes"));
app.use("/api/Demand", require("./routes/Demand.routes"));
app.use("/api/Comment", require("./routes/Comment.routes"));

// Server connection

app.use(express.static(__dirname + '/public/'));

app.listen('5000', function() {
  console.log('Servidor web escuchando en el puerto 5000');
});