const router = require("express").Router();
const Jobs = require("../models/Jobs");

router.route("/").get(async (req, res) => {
    await Jobs.find()
      .then((data) => {
        res.status(200).send({ status: " Data Recieved ", AddJob: data });
      })
      .catch((err) => {
        res.status(400).send({ status: err });
      });
  });

  router.route("/AddJob").post(async (req, res) => {
  
    try {
      const {
        jobId,
        jobTitle,
        district,
        gender,
        numberOfPeople,
        companyName,
        contactNumber,
      } = req.body;
      const newJob = new Jobs({
        jobId,
        jobTitle,
        district,
        gender,
        numberOfPeople,
        companyName,
        contactNumber,
      });
  
      return await newJob
        .save()
        .then(() => {
          res.status(200).send({ status: "New Job added" });
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
  
    Jobs.findByIdAndDelete(id)
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
        jobTitle,
        district,
        gender,
        numberOfPeople,
        companyName,
        contactNumber,
    } = req.body;
    const id = req.params.id;
  
    const newData = {
        jobTitle,
        district,
        gender,
        numberOfPeople,
        companyName,
        contactNumber,
    };
    console.log("id is " + id);
    Jobs.findByIdAndUpdate(id,newData).then((value)=>{
      return res.status(201).json({"message" : "updated succesfully",value})
    })
      .catch((err) => {
        return res.status(400).send({ state: err });
      });
  });

  router.route("/updatebyone/:id").put(async (req, res) => {
    console.log("update method called");
    const id = req.params.id;
  
    try {
      const job = await Jobs.findById(id);
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
  
      job.numberOfPeople -= 1;
      await job.save();
  
      return res.status(200).json({ message: "Number of people reduced by one", job });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  });
  

  module.exports = router;