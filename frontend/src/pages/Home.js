import React from 'react'
import "../Styles/Home.css"
import SlideShow from '../components/SlideShow';
import stat from "../Assets/stat.png"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import first from "../Assets/first.jpg"
import "../pages/DonatorsManagement/movingBanner.css"


function Home() {
  return (
    <>
    <div className="moving-banner" style={{marginTop:'0%'}}>
      <h2>Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS | Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS | Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS</h2>
    </div>
    <SlideShow/>
    <br></br>
   
    <div className="description">
      <h1>Who Are We?</h1>
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
      <Link to ="/Login">
      <Button variant="warning" style={{ width: '800px',height:'50px'}}>Donate Now</Button>
        </Link>
    </div>
    <br></br>
    <h2 style={{marginTop:30}}>Highlights</h2>
    <br></br>
    <ul style={{width:700 , fontSize:20, listStyleType: 'inherit'}}>
     <li> An acute economic crisis since early 2022 has caused severe food insecurity in Sri Lanka, and the situation is predicted to deteriorate between October 2022 and February 2023. </li>
     <li> An estimated 6.2 million people (28 percent of the population) are moderately acute food insecure, while 66,000 people are severely acute food insecure.</li> 
     <li> Two in five households (41.8 per cent) spend more than 75 percent of their expenditures on purchasing food, leaving little to spend on health and education. </li>
     <li> Many families have exhausted their savings and are struggling due to crippling inflation. </li>
     <li> DIRIYA will prioritize in reducing the poverty of underprivileged families focusing all the districts in Sri Lanka through village servants, existing systems, where possible, and incorporate community-based approaches where relevant.</li>
    </ul>
    <img src = {first} style={{marginLeft:800,marginTop:-450 , width: 650, height: 500}} />
    </div>
    </>
  )
}

export default Home;