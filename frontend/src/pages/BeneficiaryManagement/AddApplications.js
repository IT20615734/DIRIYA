import { React ,useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Applications from './Beneficiaries'


// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


export default function AddApplications() {

    // const DatePickerComponent = (props) => {
    //     const { label, name, value, onChange } = props;
    //     const [selectedDate, setSelectedDate] = useState(
    //       value ? new Date(value) : null
    //     );
      
    //     const handleDateChange = (date) => {
    //       setSelectedDate(date);
    //       onChange(name, date);
    //     };

  return (
    <>
    <Applications/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form /*onSubmit={Validate}*/>
    <h1 style={{fontWeight:'bold'}}><center>ADD JOB APPLICATIONS</center></h1>
        <br></br>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Reference No</Form.Label>
            <Form.Control type="text" /*onChange={(e)=>{setBeneficiaryID(e.target.value)}}*/ required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" /*onChange={(e)=>{setBeneficiaryName(e.target.value)}}*/ required/>
        </Form.Group>

        <Form.Group className="mb-3" >
              <Form.Label>District</Form.Label>
              <Form.Select  required >
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
            <Form.Control type="text" /*onChange={(e)=>{setEmail(e.target.value)}}*/ required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" /*onChange={(e)=>{setnic(e.target.value)}} maxLength={12} minLength ={10}*/ required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" /*onChange={(e)=>{setnumberOfFamilyMembers(e.target.value)}}*/ required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            {/* <DatePicker selected={selectedDate} onChange={handleDateChange} /> */}
            {/* <Form.Control type="text" onChange={(e)=>{setMobileNumber(e.target.value)}} maxLength={10} minLength ={10} required/> */}
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}



// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DatePickerComponent = (props) => {
//   const { label, name, value, onChange } = props;
//   const [selectedDate, setSelectedDate] = useState(
//     value ? new Date(value) : null
//   );

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     onChange(name, date);
//   };

//   return (
//     <div>
//       <label>{label}</label>
//       <br />
//       <DatePicker selected={selectedDate} onChange={handleDateChange} />
//     </div>
//   );
// };

// export default DatePickerComponent;
