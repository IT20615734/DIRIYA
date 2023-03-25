import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Applications from './Beneficiaries'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'

export default function ManageApplication() {
  return (
    <>
    <Applications/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>APPLICATIONS</h2>
      <br></br>
      {/* <Link to = "/Beneficiaries/AddApplications"><Button variant="primary">Add Applications</Button></Link> */}
      
      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th> Reference No</th>
          <th> Job Title</th>
          <th> District</th>
          <th> Applicant Name</th>
          <th> NIC</th>
          <th> Gender</th>
          <th> Date of Birth</th>
          <th> Action</th>
         
        </tr>
        <tr style={{textAlign : 'center',fontWeight : '400'}}>
            <td>Ex</td>
            <td>Ex</td>
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
