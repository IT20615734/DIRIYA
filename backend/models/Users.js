const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    role:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lasttName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    
})
const userCollection = mongoose.model('User', userSchema);
module.exports = userCollection;