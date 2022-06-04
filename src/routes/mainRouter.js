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
    const newFilename = file.originalname +'-'+ Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
    }
});

const upload = multer({storage});

router.get('/', mainController.index);
router.get('/carritoCompras', mainController.carritoCompras);
router.get('/categorias', mainController.categorias);
router.get('/crearLista', mainController.crearLista);
router.post('/crearLista', upload.single('fileImg'), mainController.crear);
router.get('/edita', mainController.edita);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro);

module.exports = router;