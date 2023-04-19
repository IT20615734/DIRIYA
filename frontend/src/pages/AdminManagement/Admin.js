import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Admin() {

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            NavLinkScroll
          >
            <Nav.Link href="/Admin/User">Users</Nav.Link>
            <Nav.Link href="/Admin/Jobs">Job Bank</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    
  );
}
export default Admin;