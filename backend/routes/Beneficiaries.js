const router = require('express').Router();
//const { count } = require('../models/Beneficiaries');
const Beneficiaries = require('../models/Beneficiaries');

router.route("/").get(async (req,res) =>{
    await Beneficiaries.find().then((data) =>{
         res.status(200).send({status :" Data Recieved ", AddBeneficiaries : data});
     }).catch((err)=>{
         res.status(400).send({status :err})
 
     })
 })

 router.route("/AddBeneficiaries").post(async(req,res) => {
    
try{
    const{
        //beneficiaryID,
        beneficiaryName,
        address,
        nic,
        mobileNumber,
        numberOfFamilyMembers
    } = req.body;
const newBeneficiary = new Beneficiaries({
    // beneficiaryID,
    beneficiaryName,
    address,
    nic,
    mobileNumber,
    numberOfFamilyMembers,
})

 return await newBeneficiary.save().then(() =>{
        res.status(200).send({status:"New Beneficiary Added"})
    }).catch((e)=>{
  return res.status(400).send({status : e})
    })
    }catch(err){
    console.log("Error => "+err)
    return res.status(500).json({err})
}
})

router.route("/delete/:id").delete((req,res)=>{
    const id  = req.params.id;

    Beneficiaries.findByIdAndDelete(id).then(()=>{
        res.status(200).send({state:"Deleted Successfully"});
    }).catch(err =>{
        res.status(100).send({state:err});
        
    })

})

//update reterive part
router.route("/update/:id").put(async (req, res) => {
    console.log("update method called");
    const {
        //beneficiaryID,
        beneficiaryName,
        address,
        nic,
        mobileNumber,
        numberOfFamilyMembers
    } = req.body;
    const id = req.params.id;
  
    const newData = {
        //beneficiaryID,
        beneficiaryName,
        address,
        nic,
        mobileNumber,
        numberOfFamilyMembers
    };
    console.log("id is " + id);
    Beneficiaries.findByIdAndUpdate(id,newData).then((value)=>{
      return res.status(201).json({"message" : "updated succesfully",value})
    })
      .catch((err) => {
        return res.status(400).send({ state: err });
      });
  });
module.exports = router;