const router = require("express").Router();
const { count } = require("../models/Applications");
const Applications = require("../models/Applications");

router.route("/").get(async (req, res) => {
  await Applications.find()
    .then((data) => {
      res
        .status(200)
        .send({ status: " Data Recieved ", AddApplications: data });
    })
    .catch((err) => {
      res.status(400).send({ status: err });
    });
});

router.route("/AddApplications").post(async (req, res) => {
  try {
    //console.log("caled");
    const { jobTitle, district, applicantName, nic, gender, dateOfBirth } =
      req.body;

    const newApplication = new Applications({
      // beneficiaryID,
      jobTitle,
      district,
      applicantName,
      nic,
      gender,
      dateOfBirth,
    });

    return await newApplication
      .save()
      .then(() => {
        res.status(200).send({ status: "New Applicant Added" });
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

  Applications.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ state: "Deleted Successfully" });
    })
    .catch((err) => {
      res.status(100).send({ state: err });
    });
});

//update reterive part
router.route("/update").put(async (req, res) => {
  const { jobTitle, district, applicantName, nic, gender, dateOfBirth } =
    req.body;
  const id = req.body.id;

  const newData = {
    // beneficiaryID,
    jobTitle,
    district,
    applicantName,
    nic,
    gender,
    dateOfBirth,
  };

  await Attendance.findByIdAndUpdate(id, newData)
    .then(() => {
      res.status(200).send({ state: "Updated" });
    })
    .catch((err) => {
      res.status(400).send({ state: err });
    });
});
module.exports = router;
