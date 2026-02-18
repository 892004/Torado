const express = require("express")
const { addCart, getCartByUser, updateCartQty, removeCartItem, clearCart } = require("../Controllers/CartController")
const { verifyToken } = require("../Middleware/authMiddleware")
const router = express.Router()

router.post('/add' ,verifyToken, addCart)
router.get('/:user_id',verifyToken,getCartByUser)
router.put('/' ,  verifyToken,updateCartQty)
router.delete('/:id' , verifyToken , removeCartItem)
router.delete('/clear/:user_id' , verifyToken , clearCart)

module.exports = router