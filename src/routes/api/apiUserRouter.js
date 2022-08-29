const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/ApiUserController'); 
const loginMiddleware = require('../../../middlewares/loginMiddleware');

router.get('/userPerfil', loginMiddleware, userController.userPerfil);
router.put('/emailExist/:apiGet', userController.emailExist);

module.exports = router;