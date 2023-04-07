import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Food() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          NavLinkScroll
        >
          <Nav.Link href="/Food/ManageFood">Manage Foods</Nav.Link>
          <Nav.Link href="/Admin/Jobs">Donations</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Food;
