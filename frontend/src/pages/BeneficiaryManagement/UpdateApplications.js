//form to edit data and send updates to a server. 
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Navigate,useLocation,useNavigate,useParams } from "react-router-dom";
import Applications from './Beneficiaries'

export default function UpdateBeneficiaries() {
    //const[beneficiaryID, setBeneficiaryID] = useState();
    const[jobTitle, setJobTitle] =useState();
    const[district, setDistrict] =useState();
    const[applicantName, setaAplicantName] =useState();
    const[nic, setNic] =useState();
    const[gender, setGender] =useState();
    const[dateOfBirth, setDateOfBirth] =useState();
    const[mobileNumber, setMobileNumber] =useState();

    const location = useLocation();
const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/Applications")
      .then((value) => {
        const applications = value.data.AddApplications;
        for (let application of applications) {
          if (application["_id"] === id) {
            console.log("user found");

            //setBeneficiaryID(beneficiary["beneficiaryID"]);
            setJobTitle(application["jobTitle"]);
            setDistrict(application["district"]);
            setaAplicantName(application["applicantName"]);
            setNic(application["nic"]);
            setGender(application["gender"]);
            setDateOfBirth(application["dateOfBirth"]);
            setMobileNumber(application["mobileNumber"]);
          }
        }
        })
        .catch((err) => {
            console.log("cant find the beneficiary" + err);
        });
    }, []);

    const navigate = useNavigate();

    const Validate = async (e)=>{
        e.preventDefault();

        const data = {
            //beneficiaryID: beneficiaryID,
            jobTitle: jobTitle,
            district: district,
            applicantName: applicantName,
            nic: nic,
            gender: gender,
            dateOfBirth: dateOfBirth,
            mobileNumber: mobileNumber,
           
        };
     
        await axios
        .put("http://localhost:8080/Applications/update/"+id, data)
        .then((res) => {
          alert("Update Application");
          navigate(-1);
        })
        .catch((err) => {
          console.log(err);
          alert(
            "There is an existing Application by this name; use different name " +
              err
          );
        });   
    };

  return (
    <>
    <Applications/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>
   
    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>EDIT DETAILS</center></h1>
        <br></br>
        <hr></hr>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary ID</Form.Label>
            <Form.Control type="text" value={beneficiaryID} onChange={(e)=>{setBeneficiaryID(e.target.value)}} required/>
        </Form.Group> */}
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" value={jobTitle} onChange={(e)=>{setJobTitle(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>District</Form.Label>
            <Form.Select value={district} onChange={(e) => {setDistrict(e.target.value);}} required>
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Applicant Name</Form.Label>
            <Form.Control type="text" value={applicantName} onChange={(e)=>{setaAplicantName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" value={nic} onChange={(e)=>{setNic(e.target.value)}} maxLength={12} minLength ={10} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="text" value={dateOfBirth} onChange={(e)=>{setDateOfBirth(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" value={gender} onChange={(e)=>{setMobileNumber(e.target.value)}} maxLength={10} minLength ={10} required/>
        
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}

