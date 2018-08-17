const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  latinName: { type: String, required: true, unique: true },
  family: String,
  image: String
});

module.exports = mongoose.model('Bird', birdSchema);
