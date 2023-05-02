import React from 'react'
import '../components/Footer.css'
import { SocialIcon } from 'react-social-icons';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import { Link } from 'react-router-dom'
import logo2 from "../Assets/logo2.png"

function Footer() {
  return (
    <>
    <div className='row footer'>
      <div class='column about'>
      <div className='h3'>
      <Link to="/">
        <img src = {logo2} style={{width : 150 , height : 60 , marginTop : 5  }} />
        </Link>
      </div>

        <div class="column contactus">
        <h3 style={{  marginTop: 5  }}>Contact Us</h3>
        
        <p class="h6">
        <PhoneSharpIcon style={{ color: "white", height:25, width:25, marginRight: 15 }}></PhoneSharpIcon>
        076 111 2 333</p>

        <p class="h6">
        <EmailSharpIcon style={{ color: "white", height:25, width:25, marginRight: 15 }}></EmailSharpIcon>
        Diriya@gmail.com</p>
        </div>

       <div class='social'>
          <SocialIcon url="https://www.facebook.com/" network="facebook" bgColor="#4267B2" fgColor="#ffffff" style={{ height: 35, width: 35, marginRight: 20 } } />
          <SocialIcon url="https://www.instagram.com/" network="instagram" bgColor="#E1306C" style={{ height: 35, width: 35, marginRight: 20  }} />
          <SocialIcon url="https://twitter.com/?lang=en" network="twitter" fgColor="#ffffff"  style={{ height: 35, width: 35 , marginRight: 20 }} />
          <SocialIcon url="https://www.youtube.com/" network="youtube" fgColor="#ffffff" bgColor="#FF0000" style={{ height: 35, width: 35  , marginRight: 20}} />
          <SocialIcon url="https://web.whatsapp.com/" network="whatsapp"  bgColor="#25D366" style={{ height: 35, width: 35 , marginRight: 20}} />
          
        </div>
      </div>

      <div class="column links">
        <h3 style={{  marginTop: 20  }}>Links</h3>
      <ul>
       <li>
         <a href="#faq">FAQ</a>
        </li>
       <li>
         <a href="#cookies-policy">Cookies Policy</a>
       </li>
      <li>
        <a href="#terms-of-services">Terms Of Service</a>
      </li>
      <li>
        <a href="#support">Support</a>
       </li>
      </ul>

      </div>

      <div class="column pages">
        <h3 style={{  marginTop: 20  }}>Pages</h3>
        <ul>
       <li>
         <a href="#faq">Home</a>
        </li>
       <li>
         <a href="#cookies-policy">Gallery</a>
       </li>
      <li>
        <a href="#terms-of-services">About Us</a>
      </li>
      <li>
        <a href="#support">Contact Us</a>
       </li>
      </ul>
      </div>

      {/* <div class="column contactus">
        <h3 style={{  marginTop: 20  }}>Contact Us</h3>
        <p class="h6">
        <LocationOn style={{ color: "white", height:25, width:25, marginRight: 15}}  ></LocationOn>
        Sahethra Higher Education Center, Ja-ela Road, Gampaha, Sri Lanka</p>
        <p class="h6">
        <PhoneSharpIcon style={{ color: "white", height:25, width:25, marginRight: 15 }}></PhoneSharpIcon>
        076 700 4 700</p>

        <p class="h6">
        <EmailSharpIcon style={{ color: "white", height:25, width:25, marginRight: 15 }}></EmailSharpIcon>
        sahethrahighereducationcenter@gmail.com</p>
      </div> */}
      
    </div>

    <div class='row copyright'>
        <p>Copyright &copy; GRP_12 </p>
      </div>
      </>  
  )
}

export default Footer