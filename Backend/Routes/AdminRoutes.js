const express = require("express");
const router = express.Router();

const { verifyToken, isAdmin } = require("../Middleware/authMiddleware");
const { getDashboard } = require("../Controllers/AdminController");

router.get("/dashboard", verifyToken, isAdmin, getDashboard);

module.exports = router;
