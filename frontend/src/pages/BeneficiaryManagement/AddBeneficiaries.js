import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Beneficiaries from './Beneficiaries'

export default function AddBeneficiary() {
  return (
    <>
    <Beneficiaries/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form>
    <h1 style={{fontWeight:'bold'}}><center>ADD BENEFICIARIES</center></h1>
        <br></br>
        <hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary ID</Form.Label>
            <Form.Control type="text"required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary name</Form.Label>
            <Form.Control type="text" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text"maxLength={10} minLength ={10} required/>
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of Family Members</Form.Label>
            <Form.Control type="text"required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}
