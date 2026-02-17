const express = require("express")
const { verifyToken, isAdmin } = require("../Middleware/authMiddleware")
const { AddProduct, getProducts, getProductById, updateProducts, DeleteProduct, SearchProducts } = require("../Controllers/productController")
const router = express.Router()


router.post('/add' , verifyToken , isAdmin ,AddProduct)
router.get("/search" , SearchProducts)
router.get('/',getProducts)
router.get('/:id',getProductById)
router.put('/:id',verifyToken , isAdmin, updateProducts)
router.delete('/:id' , verifyToken , isAdmin , DeleteProduct)
module.exports = router