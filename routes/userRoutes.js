const express = require("express");
const router = express.Router();
const User = require("../models/User_model"); // 👈 CASE-SENSITIVE FIX

// Test route
router.get("/", (req, res) => {
  res.json({ message: "User route working" });
});

module.exports = router;
