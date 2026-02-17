const express =  require("express")
const router = express.Router();

const {loginUser , RegisterUser , getUserById , getUsers} =  require("../Controllers/userController");
const { verifyToken, isAdmin } = require("../Middleware/authMiddleware");


router.get('/user/:id' , getUserById);
router.get('/' , verifyToken , isAdmin , getUsers)
router.post('/login' , loginUser);
router.post('/register' , RegisterUser);

module.exports = router;    