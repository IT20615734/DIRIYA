const router = require('express').Router();
const { count } = require('../models/Users');
const User = require('../models/Users');

router.route("/").get(async (req,res) =>{
    await User.find().then((data) =>{
         res.status(200).send({status :" Data Recieved ", AddUser : data});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/AddUser").post(async(req,res) => {
    // const{role,firstName,lastName,address,email,mobileNumber,userName,Password} = req.body;
    
try{const{role,fullName,nic,address,email,mobileNumber,userName,Password} = req.body;
const newUser = new User({
    role,
    fullName,
    nic,
    address,
    email,
    mobileNumber,
    userName,
    Password
})

 return   await newUser.save().then(() =>{
        res.status(200).send({status:"New user added"})
    }).catch((e)=>{
  return      res.status(400).send({status : e})
    })
}catch(err){
    console.log("Error => "+err)
    return res.status(500).json({err})
}
})


module.exports = router;