const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LocationSchema = new Schema({
  id: String,
  name: String,
  description: String,
  address: String,
  disabled: {type: Boolean, default: false}
});

module.exports = mongoose.model('Location', LocationSchema);
