const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GuestSchema = new Schema({
  id: String,
  nom: String,
  prenom: String,
  lien: String,
  adulte: Number,
  enfant: Number,
  famille: Boolean,
  cote: String,
  vinhonneur: Boolean,
  repas: Boolean,
  commentaire: String,
  creationDate: Date,
  lastUpdate: Date
});

module.exports = mongoose.model('Guest', GuestSchema);
