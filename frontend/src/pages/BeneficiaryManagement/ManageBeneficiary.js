import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Beneficiaries from './Beneficiaries'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function ManageBeneficiary() {
  return (
    <>
    <Beneficiaries/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>BENEFICIARIES</h2>
      <br></br>
      <Link to = "/Beneficiaries/AddBeneficiaries"><Button variant="primary">Add Beneficiary</Button></Link>
      
      <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th> Beneficiary ID</th>
          <th> Beneficiary Name</th>
          <th> Address</th>
          <th> Mobile Number</th>
          <th> Number of Family Members</th>
          <th> Action</th>
         
        </tr>
        <tr style={{textAlign : 'center',fontWeight : '400'}}>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td><center><Button variant="outline-primary">Edit</Button>        <Button variant="outline-danger">Delete</Button></center></td>
        </tr>
        <tr style={{textAlign : 'center',fontWeight : '400'}}>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td><center><Button variant="outline-primary">Edit</Button>        <Button variant="outline-danger">Delete</Button></center></td>
        </tr>

      </thead>
      <tbody>

      </tbody>
      </Table>
    </Container>

    </>
    )
}
