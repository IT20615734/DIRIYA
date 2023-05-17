import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Admin from './Admin'
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddJobs() {
  const generateRandomString = (length) => {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const[jobId, setJobId] = useState(`JI_${generateRandomString(6)}`);
  const[jobTitle,setjobTitle] = useState();
  const[district,setdistrict] = useState();
  const[gender,setgender] = useState();
  const[numberOfPeople,setnumberOfPeople] = useState();
  const[companyName,setcompanyName] = useState();
  const[contactNumber,setcontactNumber] = useState();

  const navigate = useNavigate();

  const Validate =(e)=>{
    e.preventDefault();

    const formData = new FormData();
      formData.append("jobId",jobId);
      formData.append("jobTitle",jobTitle);
      formData.append("district",district);
      formData.append("gender",gender);
      formData.append("numberOfPeople",numberOfPeople);
      formData.append("companyName",companyName);
      formData.append("contactNumber",contactNumber);

  const data =
  {
    "jobId":jobId,
    "jobTitle":jobTitle,
    "district":district,
    "gender":gender,
    "numberOfPeople":numberOfPeople,
    "companyName":companyName,
    "contactNumber":contactNumber
  }

  console.log("FormData", formData )
  axios.post("http://localhost:8080/Job/AddJob", data).then(res=>{
            alert ("New Job Opportunity Added!");
            navigate(-1);

        }).catch(err=>{
            alert(err)
        })
    }

  return (
    <>
    <Admin/>
    <Container style={{marginTop : '1%',display : 'block',width : '35%',justifyContent : 'center'}}>

    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>+ ADD JOB OPPORTUNITY</center></h1>
        <br></br>
        <hr></hr>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Reference Number</Form.Label>
            <Form.Control type="text"required/>
        </Form.Group> */}
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setjobTitle(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" >
              <Form.Label>Job Site</Form.Label>
              <Form.Select onChange={(e)=>{setdistrict(e.target.value)}} required >
                <option></option>
                <option value = 'Colombo'>Colombo</option>
                <option value = 'Gampaha'>Gampaha</option>
                <option value ='Kalutara'>Kalutara</option>``
                <option value ='Kandy'>Kandy</option>
                <option value ='Matale'>Matale</option>
                <option value =' NuwaraEliya'> Nuwara Eliya</option>
                <option value ='Galle'>Galle</option>
                <option value ='Matara'>Matara</option>
                <option value ='Hambantota'>Hambantota</option>
                <option value ='Jaffna'>Jaffna</option>
                <option value ='Kilinochchi'>Kilinochchi</option>
                <option value ='Mannar'>Mannar</option>
                <option value  ='Vavuniya'>Vavuniya</option>
                <option value ='Mullaitivu'>Mullaitivu</option>
                <option value ='Batticaloa'>Batticaloa</option>
                <option value ='Ampara'>Ampara</option>
                <option value ='Trincomalee'>Trincomalee</option>
                <option value ='Kurunegala'>Kurunegala</option>
                <option value ='Puttalam'>Puttalam</option>
                <option value ='Anuradhapura'>Anuradhapura</option>
                <option value ='Polonnaruwa'>Polonnaruwa</option>
                <option value ='Badulla'>Badulla</option>
                <option value ='Moneragala'>Moneragala</option>
                <option value ='Ratnapura'>Ratnapura</option>
                <option value ='Kegalle'>Kegalle</option>
              </Form.Select>
        </Form.Group>
  
        <Form.Group className="mb-3" >
              <Form.Label>Gender</Form.Label>
              <Form.Select onChange={(e)=>{setgender(e.target.value)}} required >
                <option></option>
                <option value = 'Male'>Male</option>
                <option value = 'Female'>Female</option>
              </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of People</Form.Label>
            <Form.Control type="number" onChange={(e)=>{setnumberOfPeople(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company Names</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setcompanyName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company Contact Number</Form.Label>
            <Form.Control type="text" maxLength={10} minLength ={10}  onChange={(e)=>{setcontactNumber(e.target.value)}} required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>

    </Form>

    </Container>
    </>
  )
}
export default AddJobs;