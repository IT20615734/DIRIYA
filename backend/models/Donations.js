const mongoose = require('mongoose');

var Donation = new mongoose.Schema({
    donationID:{
        type:String,
        required:true,
    },
    dname:{
        type:String,
        required:true,
    },
    foodCategory:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    },
    dateOfHandOver:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type:String,
        required:true,
    }
    
    
});
const Donations = mongoose.model("Donation", Donation);
module.exports = Donations;