const mongoose = require('mongoose');

const miembroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  esAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Miembro', miembroSchema);