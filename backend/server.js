const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { connection } = require('./config/db');

dotenv.config(); // Load variables from .env

const app = express();
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to the Quickpost 🎉");
});

// Main Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// PORT setup (Render provides PORT automatically)
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connection(); // Connect to MongoDB
    console.log("Connected to the database");
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error(" DB connection failed:", err.message);
    process.exit(1);
  }
});
