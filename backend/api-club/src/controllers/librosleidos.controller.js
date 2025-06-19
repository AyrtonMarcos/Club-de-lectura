const LibroLeido = require('../models/LibroLeido');

exports.getAllLibrosLeidos = async (req, res) => {
  try {
    const libros = await LibroLeido.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener libros leídos', error });
  }
};