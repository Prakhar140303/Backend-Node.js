const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3,
        maxlength : 20
    },
    email :{ 
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    password :{
        type : String,
        required : true,
        minlength : 8,
    },
    role :{
        type : String,
        enum : ['user', 'admin','superAdmin'],// only allow user or admin roles
        default : 'user'
    }
    
})
module.exports = mongoose.model('User',UserSchema);