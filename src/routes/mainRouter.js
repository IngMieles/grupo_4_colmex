const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainController = require('../controllers/mainController'); 

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

router.get('/', mainController.index);
router.get('/carritoCompras', mainController.carritoCompras);

// Listado de productos
router.get('/categorias', mainController.categorias);

// Formulario de creación de productos
router.get('/crearLista', mainController.crearLista);
// Acción de creación (a donde se envía el formulario)
router.post('/crearLista', upload.single('fileImg'), mainController.crear);

// router.get('/edita', mainController.edita);
router.get('/login', mainController.login);

module.exports = router;