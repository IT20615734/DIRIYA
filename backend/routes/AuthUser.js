const router = require('express').Router();
const {protect} = require('../middleware/userAuthMiddleware')

const {getMe,login,deleteUser,getAllUsers,RegisterUser,UpdateUser,getLoggedInuser,updateUserPassword} = require('../UserController/UserController')

    router.get('/',getAllUsers);
    router.post('/getLogged',getLoggedInuser);
    router.put('/updateUserPassword',updateUserPassword);
    
    
    
    router.post('/RegisterUser',RegisterUser);
    router.put('/updateUser',UpdateUser);
    router.get('/getMe',protect,getMe);
    router.post('/login',login)
    
    router.delete('/deleteUser/:id',deleteUser)
    
    
    module.exports = router;