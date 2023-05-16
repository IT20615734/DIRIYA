const router = require('express').Router();
const Donations = require('../models/Donations');

router.route("/").get(async (req, res) => {
  await Donations.find()
  .then((data) => {
      res.status(200).send({ status: " Data Recieved ", AddDonations : data });
    })
    .catch((err) => {
      res.status(400).send({ status: err });
    });
});

router.route("/AddDonations").post(async (req, res) => {
  try {
    const {
      donationID,
      dname,
      foodCategory,
      quantity,
      dateOfHandOver,
      district,
      mobileNumber,
    } = req.body;
    const newDonation = new Donations({
        donationID,
        dname,
        foodCategory,
        quantity,
        dateOfHandOver,
        district,
        mobileNumber,
    });

    return await newDonation
      .save()
      .then(() => {
        res.status(200).send({ status: "New Donation added" });
      })
      .catch((e) => {
        return res.status(400).send({ status: e });
      })
  } catch (err) {
    console.log("Error => " + err);
    return res.status(500).json({ err });
  }
});

router.route("/delete/:id").delete((req, res) => {
  const id = req.params.id;

  Donations.findByIdAndDelete(id)
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
      dname,
      foodCategory,
      quantity,
      dateOfHandOver,
      district,
      mobileNumber,
  } = req.body;
  const id = req.params.id;

  const newData = {
      dname,
      foodCategory,
      quantity,
      dateOfHandOver,
      district,
      mobileNumber,
  };
  console.log("id is " + id);
  Donations.findByIdAndUpdate(id,newData).then((value)=>{
    return res.status(201).json({"message" : "updated succesfully",value})
  })
    .catch((err) => {
      return res.status(400).send({ state: err });
    });
});

module.exports = router;
