const express =  require("express")
const router = express.Router();

const {loginUser , RegisterUser , getUserById , getUsers, toggleUserStatus, updateUser } =  require("../Controllers/userController");
const { verifyToken, isAdmin } = require("../Middleware/authMiddleware");


router.get('/user/:id' , getUserById);
router.get('/' , verifyToken , isAdmin , getUsers)
router.post('/login' , loginUser);
router.post('/register' , RegisterUser);
router.put('/toggle-status/:id' , toggleUserStatus);
router.put('/update/:id' , updateUser)
module.exports = router;    