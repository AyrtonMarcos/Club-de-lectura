const ProximoLibro = require('../models/proximosLibros');

exports.getAllProximosLibros = async (req, res) => {
  try {
    const libros = await ProximoLibro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los próximos libros',
      error
    });
  }
};

