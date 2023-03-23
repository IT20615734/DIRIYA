const Food = require("../models/food-model");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const { sortBy } = require("lodash");

exports.createFood = async (req, res) => {
  const food = new Food(req.body);

  const { foodname, foodID, weight, donater } = food;

  if (!foodname || !foodID || !weight || !donater) {
    return res.status(400).json({
      error: "Please include all fields...",
    });
  }

  const result = await food.save();
  return res.json(result);
};

exports.getFood = (req, res) => {
  req.food.photo = undefined;
  return res.json(req.food);
};

exports.removeFood = (req, res) => {
  const food = req.food;

  food.remove((err, deletedFood) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this item",
      });
    }
    res.json({
      message: "Successfull deleted",
      deletedFood,
    });
  });
};

exports.updateFood = (req, res) => {
  const food = req.food;

  food.foodname = req.body.foodname;
  food.foodID = req.body.foodID;
  food.weight = req.body.weight;
  food.donater = req.body.donater;

  food.save((err, updatedFoodItem) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update food !",
      });
    }
    res.json(updatedFoodItem);
  });
};

exports.getAllFood = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

  Food.find()
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, food) => {
      if (err) {
        return res.status(400).json({
          error: "NO food in the database",
        });
      }
      res.json(food);
    });
};

exports.getFoodById = (req, res, next, id) => {
  Food.findById(id).exec((err, food) => {
    if (err) {
      return res.status(400).json({
        error: "Get food by id :Food not found",
      });
    }
    req.food = food;
    next();
  });
};
