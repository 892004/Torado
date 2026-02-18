const express =  require("express")
const { verifyToken } = require("../Middleware/authMiddleware");
const { checkout } = require("../Controllers/CheckOutController");
const router = express.Router()

router.post ("/" , verifyToken , checkout)

module.exports = router;