const express = require("express");
const router = express.Router();

const {
  getFoodById,
  createFood,
  getFood,
  removeFood,
  updateFood,
  getAllFood,
} = require("../controller/food-controller");

//all of params ///////////////////
router.param("foodId", getFoodById);
////////////////////////////////////

router.post("/add/food", createFood);

router.get("/food/id/:foodId", getFood);

router.put("/update/:foodId", updateFood);

router.delete("/food/:foodId", removeFood);

router.get("/food/all", getAllFood);

module.exports = router;
