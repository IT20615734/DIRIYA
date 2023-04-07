import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'
import { Link } from 'react-router-dom'
import Admin from './Admin'

export default function Jobs() {
  return (
    <>
    <Admin/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>JOB OPPORTUNITIES</h2>
      <br></br>
      <Button variant="primary">+ Add Job Opportunity</Button>
      
      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th>Job Reference Number</th>
          <th> Job Title</th>
          <th> District</th>
          <th> Company Names</th>
          <th> Action</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{textAlign : 'center',fontWeight : '400'}}>
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
            <td><center><Button variant="outline-primary">Edit</Button>        <Button variant="outline-danger">Delete</Button></center></td>
        </tr>
      </tbody>


      </Table>
    </Container>
    </>
  )
}
