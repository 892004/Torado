const express = require("express");
const router = express.Router();

const { verifyToken, isAdmin } = require("../Middleware/authMiddleware");
const { getDashboard, getRecentOrders } = require("../Controllers/AdminController");

router.get("/dashboard", verifyToken, isAdmin, getDashboard);
router.get("/recent-orders" , verifyToken , isAdmin , getRecentOrders)

module.exports = router;
