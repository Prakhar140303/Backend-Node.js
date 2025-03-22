require('dotenv').config();
const  express = require('express');
const mongoose = require('mongoose');
const app = express();
// connectDb 
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log('Connected to the database successfully'))
        .catch(err => console.log('Error connecting to the database'));

//
app.use(express.json());
app.listen(process.env.PORT,()=>{
    console.log('Server listening on port '+process.env.PORT); 
})
