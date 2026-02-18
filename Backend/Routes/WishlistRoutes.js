const express =  require("express");
const { AddWishlist, getWishlistByUser, deleteWishlist } = require("../Controllers/WishlistController");
const { verifyToken } = require("../Middleware/authMiddleware");
const router = express.Router();

router.post('/add' , verifyToken,AddWishlist)
router.get('/:user_id' ,verifyToken, getWishlistByUser)
router.delete('/:id' , verifyToken ,deleteWishlist)

module.exports = router