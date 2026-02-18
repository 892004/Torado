const express = require("express");
const { verifyToken, isAdmin } = require("../Middleware/authMiddleware");
const { AddProductImg, getProductImg, DeleteProductImg } = require("../Controllers/ProductImgController");
const upload = require("../Middleware/Multer");
const router = express.Router();

router.post("/add" , verifyToken ,upload.single("image") , isAdmin , AddProductImg)
router.get('/:product_id' , verifyToken , isAdmin , getProductImg)
router.delete('/:id' , verifyToken , isAdmin , DeleteProductImg)

module.exports = router;
