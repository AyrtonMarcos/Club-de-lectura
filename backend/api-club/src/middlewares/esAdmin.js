const Miembro = require('../models/miembro');

module.exports = async function verificarAdmin(req, res, next) {
  // Buscar idDelSolicitante en body, query o headers
  const id = req.body?.idDelSolicitante || req.query?.idDelSolicitante || req.headers?.['iddelsolicitante'];
  if (!id) {
    return res.status(400).json({ message: 'ID del solicitante requerido' });
  }

  try {
    const miembro = await Miembro.findById(id);
    if (!miembro) {
      return res.status(404).json({ message: 'Miembro no encontrado' });
    }

    if (!miembro.esAdmin) {
      return res.status(403).json({ message: 'Acceso denegado: No sos administrador' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Error al verificar admin', error });
  }
};