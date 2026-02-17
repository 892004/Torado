const express = require("express");
const { verifyToken, isAdmin } = require("../Middleware/authMiddleware");
const { AddProductImg, getProductImg, DeleteProductImg } = require("../Controllers/ProductImgController");
const router = express.Router();

router.post("/add" , verifyToken , isAdmin , AddProductImg)
router.get('/:product_id' , verifyToken , isAdmin , getProductImg)
router.delete('/:id' , verifyToken , isAdmin , DeleteProductImg)

module.exports = router
