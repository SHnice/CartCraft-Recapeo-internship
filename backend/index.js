const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/categoryRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Test endpoint
app.get('/test', (req, res) => {
  res.send('Hello, this is a test endpoint!');
});

// mongodb connection
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

// Routes
app.use('/api/category', categoryRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
