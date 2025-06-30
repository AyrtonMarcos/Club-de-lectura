const mongoose = require('mongoose');

const miembroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },
  username: {
    type: String,
    required: [true, "El username es obligatorio"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: true
  },
  esAdmin: {
    type: Boolean,
    default: false
  },
  generoPreferido: { type: String } 
});

module.exports = mongoose.model('Miembro', miembroSchema);