// Thêm vào đầu file server.js
const mongoose = require('mongoose');

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
const express = require('express');
const app = express();
app.use(express.json());
const userRoutes = require('./routes/user');
app.use('/', userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
