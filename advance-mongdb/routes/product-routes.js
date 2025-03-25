const express = require('express');
const {insertSampleProduct} = require('../controllers/product-controller');
const router = express.Router();
router.post('/add',insertSampleProduct);
module.exports = router;