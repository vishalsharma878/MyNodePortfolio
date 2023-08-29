const express = require('express');
const router = express.Router();
const productController = require('../controllers/admin');


router.get('/add-product', productController.addProduct);

router.post('/add-product', productController.postAddProducts);

module.exports = router;