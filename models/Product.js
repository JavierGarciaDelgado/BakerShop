const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    "type": String,
    "name": String,
    "weight": String,
    "brand": String,
    "image": String,
    "energeticValue": String,
    "fat": Number,
    "saturedFats": Number,
    "carbohydrates": Number,
    "sugars": Number,
    "dietaryFiber": Number,
    "protein": Number,
    "salt": Number,
    "description": String,
    "price": Number,
    "sold": Number,
    "origin": String,
    "user": String
  }
);

module.exports = mongoose.model("products", ProductSchema);
