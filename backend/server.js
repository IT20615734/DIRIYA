const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser"); //js middleware
require("dotenv").config();

//////dinuka add/////
const cookieParser = require("cookie-parser");
//////end///////////

//MONGODB Connect
const port = process.env.PORT || 8070;

const url = process.env.MONGODB_URL;

// app.use(cors());
app.use(bodyParser.json());

////////////////dinuka add////////////
//connect routes>foodmanagement.js file
const foodRoutes = require("./routes/food-router");

//Middelware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//localhost:8070/diriya
app.use("/diriya", foodRoutes);
///////////end ///////////////////

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDb connected!");
});

// // http://localhost:8080/User
// const User = require('./routes/Users.js');
// app.use("/Users",User);

app.listen(port, () => {
  console.log("PORT connected on " + port);
});
