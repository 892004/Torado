const express =  require("express");
const { AddWishlist, getWishlistByUser, deleteWishlist } = require("../Controllers/WishlistController");
const router = express.Router();

router.post('/add' , AddWishlist)
router.get('/:user_id' , getWishlistByUser)
router.delete('/:id' , deleteWishlist)

module.exports = router