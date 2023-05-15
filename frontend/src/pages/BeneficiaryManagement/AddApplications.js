import { React ,useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Applications from './Beneficiaries'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



export default function AddApplications() {

    // const[beneficiaryID, setBeneficiaryID] = useState();
    const[jobTitle, setJobTitle] =useState();
    const[district, setDistrict] =useState();
    const[applicantName, setApplicantName] =useState();
    const[nic, setnic] =useState();
    const[gender, setGender] =useState();
    const[dateOfBirth, setDateOfBirth] =useState();
    const[mobileNumber, setMobileNumber] =useState();
    
    const navigate = useNavigate();


    const Validate =(e)=>{
        e.preventDefault();

        const formData = new FormData();
            //formData.append("beneficiaryID",beneficiaryID);
            formData.append("jobTitle",jobTitle)
            formData.append("district",district)
            formData.append("applicantName",applicantName);
            formData.append("nic",nic);
            formData.append("gender",gender);
            formData.append("dateOfBirth",dateOfBirth);
            formData.append("mobileNumber",mobileNumber);
        
    const  data = 
        {
            "jobTitle":jobTitle,
            "district":district,
            "applicantName":applicantName,
            "nic":nic,
            "gender":gender,
            "dateOfBirth":dateOfBirth,
            "mobileNumber":mobileNumber,
        }


        console.log("FormData", formData )
        axios.post("http://localhost:8080/Applications/AddApplications", data).then(res=>{
            alert ("New Application Added!")
            navigate(-1);
            console.log("data adedd")
            navigate(-1);

            
        }).catch(err=>{
            alert(err)
        })
    }

  return (
    <>
    <Applications/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>ADD JOB APPLICATIONS</center></h1>
        <br></br>
        <hr></hr>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Reference No</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setBeneficiaryID(e.target.value)}} required/>
        </Form.Group> */}
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setJobTitle(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" >
              <Form.Label>GN Division</Form.Label>
              <Form.Select onChange={(e)=>{setDistrict(e.target.value)}}  required >
                <option></option>
                <option value = 'Negombo'>Negombo</option>
                <option value = 'Katana'>Katana</option>
                <option value='Divulapitiya'>Divulapitiya</option>``
                <option value='Mirigama'>Mirigama</option>
                <option value='Minuwangoda'>Minuwangoda</option>
                <option value='Wattala'>Wattala</option>
                <option value='Ja-Ela'>Ja-Ela</option>
                <option value='Gampaha'>Gampaha</option>
                <option value='Attanagalla'>Attanagalla</option>
                <option value='Dompe'>Dompe</option>
                <option value='Mahara'>Mahara</option>
                <option value='Kelaniya'>Kelaniya</option>
                <option value='Biyagama'>Biyagama</option>
              </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Applicant Name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setApplicantName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setnic(e.target.value)}} maxLength={12} minLength ={10} placeholder='Eg: [123456789V or 123456789101]' required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Select onChange={(e)=>{setGender(e.target.value)}}  required >
                <option></option>
                <option value = 'Male'>Male</option>
                <option value = 'Female'>Female</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            {/* <DatePicker selected={selectedDate} onChange={handleDateChange} /> */}
            <Form.Control type="date" onChange={(e)=>{setDateOfBirth(e.target.value)}} maxLength={10} minLength ={10} placeholder='YY/MM/DD' required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text"maxLength={10} minLength ={10} onChange={(e)=>{setMobileNumber(e.target.value)}} placeholder='Eg: 076 155 4468' required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}

