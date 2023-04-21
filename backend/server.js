const express = require('express');
const mongoose =  require ('mongoose');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); //js middleware

require("dotenv").config();

//////dinuka add/////
const cookieParser = require("cookie-parser");
//////end///////////

//MONGODB Connect
const port = process.env.PORT || 8080;

const url = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

//Middelware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDb connected!");
});

//http://localhost:8080/User/AddUser
const Users = require('./routes/Users.js');
app.use("/User",Users);



//http://localhost:8080/Beneficiaries/AddBeneficiaries
const Beneficiaries = require('./routes/Beneficiaries.js');
app.use("/Beneficiaries",Beneficiaries);

//http://localhost:8080/Applications/AddApplications
const Applications = require('./routes/Applications.js');
app.use("/Applications",Applications);



//http://localhost:8080/Donations/AddDonations
const Donations = require('./routes/Donations.js');
app.use("/Donations",Donations);

//http://localhost:8080/Food/AddFood
const Foods = require('./routes/Foods.js');
app.use("/Food",Foods);

//http://localhost:8080/Job/AddJob
const Jobs = require('./routes/Jobs.js');
app.use("/Job",Jobs);






app.listen(port, () => {
  console.log("PORT connected on " + port);
});
