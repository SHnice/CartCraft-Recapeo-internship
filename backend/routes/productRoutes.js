const express = require('express');
const { createProduct, deleteProduct, updateProduct, getProductById, getAllProducts } = require('../controllers/productController');
const router = express.Router();

// Routes for products
router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
