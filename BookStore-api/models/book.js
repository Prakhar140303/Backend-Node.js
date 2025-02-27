const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'book title is required'],
        trim : true,
        maxLength: [100,'Books title can not execced 100 characters']
    },
    author:{
        type: String,
        required: [true, 'author title is required'],
        trim : true,
    },
    year:{
        type : Number,
        required: [true, 'year of publication is required'],
        min: [1900,'Year of publication must be after 1900'],
        max: [new Date().getFullYear(),'Year of publication must be before current year']
    },
    createdAt: {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);