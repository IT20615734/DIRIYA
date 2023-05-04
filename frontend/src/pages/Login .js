import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserDetails } from '../context/UserContext';

function Login () {

  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const Navigate = useNavigate();

  const {user,setUser} = UserDetails();

  const validate=async(e) =>{

    // alert('Pressed')
    e.preventDefault();

    const data = {
      username,
      password
    }

    console.log(data);

    await axios.post("http://localhost:8080/authUser/login",data).then(res =>{
      localStorage.setItem('user',res.data.token);
      setUser(res.data.user)
      Navigate('/')
    }).catch(err =>{
      alert(err)
    })


  }
  
 
  return (
    <Container style={{marginTop : 100,width : '500px' , border:'1px solid black', padding:'15px', borderRadius:'20px',marginBottom:20}}>

    <Form onSubmit={validate}>
        <h2 style={{textAlign:'center', fontSize:'40px', fontWeight:'bold'}}>DIRIYA Account Sign-in</h2>   
        <hr style={{width:'100%'}}></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name: </Form.Label>
            <Form.Control type="text"  placeholder="Enter Username" style={{width:'5in'}} onChange={(e) => {setUsername(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" placeholder="Enter your password" style={{width:'5in'}} onChange={(e) => {setPassword(e.target.value)}} required/>
        </Form.Group>

        <Button type="submit" style={{backgroundColor:'blue', padding:'10px', borderRadius:'6px', width:'40%', textAlign:'center', marginLeft:'28%',  marginBottom:'5px', border:'2px solid black'}} >
         Login
          </Button>       
        {/* <Button type="submit" style={{backgroundColor:'blue', padding:'10px', borderRadius:'6px', width:'60%', textAlign:'center', marginLeft:'20%', border:'2px solid black'}} ><a href='/ForgetPassword' style={{textDecoration:'none', color:'white'}}>Forget Password</a></Button>        */}
        <br/>
        {/* <a href='/ForgetPassword' style={{textDecoration:'none', color:'black', justifyContent:'center', display:'flex'}}>Forget Password</a> */}
        <hr style={{background:'black', height:'2px', width:'auto'}}/>
        <div style={{ display:'flex', justifyContent:'center', borderRadius:'5px'}}>

          <Button style={{backgroundColor:'blue', padding:'10px', borderRadius:'6px', width:'60%', textAlign:'center', border:'2px solid black'}} ><a href='/Donater/NewDonater' style={{textDecoration:'none', color:'white'}}>Create an Account</a></Button>  
        </div>   
    </Form>

</Container>
  )
}

export default Login 