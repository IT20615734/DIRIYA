const Users = require('../models/Users')
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');



const getLoggedInuser = async(req,res) =>{
    const {userName,password} = req.body;
    console.log(userName,password)

    await Users.findOne({userName:userName}).then((User)=>{
        if(User && bycrypt.compare(password,User.password)){
            console.log("Password confirmed")
            res.status(200).send({status : "Password Confirmed"})

        }else{
            res.status(400).send({status : "Current password is wrong "})

        }
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}

const updateUserPassword =  async(req,res) =>{
    const {Email,
        Role,
        mobile,
        name,
        userName,
        newPassC,
        id
    } = req.body;

    console.log(id)
    console.log(newPassC+"This is the new Password")

    const salt = await bycrypt.genSalt(10)
    const hashedPass = await bycrypt.hash(newPassC,salt)

    const newPassword = {
        Email,
        Role,
        mobile,
        name,
        userName,
        password:hashedPass
    }

    console.log(newPassword)

    await Users.findByIdAndUpdate(id,newPassword).then((User)=>{
            res.status(200).send({status : "Password Updated"})
       
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })

}
// @desc get all users
// @route POST /userControl/
// @access private 
const getAllUsers = async(req,res) =>{
    await Users.find().then((Users)=>{
        res.status(200).send({status : "data Received", Users : Users})
    }).catch(err =>{
        res.status(400).send({status :err})
        
    })
}

// @desc Register a User
// @route POST/Users/RegisterUser
// access public
const RegisterUser = async(req,res) =>{

    const{userId,role,fullName,nic,address,email,mobileNumber,userName,Password} = req.body;

    // console.log(userId);
    // console.log(role);
    // console.log(fullName);
    // console.log(nic);
    // console.log(address);
    // console.log(email);
    // console.log(mobileNumber);
    // console.log(userName);
    // console.log(Password);
    
    const userExixsts = await Users.findOne({userName : userName});
    if(userExixsts){
        res.status(400).send({status : "Use a different User Name"})
    }else{
        
        // Hash the password
        const salt = await bycrypt.genSalt(10)
        const hashedPass = await bycrypt.hash(Password,salt)
        // create user
        const newUser = new Users({
          userId:userId,
          role:role,
          fullName:fullName,
          nic:nic,
          address:address,
          email:email,
          mobileNumber:mobileNumber,
          userName:userName,
          Password:hashedPass

        })

        console.log("user before mongo  ",newUser)

        // save user to users

        await newUser.save().then(() =>{
            res.status(200).send({status : "User Registration Successfull!"})
        }).catch(err =>{
            res.status(400).send({status : err})

        })

        // })
    }
}

// @desc UpdateAUser
// @route PUT/authUser/UpdateUser
// access public
const UpdateUser = async(req,res) =>{

    const{fName,MNumber,Username, Password,role,Email,id} = req.body;
    
        
        // Hash the password
        const salt = await bycrypt.genSalt(10)
        const hashedPass = await bycrypt.hash(Password,salt)
        // create user
        const updateUser = {
            name:fName,
            userName:Username,
            mobile:MNumber,
            password:hashedPass,
            Email,
            Role:role,
        }

        // save user to users
        await Users.findByIdAndUpdate(id,updateUser).then(() =>{
            res.status(200).send({status : "User Updated Successfull!"})
        }).catch(err =>{
            res.status(400).send({status : err})

        })

        
}

// @desc delete A user
// @route deletet/userControl/delete
// access private
const deleteUser = async(req,res) =>{
    const id = req.params.id;
    await Users.findByIdAndDelete(id).then(()=>{
        res.status(200).send({state:"Deleted"})
    }).catch(err =>{
        res.status(400).send({state:err})

    })
}








// @desc get the current logged in user
// @route GET/userControl/getMe
// access private
const getMe = async(req,res) =>{
    // res.status(200).send({data:"this is me"})
    res.status(201).send({user:req.user})
    // await Users.find({_id:id}).then(data =>{
    //     res.status(201).send({user:data})
    // }).catch(err =>{
    //     res.status(400).send({status : err})
    
    // })
}

// @desc Login a user
// @route GET/userControl/login
// access public
const login = async(req,res) =>{

    const {username,password} = req.body;

    console.log(username);
    console.log(password);
    
    const findUser = await Users.findOne({userName:username})
    
    console.log("find user ",findUser)
    
    // ////console.log(await bycrypt.compare(password,findUser.password))
    
    if(findUser && (await bycrypt.compare(password,findUser.Password))){
            res.status(200).send({token:genarateToken(findUser._id),user:findUser})
        }else{
        res.status(400).send({status:"UserName or Password incorrect"})
    } 
}

// genarate JWT
const genarateToken = (id) =>{
    return jwt.sign(
        {id}, 
        process.env.JWT_SECRET,
        {
            expiresIn : '30d',
        }
        )
}



// module.exports = router;
module.exports = {getMe,login,deleteUser,getAllUsers,RegisterUser,UpdateUser,
    getLoggedInuser,updateUserPassword}