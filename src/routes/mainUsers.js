const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainController = require('../controllers/mainController'); 

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

router.get('/', mainController.registro);
router.post('/', upload.single('fileImg'), mainController.registerUsers);

module.exports = router;