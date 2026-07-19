const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend API is Running 🚀");
});

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});