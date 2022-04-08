const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countriesSchema = Schema({
  countryName: { type: String, unique: true, required: true },
});

const Countries = mongoose.model("Countries", countriesSchema);

module.exports = Countries;
