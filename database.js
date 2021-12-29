const mongoose = require("mongoose");
const URI = "mongodb://localhost/BakerShop";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then((db) => console.log("DB is connectes"))
  .catch((err) => console.log(err));

module.exports = mongoose;
