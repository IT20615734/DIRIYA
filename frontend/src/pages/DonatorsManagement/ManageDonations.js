import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Donations from './Donations'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


export default function ManageDonations() {
  return (
    <>
    < Donations/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>DONATIONS</h2>
      <br></br>
      <Link to = "/Donations/AddnewDonations"><Button variant="primary">Add new Donation</Button></Link>
      
      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th> Donate ID</th>
          <th> NIC </th>
          <th> Address</th>
          <th> Tel</th>
          <th> item Name</th>
          <th> Quantity KG</th>
          <th> MFD & EXP</th>
          <th> Action</th>
        </tr>
      </thead>
         
      <tbody>
        <tr style={{textAlign : 'center',fontWeight : '400'}}>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td><center><Button variant="outline-primary">Change Details</Button>        <Button variant="outline-danger">Delete</Button></center></td>
        </tr>
        <tr style={{textAlign : 'center',fontWeight : '400'}}>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td>Ex</td>
            <td><center><Button variant="outline-primary">Change Details</Button>        <Button variant="outline-danger">Delete</Button></center></td>
        </tr>


      </tbody>
      </Table>
    </Container>

    </>
    )
}
