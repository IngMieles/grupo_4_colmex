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
    body('fname').notEmpty().withMessage('Es necesario llenar el campo: Nombre '),
    body('lname').notEmpty().withMessage('Es necesario llenar el campo: Apellido'),
    body('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('email').isEmail().withMessage('Ingresa un email valido')
];

router.get('/', userController.registro);
router.post('/', upload.single('fileImg'), validaRegistro, userController.registerUsers);

router.get('/userPerfil', loginMiddleware, userController.userPerfil);

module.exports = router;