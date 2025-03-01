
const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const authHeader  = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({
            success: false,
            message: 'No token provided. Authorization denied. Please login to continue'
        })
    }
    // decode the token  
    try{
        const decodedInfo = jwt.verify(token,process.env.JWT);
        console.log(decodedInfo);
        req.userInfo = decodedInfo;
    }catch(e){
        return res.status(401).json({
            success: false,
            message: 'Token is invalid. Authorization denied'
        }) 
    }


    next();
}

module.exports = authMiddleware;
