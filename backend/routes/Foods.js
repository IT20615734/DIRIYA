const router = require("express").Router();
const Foods = require("../models/Foods");

router.route("/").get(async (req, res) => {
  await Foods.find()
    .then((data) => {
      res.status(200).send({ status: " Data Recieved ", AddFood: data });
    })
    .catch((err) => {
      res.status(400).send({ status: err });
    });
});

router.route("/:id").get(async (req, res) => {
  const foodId = req.params.id; // Get the food ID from the request parameters
  try {
    const food = await Foods.findById(foodId); // Find the food by its ID using Mongoose
    if (!food) {
      return res.status(404).send({ status: "Food not found" });
    }
    res.status(200).send({ status: "Data Received", food });
  } catch (err) {
    res.status(400).send({ status: err.message });
  }
});

router.route("/AddFood").post(async (req, res) => {
  // const{role,firstName,lastName,address,email,mobileNumber,userName,Password} = req.body;

  try {
    const { foodCategory, quantity, donaterName, remarks } = req.body;
    const newFood = new Foods({
      foodCategory,
      quantity,
      donaterName,
      remarks,
    });

    return await newFood
      .save()
      .then(() => {
        res.status(200).send({ status: "New Food Stock added" });
      })
      .catch((e) => {
        return res.status(400).send({ status: e });
      });
  } catch (err) {
    console.log("Error => " + err);
    return res.status(500).json({ err });
  }
});

router.route("/delete/:id").delete((req, res) => {
  const id = req.params.id;

  Foods.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ state: "Deleted Successfully" });
    })
    .catch((err) => {
      res.status(100).send({ state: err });
    });
});

//update reterive part
router.route("/update").put(async (req, res) => {
  console.log("update method called");
  const { foodCategory, quantity, donaterName, remarks } = req.body;
  const id = req.body.id;

  const newData = {
    foodCategory,
    quantity,
    donaterName,
    remarks,
  };
  console.log("id is " + id);
  Foods.findByIdAndUpdate(id, newData)
    .then((value) => {
      return res.status(201).json({ message: "updated succesfully", value });
    })
    .catch((err) => {
      return res.status(400).send({ state: err });
    });
});

module.exports = router;
