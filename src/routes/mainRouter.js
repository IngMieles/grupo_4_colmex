const express = require('express');
const router = express.Router();
const multer = require('multer');
const mainController = require('../controllers/mainController'); 
const userController = require('../controllers/userController'); 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, 'public/img/products')
    },
filename: (req, file, cb) => {
    const newFilename = Date.now() +'-' + file.originalname;
    cb(null, newFilename);
    }
});

const upload = multer({storage});

const {body,check} = require('express-validator');

// Validaciones
const validaProducto = [
    body('name').notEmpty().withMessage('Agrega un nombre al producto'),
    body('precio').notEmpty().withMessage('Olvidaste poner el precio del producto'),
    body('categoria').notEmpty().withMessage('Clasificalo en una categoría'),
    body('description').notEmpty().withMessage('Describe tú producto')
];

// Validaciones login
const validaLogin = [
    body('email').isEmail().withMessage('Ingresa el email con el que te registraste'),
    body('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
];

router.get('/', mainController.index);
router.get('/carritoCompras', mainController.carritoCompras);

// Listado de productos
router.get('/categorias', mainController.categorias);

// Formulario de creación de productos
router.get('/crearLista', mainController.crearLista);
// Acción de creación (a donde se envía el formulario)
router.post('/crearLista', upload.single('fileImg'), validaProducto, mainController.crear);

// Formulario para login
router.get('/login', userController.login);
router.post('/login', validaLogin, userController.usuarioLogin);

router.get('/logOut', userController.logOut);

module.exports = router;