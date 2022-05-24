const express = require('express');

const mainController = require('../controllers/mainController'); 

const router = express.Router();

router.get('/:id', mainController.detalleProducto);

module.exports = router;