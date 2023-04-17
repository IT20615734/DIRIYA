import React from 'react'
import "../Styles/Home.css"
import SlideShow from '../components/SlideShow';
import stat from "../Assets/stat.png"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


function Home() {
  return (
    <>
    <SlideShow/>
    <div className="description">
      <h1>What is DIRIYA?</h1>
      <p>At Diriya, we are committed to fighting poverty and providing opportunities for underprivileged communities in Sri Lanka. Unfortunately, poverty in Sri Lanka has risen from 13% to 25% in 2022. We believe that no one should have to suffer from lack of basic needs such as food, water, and healthcare, and we are dedicated to making a difference.</p>
      <div style={{ display: 'flex', marginLeft:900, marginTop: 40 ,height:600}}>
      <img src={stat} />
      </div>
      <div style={{marginLeft:250 , marginTop: -600}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023603.3984208487!2d79.38684731070474!3d7.858350414214859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1681626800074!5m2!1sen!2slk"
        width="50%"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center',marginTop:10 }}>
      <Link to ="/Login"><Button variant="warning">Donate Now</Button></Link>
      </div>
    </div>
    </>
  )
}

export default Home;