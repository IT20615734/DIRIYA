import { React  } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Donations from './Donations'


//export default function AddDonations() {

function AddDonations() {

    
    
  return (
    <>
    <Donations/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form >
    <h1 style={{fontWeight:'bold'}}><center>ADD DONATIONS</center></h1>
        <br></br>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name of the Donator</Form.Label>
            <Form.Control type="text" required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text"  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text"  maxLength={12} minLength ={10} required/>
        </Form.Group>
                                                                          

         <Form.Group className="mb-3" controlId="formBasicEmail">  
            <Form.Label>Exp Date</Form.Label>
            <Form.Control type="text"  required/>
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MFD</Form.Label>
            <Form.Control type="text"  maxLength={10} minLength ={10} required/>
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Item</Form.Label>
            <Form.Control type="text"  maxLength={10} minLength ={10} required/>
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="text"  maxLength={10} minLength ={10} required/>
        
        </Form.Group>
    

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Add
        </Button>
    </Form>

    </Container>
    </>
  )
}


export default AddDonations;
