const mongoose = require("mongoose");

var Food = new mongoose.Schema({
  foodCategory: {
    type: String,
    required: true,
    index: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  donaterName: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
});
const Foods = mongoose.model("Food", Food);
module.exports = Foods;
