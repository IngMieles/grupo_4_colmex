const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/ApiProductController'); 
const loginMiddleware = require('../../../middlewares/loginMiddleware');

router.get('/', productController.products);
router.get('/categories', productController.categories);
router.get('/:id', productController.productId);


module.exports = router;