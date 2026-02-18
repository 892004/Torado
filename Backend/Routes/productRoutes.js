const express = require("express")
const { verifyToken, isAdmin } = require("../Middleware/authMiddleware")
const { AddProduct, getProducts, getProductById, updateProducts, DeleteProduct, SearchProducts } = require("../Controllers/productController")
const upload = require("../Middleware/Multer")
const router = express.Router()


router.post('/add' , verifyToken , upload.single("image"), isAdmin ,AddProduct)
router.get("/search" , SearchProducts)
router.get('/',getProducts)
router.get('/:id',getProductById)
router.put('/:id',verifyToken ,upload.single("image"), isAdmin, updateProducts)
router.delete('/:id' , verifyToken , isAdmin , DeleteProduct)
module.exports = router