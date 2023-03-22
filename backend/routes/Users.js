const router = require('express').Router();
const {User} = require('../controller/UserController');

//save user
router.post('/AddUser',User);




module.exports = router;