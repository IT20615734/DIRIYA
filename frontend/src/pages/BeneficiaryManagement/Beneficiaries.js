import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Beneficiaries() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            NavLinkScroll
          >
            <Nav.Link href="/Beneficiaries/ManageBeneficiary">Manage Beneficiaries</Nav.Link>
            <Nav.Link href="/Beneficiaries/JobOpportunities">Job Opportunities</Nav.Link>
            <Nav.Link href="/Beneficiaries/ManageApplication">Manage Application</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
      )
}
