const express = require('express');
const router = express.Router();
const proximosLibrosController = require('../controllers/proximoslibros.controller');
const verificarAdmin = require('../middlewares/esAdmin');

router.get('/', proximosLibrosController.getAllProximosLibros);

router.post('/', verificarAdmin, proximosLibrosController.createProximoLibro);
router.put('/:id', verificarAdmin, proximosLibrosController.updateProximoLibro);
router.delete('/:id', verificarAdmin, proximosLibrosController.deleteProximoLibro);

module.exports = router;