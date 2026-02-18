const express = require("express");
const router = express.Router();

const {
 createOrder,
 getOrdersByUser,
 getOrderById,
 updateOrderStatus,
 addOrderItem,
 getOrderItems
} = require("../Controllers/OrderController");

const { verifyToken, isAdmin } = require("../Middleware/authMiddleware");


// Create order
router.post("/add", verifyToken, createOrder);

// Get user orders
router.get("/user/:user_id", verifyToken, getOrdersByUser);

// Get order by id
router.get("/:id", verifyToken, getOrderById);

// Update status (admin)
router.put("/status", verifyToken, isAdmin, updateOrderStatus);

// Add order item
router.post("/item", verifyToken, addOrderItem);

// Get order items
router.get("/items/:order_id", verifyToken, getOrderItems);

module.exports = router;
