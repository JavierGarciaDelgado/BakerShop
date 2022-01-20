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
    "fat": String,
    "saturedFats": String,
    "carbohydrates": String,
    "sugars": String,
    "dietaryFiber": String,
    "protein": String,
    "salt": String,
    "description": String,
    "price": Number,
    "sold": Number,
    "calification": Number,
    "origin": String,
    "user": String
  }
);

module.exports = mongoose.model("products", ProductSchema);
