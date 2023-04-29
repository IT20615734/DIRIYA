import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

// user name that logged user
// Role of the logged user
const userContext = createContext();

function UserContext({children}) {

    const [user,setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('user');
        // console.log(token)
        const config = {
            headers :{
                authorization : `Bearer ${token}`
            }
        }
        if (token){
            axios.get('http://localhost:8080/authUser/getMe',config).then(res =>{
                // console.log(res.data.user)
                if(!localStorage.getItem("Role")){

                    localStorage.setItem("Role",res.data.user.role)
                }
                
                setUser(res.data.user)
                
            })
        }
    }, [user])

  return (
    <userContext.Provider value = {{user,setUser}}>
        {children}
    </userContext.Provider>
  )
}

export const UserDetails = () => useContext(userContext);

export default UserContext;