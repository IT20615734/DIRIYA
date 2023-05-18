const mongoose = require('mongoose');

var Application = new mongoose.Schema({
    // beneficiaryID:{
    //     type:String,
    //     required:true,
    //     index:true,
    // },
    jobTitle:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true,
    },
    livingArea:{
        type:String,
        required:true,
    },
    applicantName:{
        type:String,
        required:true,
    },
    nic:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    dateOfBirth:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type:String,
        required:true,
    }
    
});
const Applications = mongoose.model("Application", Application);
module.exports = Applications;