const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  location: String,
  yearsOfUse: Number,
  image: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },   // kisne diya
  rentedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Item', ItemSchema);
