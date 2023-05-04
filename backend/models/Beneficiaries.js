const mongoose = require('mongoose');

var Beneficiary = new mongoose.Schema({
    beneficiaryID:{
        type:String,
        required:true,
    },
    beneficiaryName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    nic:{
        type:String,
        required:true,
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    monthlyIncome:{
        type:String,
        required:true,
    },
    numberOfFamilyMembers:{
        type:String,
        required:true,
    }
    
    
});
const Beneficiaries = mongoose.model("Beneficiary", Beneficiary);
module.exports = Beneficiaries;