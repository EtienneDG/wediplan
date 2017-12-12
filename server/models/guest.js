const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GuestSchema = new Schema({
  id: String,
  nom: String,
  prenom: String,
  lien: {type: String, default: ''},
  adulte: Number,
  enfant: Number,
  famille: Boolean,
  cote: String,
  vinhonneur: Boolean,
  repas: Boolean,
  commentaire: String,
  creationDate: Date,
  lastUpdate: Date,
  disabled: {type: Boolean, default: false}
});

module.exports = mongoose.model('Guest', GuestSchema);
