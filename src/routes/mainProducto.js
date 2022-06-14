const express = require('express');
const res = require('express/lib/response');

const mainController = require('../controllers/mainController'); 

const router = express.Router();

// Detalle de un producto particular
router.get('/:id', mainController.detalleProducto);
// Formulario de edición a la vista 
router.get('/:id/edita', mainController.edita);
// Formulario de edición de productos  → PUT
router.put('/:id/edita', mainController.editar);
// Formulario de edición de productos  → DELETE
router.delete('/:id/delete', mainController.delete);

module.exports = router;