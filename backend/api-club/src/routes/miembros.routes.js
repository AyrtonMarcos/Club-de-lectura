const express = require('express');
const router = express.Router();
const miembrosController = require('../controllers/miembros.controller');
const verificarAdmin = require('../middlewares/esAdmin');

// Listar miembros
router.get('/', miembrosController.getMiembros);

// Crear nuevo miembro
router.post('/', verificarAdmin, miembrosController.createMiembro);

// Editar miembro por ID
router.put('/:id', verificarAdmin, miembrosController.updateMiembro);

// Borrar miembro por ID
router.delete('/:id', verificarAdmin, miembrosController.deleteMiembro);

module.exports = router;