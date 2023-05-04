import React from 'react'
import Donations from './Donations'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'

function DonationHistory() {
  return (
    <>
    < Donations/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>DONATIONS</h2>
      <br></br>
      
      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th> Your Donation ID </th>
          <th> Select Food Category </th>
          <th> Quantity</th>
          <th> Date of Hand-over</th>
          <th> District</th>
          <th> Mobile Number</th>
          <th> View QR</th>
        </tr>
      </thead>
         
      <tbody>
      </tbody>
      </Table>
    </Container>

    </>
  )
}

export default DonationHistory