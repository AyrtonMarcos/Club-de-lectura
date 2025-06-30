const mongoose = require('mongoose');

const libroLeidoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
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
  },
  imagen: {
    type: String,
    required: true
  }
}, {
  collection: 'libros_leidos'  
});

module.exports = mongoose.model('LibroLeido', libroLeidoSchema);
