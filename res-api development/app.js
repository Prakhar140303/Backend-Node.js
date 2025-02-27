const express = require('express');
const app = express();

// Middleware

app.use(express.json())

let books =[
    {
        id: "1",
        title: "Book 1"
    },
    {
        id: "2",
        title: "Book 2"
    },
    {
        id: "3",
        title: "Book 3"
    }
];

//  Intro route
app.get('/', (req, res) => {
    res.json({
        message :"Welcome to out bookstore api",
    });
});
//  get all books
app.get('/get', (req,res) => {
    res.json(books);
})
app.get('/get/:id',(req,res) =>{
    const book= books.find(item => item.id == req.params.id);
    if(book){
        res.status(200).json(book);
    } else{
        res.status(404).json({message: 'Book not found please tru with a different id'});
    }
})

//  add a new book -POST
app.post('/add',(req,res)=>{
    const newBook ={
        id: Math.floor(Math.random() *1000),
        title : `Book ${books.length+1}`
    }
    books.push(newBook);
    // res.status(200).json(newBook); // can be done like this but
    res.status(200).json({
        data : newBook,
        message: `New Book ${newBook.title} added successfully`
        })
})

// update bool
app.put('/update/:id',(req,res)=>{
    const findCurrentBook = books.find(book => book.id == req.params.id);
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title;
        res.status(200).json({
            message: `Book with ID ${req.params.id} updated successfully`,
            data : findCurrentBook
        })
    }else{
        res.status(404).json({
            message: 'Book not found please try with a different id'
        })
    }
})

// delete 

app.delete("/delete/:id",(req,res)=>{
    const findIndexOFCurrentBook = books.findIndex(book => book.id == req.params.id);
    if(findIndexOFCurrentBook !== -1){
        const deletedBook = books.splice(findIndexOFCurrentBook,1);
        res.status(200).json({
            message: 'Book deleted successfully',
            data : deletedBook[0]
            
        })
    }else{
        res.status(404).json({
            message: 'Book not found please try with a different id'
        })

    }

})







const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})