const express = require("express");
const { verifyToken, isAdmin } = require("../Middleware/authMiddleware");
const { AddCategory, getCategories, getCategoryById, updateCategory, DeleteCategory } = require("../Controllers/categoryController");
const upload = require("../Middleware/Multer");
const router = express.Router()


router.post("/add" , verifyToken , upload.single("image"), isAdmin , AddCategory)
router.get("/" , getCategories)
router.get("/:id" , getCategoryById)
router.put("/:id" ,verifyToken ,upload.single("image"), isAdmin , updateCategory)
router.delete("/:id",verifyToken , isAdmin , DeleteCategory)
module.exports = router 