const express = require('express');
const router = express.Router();

// Importamos el controlador 
const librosLeidosController = require('../controllers/librosleidos.controller');

// Ruta para obtener todos los libros leídos
router.get('/', librosLeidosController.getAllLibrosLeidos);

// Exportamos el router para usar en index.js
module.exports = router;

