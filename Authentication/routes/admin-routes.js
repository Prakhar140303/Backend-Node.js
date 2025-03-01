const express = require('express');
const adminRouter=  express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
adminRouter.get('/welcome',authMiddleware,adminMiddleware,(req,res)=>{
    res.status(200).json({
        message : 'Welcome to the admin page'
    })

});


module.exports = adminRouter;