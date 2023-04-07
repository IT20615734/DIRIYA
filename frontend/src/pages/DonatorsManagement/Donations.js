import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Donations() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            NavLinkScroll
          >
            <Nav.Link href="/Donations/DonateHistory">Donate History</Nav.Link>
            <Nav.Link href="/Donations/ManageDonations"> Manage Donations </Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}