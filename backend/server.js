const express = require('express');
const mongoose =  require ('mongoose');
// const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); //js middleware
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

// app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGODB_URL;

mongoose.connect(url,{
    useNewUrlParser :true,
    useUnifiedTopology :true
});

const connection = mongoose.connection;

connection.once("open",() =>{
    console.log("MongoDb connected!");
});

// // http://localhost:8080/User
// const User = require('./routes/Users.js');
// app.use("/Users",User);

app.listen(port,()=>{
    console.log("PORT connected on "+port);
})
