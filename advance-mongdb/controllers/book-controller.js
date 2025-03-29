const Author = require('../models/Author')
const Book = require('../models/Book');

// Middleware
const  createAuthor = async(req,res)=>{
    try{

    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Server Error',
            data: []
        })
    }
}