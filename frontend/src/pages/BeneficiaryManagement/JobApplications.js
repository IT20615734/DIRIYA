import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import Beneficiaries from './Beneficiaries'

export default function MyApplications() {
  return (
    <>
    <Beneficiaries/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>JOB APPLICATION</h2>
      <br></br>
      {/* <Link to = "/Beneficiaries/ApplyJobs"><Button variant="primary">+ Apply Opportunity</Button></Link> */}
      
    </Container>
    </>
  )
}

