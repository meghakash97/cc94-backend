require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/foods", require("./routes/foodRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("CC94 Backend Running");
});

// 🔴 MongoDB connection (FORCED LOGGING)
(async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed ❌");
    console.error(err);
  }
})();

// Start server
app.listen(5000, () => {
  console.log("Server running on 5000");
});
