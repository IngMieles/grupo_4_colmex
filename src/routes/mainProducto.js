const express = require('express');

const mainController = require('../controllers/mainController'); 

const router = express.Router();

// Detalle de un producto particular
router.get('/:id', mainController.detalleProducto);
// Formulario de edición de productos
router.get('/:id/edit', mainController.detalleProducto);

module.exports = router;