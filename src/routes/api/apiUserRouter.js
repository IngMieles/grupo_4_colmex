const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/ApiUserController'); 
const loginMiddleware = require('../../../middlewares/loginMiddleware');

// router.get('/', loginMiddleware, userController.users);
router.get('/', userController.users);
router.get('/notification', userController.notification);
router.get('/:id', userController.usersId);
router.get('/userPerfil', loginMiddleware, userController.userPerfil);
router.put('/emailExist/:apiGet', userController.emailExist);

module.exports = router;