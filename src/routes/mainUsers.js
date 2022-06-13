const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainController = require('../controllers/mainController'); 

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
    body('fname').notEmpty().withMessage('Es necesario llenar el campo: Nombre ').bail(),
    body('lname').notEmpty().withMessage('Es necesario llenar el campo: Apellido').bail(),
    body('email').isEmail().withMessage('Ingresa un email valido').bail()
];

router.get('/', mainController.registro);
router.post('/', validaRegistro, upload.single('fileImg'), mainController.registerUsers);

module.exports = router;