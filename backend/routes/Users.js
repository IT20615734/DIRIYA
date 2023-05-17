const router = require("express").Router();
const User = require("../models/Users");

router.route("/").get(async (req, res) => {
  await User.find()
    .then((data) => {
      res.status(200).send({ status: " Data Recieved ", AddUser: data });
    })
    .catch((err) => {
      res.status(400).send({ status: err });
    });
});

router.route("/AddUser").post(async (req, res) => {
  // const{role,firstName,lastName,address,email,mobileNumber,userName,Password} = req.body;

  try {
    const {
      userId,
      role,
      fullName,
      nic,
      address,
      gsDivision,
      email,
      mobileNumber,
      userName,
      Password,
    } = req.body;
    const newUser = new User({
      userId,
      role,
      fullName,
      nic,
      address,
      gsDivision,
      email,
      mobileNumber,
      userName,
      Password,
    });

    return await newUser
      .save()
      .then(() => {
        res.status(200).send({ status: "New user added" });
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

  User.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ state: "Deleted Successfully" });
    })
    .catch((err) => {
      res.status(100).send({ state: err });
    });
});

router.route("/update/:id").put(async (req, res) => {
  console.log("update metod called");
  const {
    role,
    fullName,
    nic,
    address,
    gsDivision,
    email,
    mobileNumber,
    userName,
    Password,
  } = req.body;
  const id = req.params.id;

  const newData = {
    role,
    fullName,
    nic,
    address,
    gsDivision,
    email,
    mobileNumber,
    userName,
    Password,
  };
  console.log("id is " + id);
  User.findByIdAndUpdate(id,newData).then((value)=>{
    return res.status(201).json({"message" : "updated succesfully",value})
  })
    .catch((err) => {
      return res.status(400).send({ state: err });
    });
});

module.exports = router;
