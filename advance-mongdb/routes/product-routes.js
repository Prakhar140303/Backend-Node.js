const express = require('express');
const {insertSampleProduct,getProductStats} = require('../controllers/product-controller');
const router = express.Router();
router.post('/add',insertSampleProduct);
router.get('/stats',getProductStats);
module.exports = router;