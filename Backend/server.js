// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const connectDB = require("./config/db");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// CORS Configuration
const corsOptions = {
  origin: "*", // Allows all origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
const documentController = require("./controllers/documentController");
app.post(
  "/api/upload",
  upload.single("file"),
  documentController.uploadDocument
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
