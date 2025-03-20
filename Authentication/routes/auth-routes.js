const express = require('express');
const {registerUser,loginUser,changePassword} = require('../controllers/auth-controller');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware')
//  all routes are related to user authentication and autherization

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/change-password',authMiddleware,changePassword);





module.exports = router;