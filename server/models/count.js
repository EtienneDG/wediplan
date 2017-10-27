const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Count = new Schema({
  count: Number
});

module.exports = mongoose.model('Count', Count);
