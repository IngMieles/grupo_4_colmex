// const res = require('express/lib/response');
const express = require('express');
const router = express.Router();
// const multer = require('multer');
const mainController = require('../controllers/mainController');
const loginMiddleware = require('../../middlewares/loginMiddleware'); 

const {body} = require('express-validator');

// Validaciones
const validaEdita = [
    body('name').notEmpty().withMessage('Agrega un nombre al producto'),
    body('precio').notEmpty().withMessage('Olvidaste poner el precio del producto'),
    body('categoria').notEmpty().withMessage('Clasificalo en una categoría'),
    body('description').notEmpty().withMessage('Describe tú producto')
];

// Detalle de un producto particular
router.get('/:id', mainController.detalleProducto);
// Formulario de edición a la vista 
router.get('/:id/edita', loginMiddleware, mainController.edita);
// Formulario de edición de productos  → PUT
router.put('/:id/edita', validaEdita, mainController.editar);
// Formulario de edición de productos  → DELETE
router.delete('/:id/delete', mainController.delete);

// vista del producto editado 
router.get('/:id/editado', loginMiddleware, mainController.detalleProducto);
// Formulario de comentarios del productos  → PUT
router.put('/:id/comment', mainController.comment);


module.exports = router;