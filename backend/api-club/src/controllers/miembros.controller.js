const Miembro = require('../models/miembro');

// Listar todos los miembros
exports.getMiembros = async (req, res) => {
  const idDelSolicitante = req.query.idDelSolicitante;

  try {
    if (!idDelSolicitante) {
      return res.status(400).json({ message: 'ID del solicitante requerido' });
    }

    const solicitante = await Miembro.findById(idDelSolicitante);
    if (!solicitante) {
      return res.status(404).json({ message: 'Solicitante no encontrado' });
    }

    if (solicitante.esAdmin) {
      const miembros = await Miembro.find();
      return res.json({
        admin: true,
        opcionesDisponibles: ['ver', 'editar', 'eliminar', 'crear'],
        miembros
      });
    } else {
      return res.json({
        admin: false,
        opcionesDisponibles: ['ver'],
        miembro: solicitante
      });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener miembros', error });
  }
};

// Agregar un nuevo miembro
exports.createMiembro = async (req, res) => {
  try {
    const nuevoMiembro = new Miembro(req.body);
    const miembroGuardado = await nuevoMiembro.save();
    res.status(201).json(miembroGuardado);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear miembro', error });
  }
};

// Editar un miembro por id
exports.updateMiembro = async (req, res) => {
  try {
    const miembroActualizado = await Miembro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!miembroActualizado) return res.status(404).json({ message: 'Miembro no encontrado' });
    res.json(miembroActualizado);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar miembro', error });
  }
};

// Eliminar un miembro por id
exports.deleteMiembro = async (req, res) => {
  try {
    const miembroEliminado = await Miembro.findByIdAndDelete(req.params.id);
    if (!miembroEliminado) return res.status(404).json({ message: 'Miembro no encontrado' });
    res.json({ message: 'Miembro eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar miembro', error });
  }
}