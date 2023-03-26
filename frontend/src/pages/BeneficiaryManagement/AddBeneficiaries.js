import { React ,useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Beneficiaries from './Beneficiaries'
import axios from 'axios';

//export default function AddBeneficiary() {

function AddBeneficiaries() {

    const[beneficiaryID, setBeneficiaryID] = useState();
    const[beneficiaryName, setBeneficiaryName] =useState();
    const[address, setAddress] =useState();
    const[nic, setnic] =useState();
    const[email, setEmail] =useState();
    const[mobileNumber, setMobileNumber] =useState();
    const[numberOfFamilyMembers, setnumberOfFamilyMembers] =useState();

    const Validate =(e)=>{
        e.preventDefault();

        const formData = new FormData();
            formData.append("beneficiaryID",beneficiaryID);
            formData.append("beneficiaryName",beneficiaryName)
            formData.append("address",address)
            formData.append("nic",nic);
            formData.append("email",email);
            formData.append("mobileNumber",mobileNumber);
            formData.append("numberOfFamilyMembers",numberOfFamilyMembers);
        
    const  data = 
        {
            "beneficiaryID":beneficiaryID,
            "beneficiaryName":beneficiaryName,
            "address":address,
            "nic":nic,
            "email":email,
            "mobileNumber":mobileNumber,
            "numberOfFamilyMembers":numberOfFamilyMembers,
        }


        console.log("FormData", formData )
        axios.post("http://localhost:8080/Beneficiaries/AddBeneficiaries", data).then(res=>{
            alert ("New Beneficiary Added!")

        }).catch(err=>{
            alert(e)
        })
    }
    
  return (
    <>
    <Beneficiaries/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>ADD BENEFICIARIES</center></h1>
        <br></br>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary ID</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setBeneficiaryID(e.target.value)}} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setBeneficiaryName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setAddress(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setnic(e.target.value)}} maxLength={12} minLength ={10} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setEmail(e.target.value)}} required/>
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setMobileNumber(e.target.value)}} maxLength={10} minLength ={10} required/>
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of Family Members</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setnumberOfFamilyMembers(e.target.value)}} required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}


export default AddBeneficiaries;
