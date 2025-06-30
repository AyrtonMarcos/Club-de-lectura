const express = require('express');
const router = express.Router();
const librosLeidosController = require('../controllers/librosleidos.controller');
const verificarAdmin = require('../middlewares/esAdmin');

// Rutas abiertas para todos
router.get('/', librosLeidosController.getAllLibrosLeidos);

// Rutas solo para admin
router.post('/', verificarAdmin, librosLeidosController.createLibroLeido);
router.put('/:id', verificarAdmin, librosLeidosController.updateLibroLeido);
router.delete('/:id', verificarAdmin, librosLeidosController.deleteLibroLeido);

// Exportamos el router para usar en index.js
module.exports = router;







