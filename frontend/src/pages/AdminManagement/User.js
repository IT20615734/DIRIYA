import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Admin from './Admin'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

export default function () {
  return (
    <>
    <Admin/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>USERS</h2>
      <br></br>
      <Link to = "/Admin/AddUser"><Button variant="primary">+ Add New User</Button></Link>
      
      <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th>User Type</th>
          <th> First Name</th>
          <th> Last Name</th>
          <th> Address</th>
          <th> Email</th>
          <th> Mobile NUmber</th>
          <th> User Name</th>
          <th> Manage Member </th>  
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
