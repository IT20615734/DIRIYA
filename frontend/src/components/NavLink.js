import React from 'react'
import { useRef } from 'react';
import Container from 'react-bootstrap/esm/Container';
// import "../Styles/main.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavLink() {

  return (
    <>
      <Navbar bg="dark" variant="dark"> 
        <Container>
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            NavLinkScroll
            >
        
            <Nav.Link href ="/" style={{textDecoration:"none"}}>Home</Nav.Link>
            <Nav.Link href="/Beneficiaries">Beneficiaries</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    
    
    </>
  );
}
export default NavLink;
 