const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController'); 
const loginMiddleware = require('../../middlewares/loginMiddleware');

const {body} = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, 'public/img/users')
    },
filename: (req, file, cb) => {
    const newFilename = Date.now() +'-' + file.originalname;
    cb(null, newFilename);
    }
});

const upload = multer({storage});

// Validaciones
const validaRegistro = [
    body('fname').isLength({min:2}).withMessage('Es necesario llenar el campo: Nombre '),
    body('lname').isLength({min:2}).withMessage('Es necesario llenar el campo: Apellido'),
    body('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('email').isEmail().withMessage('Ingresa un email valido')
];

router.get('/', userController.registro);
router.post('/', upload.single('fileImg'), validaRegistro, userController.registerUsers);

router.get('/userPerfil', loginMiddleware, userController.userPerfil);

// Validaciones
const validaEdita = [
    body('fname').notEmpty().withMessage('Nombre del usuario'),
    body('lname').notEmpty().withMessage('Apellido del usuario'),
    body('subject').notEmpty().withMessage('Agrega un comentario')
];

// Formulario de edición a la vista 
router.get('/userPerfil/:id/edita', loginMiddleware, userController.edita);
// Formulario de edición de usuarios  → PUT
router.put('/userPerfil/:id/edita', validaEdita, userController.editar);

module.exports = router;