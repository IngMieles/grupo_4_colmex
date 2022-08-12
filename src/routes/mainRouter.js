const express = require('express');
const router = express.Router();
const multer = require('multer');
const mainController = require('../controllers/mainController'); 
const userController = require('../controllers/userController'); 
const loginMiddleware = require('../../middlewares/loginMiddleware');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
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
    body('name').isLength({min:5}).withMessage('Minimo 5 caracteres para el nombre'),
    body('precio').notEmpty().withMessage('Olvidaste poner el precio del producto'),
    body('categoria').notEmpty().withMessage('Clasificalo en una categoría'),
    body('description').isLength({min:20}).withMessage('Describe tú producto al menos 20 caracteres'),
    body('fileImg').custom((value, {req}) => {
        if(req.file == undefined){
            return 'valido';
        }
        if(req.file.mimetype === 'image/jpg' || req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png' || req.file.mimetype === 'image/gif'){
            return 'valido';
        }else{return false;}
    }).withMessage('Validos solo los formatos JPG, JPEG, PNG y GIF')
];

// Validaciones login
const validaLogin = [
    body('email').isEmail().withMessage('Ingresa el email con el que te registraste'),
    body('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
];

router.get('/', mainController.index);
// Vista de shopping cart
router.get('/carritoCompras', loginMiddleware, mainController.carritoCompras);
// Formulario de shopping cart del productos  → PUT
router.put('/addCart/:id', loginMiddleware, mainController.addCart);
// Formulario de shopping cart del productos  → PUT
router.put('/addNewProductCart/:id', loginMiddleware, mainController.addNewProductCart);
// Formulario de edición de productos  → DELETE
router.delete('/deleteCart/:id/delete', loginMiddleware, mainController.deleteCart);

// Listado de las categorias
router.get('/categorias', mainController.categorias);
// Listado de los productos en una categoria
router.get('/category/:categoria', mainController.category);

// Formulario de creación de productos
router.get('/crearLista', loginMiddleware, mainController.crearLista);
// Acción de creación (a donde se envía el formulario)
router.post('/crearLista', loginMiddleware, upload.single('fileImg'), validaProducto, mainController.crear);

// Formulario para login
router.get('/login', userController.login);
router.post('/login', validaLogin, userController.usuarioLogin);

router.get('/logOut', userController.logOut);

// Vista de las notificaciones
router.get('/notification', mainController.notification);
// Vista de las notificaciones
router.post('/notifications', mainController.notifications);

module.exports = router;