const express = require('express');
const cors = require('cors');
const app = express();

frontend
// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Routes
const userRoutes = require('./routes/user');
app.use('/', userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

app.use(express.json());

const userRoutes = require('./routes/user');
app.use('/', userRoutes);

const POST = process.env.PORT || 3000;
app.listen(POST, () => {
  console.log(`Server is running on port ${POST}`);
 main
});
