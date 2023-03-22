import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
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
      <Link to = "/Admin/AddJobs"><Button variant="primary">+ Add New Job Opportunities</Button></Link>
      
    </Container>
    </>
  )
}
