import React from 'react'
import Container from 'react-bootstrap/esm/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/NavLink.css";
import { MenuItems } from './MenuItems';
import Button from 'react-bootstrap/esm/Button';


function NavLink() {

  return (
    <>
      {/* <Navbar bg="dark" variant="dark">  */}
        {/* <Container> */}
        {/* <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px'}}NavLinkScrol> */}
        <nav className = "NavbarItems">
            <h1 className = "navbar-logo">Diriya</h1>
            <ul className="nav-manu">
              {MenuItems.map((item,index)=>{
                return(
                  <li key = {index}>
                  <a className ={item.cname}href ={item.url}><i className={item.icon}></i>{item.title}</a>
                  </li>
                )
              })}
            {/* <a href="/Beneficiaries">Beneficiaries</a>
            <a href="/Admin">Admin</a> */}
            </ul>
            <Button variant="warning">Sign Up</Button>
        </nav>
        {/* </Container> */}
        {/* </Navbar> */}
    
    
    </>
  );
}
export default NavLink;
 