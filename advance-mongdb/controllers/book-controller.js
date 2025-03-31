const Author = require('../models/Author')
const Book = require('../models/Book');

// Middleware
const  createAuthor = async(req,res)=>{
    try{
        if(!req.body) {
            return res.status(400).json({
                success: false,
                message: 'Invalid request, enter the required details first',
                data: {}
            })
        }
        const author = await Author(req.body);
        await author.save();
        return res.status(200).json({
            success: true,
            message: 'Author created successfully',
            data: author
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
        })
    }
}
const  createBook = async(req,res)=>{
    try{
        if(!req.body){
            return res.status(400).json({
                success: false,
                message: 'Invalid request, enter the required details first',
                data: {}
            })
        }
        const book = Book(req.body);
        await book.save();
        return res.status(200).json({
            success: true,
            message: 'Book created successfully',
            data: book
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
        })
    }
}
const getBookWithAuthor = async (req,res) =>{
    try{
        const book =await Book.findById(req.params.id).populate('author');
        if(!book){
            return res.status(401).json({
                success: false,
                message: 'Book not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Book fetched successfully',
            data: book
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Server Error while searching  book with author',
        })
    }
}
module.exports = {createBook, createAuthor,getBookWithAuthor}