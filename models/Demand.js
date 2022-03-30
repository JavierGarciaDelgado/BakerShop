const mongoose = require('mongoose');
const { Schema } = mongoose;

const DemandSchema = new Schema(
  {
    "title":String,
    "type": String,
    "weight": String,
    "description": String,
    "price": Number,
    "origin": String,
    "user": String,
    "dateOfUpload": String
  }
);

module.exports = mongoose.model("demands", DemandSchema);