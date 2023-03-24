import { React ,useState } from 'react';
import Container from 'react-bootstrap/esm/Container'
import Admin from './Admin'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
//import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddUser() {

    const[role, setRole] = useState();
    const[firstName, setFirstName] =useState();
    const[lastName, setlastName] =useState();
    const[address, setAddress] =useState();
    const[email, setEmail] =useState();
    const[mobileNumber, setMobileNumber] =useState();
    const[userName, setUserName] =useState();
    const[password, setPassword] =useState();


    // const navigate = useNavigate();

    // const validate = async(e) =>{
    //     e.preventDefault();

        // const data = {
        //     role : role.current.value,
        //     firstName : firstName.current.value,
        //     lasttName : lasttName.current.value,
        //     address : address.current.value,
        //     email : email.current.value,
        //     mobileNumber : mobileNumber.current.value,
        //     userName : userName.current.value,
        //     password : password.current.value,
        // }

        // await axios.post("http://localhost:8080/authUser/RegisterUser",data).then((res) =>{
        //     alert(res.data.status)
        //     navigate(-1);
        // }).catch(err =>{
        //     // alert(err)
        //     alert( "There is an existing user by this user name; use different user name")
        // })
    //}

    const Validate =(e)=>{
        e.preventDefault();

        const formData = new FormData();
            formData.append("role",role);
            formData.append("firstName",firstName)
            formData.append("lastName",lastName)
            formData.append("address",address);
            formData.append("email",email);
            formData.append("mobileNumber",mobileNumber);
            formData.append("userName",userName);
            formData.append("password",password);
        
    const  data = 
        {
            "role":role,
            "firstName":firstName,
            "lastName":lastName,
            "address":address,
            "email":email,
            "mobileNumber":mobileNumber,
            "userName":userName,
            "Password":password
        }


        console.log("FormData", formData )
        axios.post("http://localhost:8080/User/AddUser", data).then(res=>{
            alert ("New User Added!")

        }).catch(err=>{
            alert(e)
        })
    }
        // const Back = () =>
        // navigate("/Admin/User");

  return (
    <>
    <Admin/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>


    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>PROVIDE ACCESS</center></h1>

        <br></br>
        <hr></hr>
        <Form.Group className="mb-3" >
              <Form.Label>User Type</Form.Label>
              <Form.Select  onChange={(e)=>{setRole(e.target.value)}} required >
                <option></option>
                <option value = 'Admin'>Admin</option>
                <option value = 'FoodManager'>Food Manager</option>
                <option value='VillageOfficer'>Village Officer</option>``
                <option value='Donater'>Donater</option>
              </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setFirstName(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setlastName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setAddress(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text"maxLength={10} minLength ={10} onChange={(e)=>{setMobileNumber(e.target.value)}} required/>
        </Form.Group>

        <h4 style={{fontWeight:'bold'}}>Login details</h4>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setUserName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>
    </Container>
    </>
  )
}
export default AddUser;