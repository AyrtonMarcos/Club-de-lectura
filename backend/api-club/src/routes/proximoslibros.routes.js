const express = require('express');
const router = express.Router();
const proximosLibrosController = require('../controllers/proximoslibros.controller');

router.get('/', proximosLibrosController.getAllProximosLibros);
// Podés agregar más rutas como POST, DELETE si querés después.

module.exports = router;