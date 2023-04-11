const mongoose = require('mongoose');

var Job = new mongoose.Schema({
    jobTitle:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true,
        index:true,
    },
    gender:{
        type:String,
        required:true,
        index:true,
    },
    numberOfPeople:{
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true,
    },
    contactNumber:{
        type:String,
        required:true,
    },

})
const Jobs = mongoose.model("job",Job);
module.exports = Jobs