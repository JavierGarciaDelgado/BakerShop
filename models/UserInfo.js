const mongoose = require('mongoose');
const { Schema } = mongoose;
const products=require('./Product').schema

const UserInfoSchema = new Schema(
  {
    "name":String,
    "image": String,
    "userUID": String,
    "shoppingChart": [{charts:products}]
  }
);

module.exports = mongoose.model("userInfo", UserInfoSchema);