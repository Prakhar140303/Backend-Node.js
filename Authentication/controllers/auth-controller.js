// register controller
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const registerUser = async(req,res)=>{
    try{
        // extract user information for our req body
        const {username , email, password, role} = req.body;
        
        // cheack existing user
        const checkExistingUser = await User.findOne({ $or :[{username},{email}]});
        if(checkExistingUser){
            return res.status(400).json({
                success: false,
                message: 'Username or Email already exists'
            })
        }
        // hash user password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || 'User'
        });
        await newUser.save();
        if(newUser){
            res.status(201).json({
                success: true,
                message: 'User registration successful',
                data: newUser
            })
        }else{
            res.status(400).json({
                success: false,
                message: 'Failed to create user'
            })
        }

    }catch(e){
        console.log(e); 
        res.status(400).json({
            success: false,
            message: 'Registration failed > Please try again',
        })  
    }
}

// login controller
const loginUser = async(req, res)=>{
    try{
    
    }catch(e){
        console.log(e); 
        res.status(400).json({
            success: false,
            message: 'Registration failed > Please try again',
        })  
    }
}




module.exports = {registerUser,loginUser}
