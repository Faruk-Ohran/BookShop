const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  id: Number,
  naziv: String,
  pisac: String,
  opis: String,
  kategorija: String,
  cijena: Number,
});

module.exports = mongoose.model("Data", DataSchema);
