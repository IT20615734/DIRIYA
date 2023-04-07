const mongoose = require('mongoose');

var Food = new mongoose.Schema({
    foodCategory:{
        type:String,
        required:true,
        index:true,
    },
    quantity:{
        type:String,
        required:true,
    },
    donaterName:{
        type:String,
        required:true,
    },
});
const Foods = mongoose.model("Food", Food);
module.exports = Foods;