import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateJob() {
    const[jobId, setJobId] = useState();
    const[jobTitle,setjobTitle] = useState();
    const[district,setdistrict] = useState();
    const[gender,setgender] = useState();
    const[numberOfPeople,setnumberOfPeople] = useState();
    const[companyName,setcompanyName] = useState();
    const[contactNumber,setcontactNumber] = useState();

  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/Job/")
      .then((value) => {
        const Jobs = value.data.AddJob;
        for (let Job of Jobs) {
          if (Job["_id"] === id) {
            //console.log("user found");
            setJobId(Job["jobId"]);
            setjobTitle(Job["jobTitle"]);
            setdistrict(Job["district"]);
            setgender(Job["gender"]);
            setnumberOfPeople(Job["numberOfPeople"]);
            setcompanyName(Job["companyName"]);
            setcontactNumber(Job["contactNumber"]);

          }
        }
      })
      .catch((err) => {
        console.log("cant find the user " + err);
      });
  }, []);

  const navigate = useNavigate();

  const Validate = async (e) => {
    e.preventDefault();

    const data = {
        jobId : jobId,
        jobTitle : jobTitle,
        district : district,
        gender : gender,
        numberOfPeople : numberOfPeople,
        companyName : companyName,
        contactNumber : contactNumber,
    };

    await axios
      .put("http://localhost:8080/Job/update/"+id, data)
      .then((res) => {
        alert("Update Job");
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
        alert(
          "There is an existing user by this job Title; use different Job Title " +
            err
        );
      });
  };

  return (
    <>
    <Admin/>
    <Container style={{marginTop : '1%',display : 'block',width : '35%',justifyContent : 'center'}}>

    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>UPDATE JOB OPPORTUNITY</center></h1>
        <br></br>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Id</Form.Label>
            <Form.Control type="text" disabled={true} value={jobId}onChange={(e) => {setJobId(e.target.value);}}required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" value={jobTitle}onChange={(e) => {setjobTitle(e.target.value);}} required/>
        </Form.Group>

        <Form.Group className="mb-3" >
              <Form.Label>District</Form.Label>
              <Form.Select value={district}onChange={(e) => {setdistrict(e.target.value);}} required >
                <option></option>
                <option value = 'Colombo'>Colombo</option>
                <option value = 'Gampaha'>Gampaha</option>
                <option value='Kalutara'>Kalutara</option>``
                <option value='Kandy'>Kandy</option>
                <option value='Matale'>Matale</option>
                <option value=' NuwaraEliya'> Nuwara Eliya</option>
                <option value='Galle'>Galle</option>
                <option value='Matara'>Matara</option>
                <option value='Hambantota'>Hambantota</option>
                <option value='Jaffna'>Jaffna</option>
                <option value='Kilinochchi'>Kilinochchi</option>
                <option value='Mannar'>Mannar</option>
                <option value='Vavuniya'>Vavuniya</option>
                <option value='Mullaitivu'>Mullaitivu</option>
                <option value='Batticaloa'>Batticaloa</option>
                <option value='Ampara'>Ampara</option>
                <option value='Trincomalee'>Trincomalee</option>
                <option value='Kurunegala'>Kurunegala</option>
                <option value='Puttalam'>Puttalam</option>
                <option value='Anuradhapura'>Anuradhapura</option>
                <option value='Polonnaruwa'>Polonnaruwa</option>
                <option value='Badulla'>Badulla</option>
                <option value='Moneragala'>Moneragala</option>
                <option value='Ratnapura'>Ratnapura</option>
                <option value='Kegalle'>Kegalle</option>
              </Form.Select>
        </Form.Group>
  
        <Form.Group className="mb-3" >
              <Form.Label>Gender</Form.Label>
              <Form.Select value={gender}onChange={(e) => {setgender(e.target.value);}} required >
                <option></option>
                <option value = 'Male'>Male</option>
                <option value = 'Female'>Female</option>
              </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of People</Form.Label>
            <Form.Control type="text" value={numberOfPeople}onChange={(e) => {setnumberOfPeople(e.target.value);}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company Names</Form.Label>
            <Form.Control type="text" value={companyName}onChange={(e) => {setcompanyName(e.target.value);}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company Contact Number</Form.Label>
            <Form.Control type="text" maxLength={10} minLength ={10} value={contactNumber}onChange={(e) => {setcontactNumber(e.target.value);}}  required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>

    </Form>

    </Container>
    </>
  )
}

export default UpdateJob;