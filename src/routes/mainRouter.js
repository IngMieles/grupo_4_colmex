const express = require('express');

const mainController = require('../controllers/mainController'); 

const router = express.Router();

router.get('/', mainController.index);
router.get('/carritoCompras', mainController.carritoCompras);
router.get('/categorias', mainController.categorias);
router.get('/crearLista', mainController.crearLista);
router.post('/crearLista', mainController.crear);
router.get('/edita', mainController.edita);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro);

module.exports = router;