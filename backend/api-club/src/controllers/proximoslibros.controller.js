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


exports.getProximoLibroById = async (req, res) => {
  try {
    const libro = await ProximoLibro.findById(req.params.id);
    if (!libro) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json(libro);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el libro', error });
  }
};


exports.createProximoLibro = async (req, res) => {
  try {
    const nuevoLibro = new ProximoLibro(req.body);
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el libro', error });
  }
};


exports.updateProximoLibro = async (req, res) => {
  try {
    const libroActualizado = await ProximoLibro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!libroActualizado) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json(libroActualizado);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el libro', error });
  }
};


exports.deleteProximoLibro = async (req, res) => {
  try {
    const libroEliminado = await ProximoLibro.findByIdAndDelete(req.params.id);
    if (!libroEliminado) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el libro', error });
  }
};

