const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  id: Number,
  name: String,
  author: String,
  description: String,
  category: String,
  price: Number,
  bookImage: String,
});

module.exports = mongoose.model("Data", DataSchema);
