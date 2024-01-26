const express = require('express');
const { createCategory, deleteCategory, updateCategory, getCategoryById, getAllCategories } = require('../controllers/categoryController');
const router = express.Router();

// Routes for categories
router.post('/categories', createCategory);
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryById);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
