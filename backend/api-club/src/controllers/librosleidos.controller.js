const LibroLeido = require('../models/LibroLeido');

exports.getAllLibrosLeidos = async (req, res) => {
  try {
    const libros = await LibroLeido.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener libros leídos', error });
  }
};

exports.createLibroLeido = async (req, res) => {
  try {
    const nuevoLibro = new LibroLeido(req.body);
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear libro', error });
  }
};

exports.getLibroLeidoById = async (req, res) => {
  try {
    const libro = await LibroLeido.findById(req.params.id);
    if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar libro', error });
  }
};

exports.updateLibroLeido = async (req, res) => {
  try {
    const libroActualizado = await LibroLeido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!libroActualizado) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(libroActualizado);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar libro', error });
  }
};

exports.deleteLibroLeido = async (req, res) => {
  try {
    const libroEliminado = await LibroLeido.findByIdAndDelete(req.params.id);
    if (!libroEliminado) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar libro', error });
  }
};