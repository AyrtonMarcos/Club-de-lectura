const mongoose = require('mongoose');

const proximoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  genero: {
    type: String
  },
  paginas: {
    type: Number
  },
  editorial: {
    type: String
  },
  agregadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Miembro',
    required: true
  }
  }, { collection: 'proximos_libros'
});

module.exports = mongoose.model('Proximo', proximoSchema);