const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming categoryId is an ObjectId
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
