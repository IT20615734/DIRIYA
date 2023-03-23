const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    foodname: {
      type: String,
      required: true,
    },
    foodID: {
      type: String,
      required: true,
      maxlength: 32,
    },
    weight: {
      type: Number,
      required: true,
    },
    donater: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const foodsdata = mongoose.model("food", foodSchema);

module.exports = foodsdata;
