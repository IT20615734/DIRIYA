const mongoose = require('mongoose');

var User = new mongoose.Schema({
    role:{
        type:String,
        required:true,
        index:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
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
    Password:{
        type:String,
        required:true,
    }    
    
});
const Users = mongoose.model("User", User);
module.exports = Users;