require('dotenv').config();
const express = require('express');
const app = express();
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');
const PORT = process.env.PORT || 3000;

// connect to database
connectToDB();

// middleware 
app.use(express.json());

// routes here
app.use('/api/books',bookRoutes);
app.listen(PORT,()=>{
    console.log('server listening on port : ',PORT);
    
});

