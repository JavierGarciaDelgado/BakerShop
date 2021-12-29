const mongoose = require('mongoose');
const { Schema } = mongoose;

const FlourSchema = new Schema(
  {
    "name": String,
    "peso": String
  }
);

module.exports = mongoose.model("flours", FlourSchema);
