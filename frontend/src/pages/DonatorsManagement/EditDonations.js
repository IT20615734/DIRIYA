import React, { useEffect, useState } from 'react'
import Donations from './Donations'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditDonations() {

  const[foodCategory, setFoodCategory] = useState();
  const[quantity, setQuantity] =useState();
  const[dateOfHandOver, setDateOfHandOver] =useState();
  const[district, setDistrict] =useState();
  const[mobileNumber, setMobileNumber] =useState();

  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/Donations")
      .then((value) => {
        const Donations = value.data.AddDonations;
        for (let Donation of Donations) {
          if (Donation["_id"] === id) {
            //console.log("user found");

            setFoodCategory(Donation["foodCategory"]);
            setQuantity(Donation["quantity"]);
            setDateOfHandOver(Donation["dateOfHandOver"]);
            setDistrict(Donation["district"]);
            setMobileNumber(Donation["mobileNumber"]);
            
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
      foodCategory: foodCategory,
      quantity: quantity,
      dateOfHandOver: dateOfHandOver,
      district: district,
      mobileNumber: mobileNumber,
    //   Password: Password,
    };

    await axios
      .put("http://localhost:8080/Donations/update/"+id, data)
      .then((res) => {
        alert("Update Donation");
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Invalid" +
            err
        );
      });
  };

  return (
    <>
    <Donations/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>EDIT DONATIONS</center></h1>
        <br></br>
        <hr></hr>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Donation ID</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setDonationID(e.target.value)}} required/>
        </Form.Group> */}


<Form.Group className="mb-3" >
              <Form.Label>Select Food Category</Form.Label>
              <Form.Select value={foodCategory}onChange={(e) => {setFoodCategory(e.target.value);}} required >
                <option></option>
                <option value = 'Rice'>Rice</option>
                <option value = 'Dhal'>Dhal</option>
                <option value='Sugar'>Sugar</option>
              </Form.Select>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="text" onChange={(e)=>{setFoodCategory(e.target.value)}} required/>
        </Form.Group> */}
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="text" value={quantity}onChange={(e) => {setFoodCategory(e.target.value);}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Hand-over</Form.Label>
            <Form.Control type="text" value={dateOfHandOver}onChange={(e) => {setDateOfHandOver(e.target.value);}} required/>
        </Form.Group>

        <Form.Group className="mb-3" >
              <Form.Label>District</Form.Label>
              <Form.Select value={district}onChange={(e) => {setDistrict(e.target.value);}} required >
                <option></option>
                <option value= 'Colombo'>Colombo</option>
                <option value= 'Gampaha'>Gampaha</option>
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
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" value={mobileNumber}onChange={(e) => {setMobileNumber(e.target.value);}} maxLength={10} minLength ={10} required/>   
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}

export default EditDonations
