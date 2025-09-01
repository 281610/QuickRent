/*const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
*/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  itemsGiven: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
  itemsTaken: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }] 
});

module.exports = mongoose.model('User', userSchema);
