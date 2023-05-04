import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Beneficiaries from './Beneficiaries'
import axios from 'axios';
import { Navigate,useLocation,useNavigate,useParams } from "react-router-dom";

export default function UpdateBeneficiaries() {
    const[beneficiaryID, setBeneficiaryID] = useState();
    const[beneficiaryName, setBeneficiaryName] =useState();
    const[address, setAddress] =useState();
    const[nic, setnic] =useState();
    const[mobileNumber, setMobileNumber] =useState();
    const[numberOfFamilyMembers, setnumberOfFamilyMembers] =useState();
    const[monthlyIncome, setMonthlyIncome] =useState();

    const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/Beneficiaries")
      .then((value) => {
        const beneficiaries = value.data.AddBeneficiaries;
        for (let beneficiary of beneficiaries) {
          if (beneficiary["_id"] === id) {
            console.log("user found");

            setBeneficiaryID(beneficiary["beneficiaryID"]);
            setBeneficiaryName(beneficiary["beneficiaryName"]);
            setAddress(beneficiary["address"]);
            setnic(beneficiary["nic"]);
            setMobileNumber(beneficiary["mobileNumber"]);
            setnumberOfFamilyMembers(beneficiary["numberOfFamilyMembers"]);
            setMonthlyIncome(beneficiary["monthlyIncome"]);
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
            beneficiaryID: beneficiaryID,
            beneficiaryName: beneficiaryName,
            address: address,
            nic: nic,
            mobileNumber: mobileNumber,
            numberOfFamilyMembers: numberOfFamilyMembers,
            monthlyIncome: monthlyIncome,
        };
     
        await axios
        .put("http://localhost:8080/Beneficiaries/update/"+id, data)
        .then((res) => {
          alert("Update Beneficiary");
          navigate(-1);
        })
        .catch((err) => {
          console.log(err);
          alert(
            "There is an existing beneficiary by this name; use different name " +
              err
          );
        });   
    };

  return (
    <>
    <Beneficiaries/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>
   
    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>EDIT DETAILS</center></h1>
        <br></br>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary ID</Form.Label>
            <Form.Control type="text" disabled={true} value={beneficiaryID} onChange={(e)=>{setBeneficiaryID(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary name</Form.Label>
            <Form.Control type="text" value={beneficiaryName} onChange={(e)=>{setBeneficiaryName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" value={nic} onChange={(e)=>{setnic(e.target.value)}} maxLength={12} minLength ={10} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}} maxLength={10} minLength ={10} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Monthly Income</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setMonthlyIncome(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of Family Members</Form.Label>
            <Form.Control type="text" value={numberOfFamilyMembers} onChange={(e)=>{setnumberOfFamilyMembers(e.target.value)}} required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}
