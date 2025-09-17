const express = require("express");
const { connect } = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const upload = require("express-fileupload");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();
const router = require("./routes/userRoutes.js");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));
app.use(upload());

// Routes
app.use("/api", router);
app.get("/", (req, res) => {
  res.json("welcome to the backend");
});

// Error-handling middleware (must come after routes)
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));
