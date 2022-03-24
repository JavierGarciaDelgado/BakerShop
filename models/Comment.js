const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    "demandId":String,
    "comment":String,
    "email": String,
    "userUID": String,
    "title":String,
    "link":String,
    "price":String,
    "user":String
  }
);

module.exports = mongoose.model("comment", CommentSchema);