import React from 'react'
import Container from 'react-bootstrap/esm/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/NavLink.css";
import { MenuItems } from './MenuItems';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logo1 from "../Assets/logo1.png"
import { UserDetails } from '../context/UserContext';


function NavLink() {

  const {user,setUser}= UserDetails();
  // const navigate = useNavigate();

  const auth = localStorage.getItem('user')
  
  const logoutAction = async (e) =>{
    e.preventDefault();

    if(window.confirm("Confirm Log out ? ") === true){
      localStorage.removeItem('user');
      localStorage.removeItem('Role');
      setUser({})
      // navigate('/')
      window.location.reload();
  }
  
  }


  // console.log(user.role)

  return (
    <>

      {/* <Navbar bg="dark" variant="dark">  */}
        {/* <Container> */}
        {/* <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px'}}NavLinkScrol> */}
        <nav className = "NavbarItems">
            {/* <h1 className = "navbar-logo">Diriya</h1> */}
            <img src = {logo1}  style={{  width: 300  }} />

            <ul className="nav-manu">
              {MenuItems.map((item,index)=>{
                return( 
                  <li key = {index}>
                  {(item.access.includes(user.role) ) ? (
                    <a className ={item.cname} href ={item.url}><i className={item.icon}></i>{item.title}</a>
                  ):(
                      <>
                      </>
                  )}
                  
                  </li>
                )
              })}
            {/* <a href="/Beneficiaries">Beneficiaries</a>
            <a href="/Admin">Admin</a> */}
            </ul>
           {auth ? (
             <Button variant="warning" style={{marginLeft:100,color : "black",fontWeight:'700'}} onClick={logoutAction}>Logout/{user.role}</Button>
             ) : (<>
              <Nav.Link href="/Login" className='btn btn-warning' style={{marginLeft:100,color : "black",fontWeight:'700'}}>Donate</Nav.Link>
           
           </>)}
        </nav>
        {/* </Container> */}
        {/* </Navbar> */}
    
    
    </>
  );
}
export default NavLink;
 