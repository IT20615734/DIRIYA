const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const userCollection = require('../models/Users');

const protect = asyncHandler(async(req,res,next) =>{
    let token 
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1];
            // verift the token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            // console.log(decoded.id);
            // get user from the token without password
            req.user = await userCollection.findById(decoded.id).select('-password')

            next()
        } catch (err) {
            console.log(err)
            res.status(401).send({status:'User not authorized'});
        }
    }

    if(!token){
        res.status(401).send({status:'Not authorized no token'});
    }

})

module.exports = {protect}