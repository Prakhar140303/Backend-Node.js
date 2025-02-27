const Book = require('../models/book');
const getAllBooks = async(req,res)=>{
    try{
        const allBooks = await Book.find({});
        if(allBooks.length>0){
            res.status(200).json({
                success: true,
                message: 'All books fetched successfully',
                data: allBooks
            })
        }else{
            res.status(404).json({
                success: false,
                message: 'No books found',
                data: []
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Server Error',
            data: []
        })
    }
}
const getSingleBookById = async(req,res)=>{
    try{
        const getCurrentBookId = req.params.id;
        const bookDetailsById = await Book.findById(getCurrentBookId);
        if(!bookDetailsById){
            return res.status(404).json({
                success: false,
                message: `Book with the id :${getCurrentBookId}not found`,
            })
        }
        else{
            res.status(200).json({
                success: true,
                message: 'Book fetched successfully',
                data: bookDetailsById
            })
        }
    }catch(err){

    }
}
const addNewBook = async(req,res)=>{
    try{
        const newBookFormData =  req.body;
        const newlyCreatedBoook = await Book.create(newBookFormData);
        if(newlyCreatedBoook){
            res.status(201).json({
                success: true,
                message: 'book add successfully',
                data: newBookFormData
            })
        }
    }catch(e){
        console.log(e);
        res.status(404).json({
            success: false,
            message: 'No books found',
            data: []
        })
        
    }
}
const updateBook = async(req,res)=>{
    try{
        const updatingBookFormData = req.body;
        const updatingBook = req.params.id;
        const updatedBookData = await Book.findByIdAndUpdate(updatingBook,updatingBookFormData,{
            new : true
        });
        if(!updatedBookData){
            return res.status(404).json({
                success: false,
                message: `Book with the id :${updatingBook} not found`,
            })
        }else{
            return res.status(200).json({
                success: true,
                message: 'Book updated successfully',
                data: updatedBookData
            })
        }

    }catch(e){
        console.log(e);
        res.status(404).json({
            success: false,
            message: 'No books found',
            data: []
        })
    }
}
const deleteBook = async(req,res)=>{
    try{
        const getCurrentBookId = req.params.id;
        const deletedBook  = await Book.findByIdAndDelete(getCurrentBookId);
        if(!deletedBook) {
            res.status(404).json({
                success: false,
                message: `Book with the id :${getCurrentBookId} not found`,

            })
        }else{
            res.status(200).json({
                success: true,
                message: `Book ${deletedBook.title} deleted successfully`,
                data: deletedBook
            })
        }
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'No books found',
            data: []
        })
    }
}

module.exports = { getAllBooks, 
            getSingleBookById, 
            addNewBook, 
            updateBook, 
            deleteBook };