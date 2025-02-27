const mongoose = require('mongoose');
const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database Connected successfully');



    }catch(e){
        console.log('Mongo connection failed:', e);
    }
}

module.exports = connectToDB;