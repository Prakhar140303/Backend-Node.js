const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
            console.log('MongoDB Connected successfully');

    }catch(err){
        console.error('Error connecting to MongoDB:',err.message);
        process.exit(1);
    }
}

module.exports = connectDB;