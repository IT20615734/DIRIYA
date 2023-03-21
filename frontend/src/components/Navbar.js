import React from 'react'
import { useRef } from 'react';
import "../Styles/main.css";


function Navbar() {
    const navRef = useRef();

     const showNavbar = () =>{
        navRef.current.clasList.toggle('responsive_nav');
    }

  return (
    <header>
        <nav ref={navRef}>
            <a href ="/">Home</a>
            <a href="/Admin">Admin</a>
        </nav>
    </header>
  );
}
export default Navbar;
 