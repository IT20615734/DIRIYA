import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../components/NavLink.css";
import { MenuItems } from './MenuItems';
import Button from 'react-bootstrap/esm/Button';
import { Link, navigate, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logo1 from "../Assets/logo1.png"
import { UserDetails } from '../context/UserContext';


function NavLink() {

  const {user,setUser}= UserDetails();
  const navigate = useNavigate();

  const auth = localStorage.getItem('user')

  const logoutAction = async (e) =>{
    e.preventDefault();

    if(window.confirm("Confirm Log out ? ") === true){
      localStorage.removeItem('user');
      localStorage.removeItem('Role');
      setUser({})
      navigate ('/');
      window.location.reload ();
  }
  
  }


  // console.log(user.role)

  return (
    <>

        <nav className = "NavbarItems">
        <Link to="/">   <img src = {logo1}  style={{  width: 265 }} /></Link>

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
            </ul>
           {auth ? (
             <Button variant="warning" style={{marginLeft:100,color : "black",fontWeight:'600', fontSize: '50'}} onClick={logoutAction}>Logout/{user.role}</Button>
             ) : (<>
              <Nav.Link href="/Login" className='btn btn-warning' style={{marginLeft:100,color : "black",fontWeight:'600', fontSize: '50'}}>Donate</Nav.Link>
           
           </>)}
        </nav>

    
    </>
  );
}
export default NavLink;
 