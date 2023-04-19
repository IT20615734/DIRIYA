import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';

function Login () {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Perform authentication logic here
    // Example: Send API request to backend for authentication
    // using username and password

    // For simplicity, let's assume successful authentication
    const authenticated = true;

    if (authenticated) {
      // Redirect to dashboard or home page
      window.location.href = "/dashboard";
    } else {
      // Display error message
      setError("Invalid username or password");
    }
  };

  return (
    <Container style={{marginTop : 100,width : '500px' , border:'1px solid black', padding:'15px', borderRadius:'20px',marginBottom:20}}>
    <Form>
        <h2 style={{textAlign:'center', fontSize:'40px', fontWeight:'bold'}}>Login</h2>
        <hr style={{width:'100%'}}></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name: </Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" style={{width:'5in'}}  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" style={{width:'5in'}}  required/>
        </Form.Group>

        <Button type="submit" style={{backgroundColor:'blue', padding:'10px', borderRadius:'6px', width:'60%', textAlign:'center', marginLeft:'20%', marginBottom:'5px', border:'2px solid black'}} >
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