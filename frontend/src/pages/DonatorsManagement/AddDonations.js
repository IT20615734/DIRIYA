import { React ,useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Donations from './Donations'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { UserDetails } from '../../context/UserContext';

//export default function AddDonations() {

function AddDonations() {
    const generateRandomString = (length) => {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      };
    
    const {user,setUser}= UserDetails();
    
    const[donationID, setDonationID] = useState(`DI_${generateRandomString(6)}`);
    const[dname, setdname] = useState(user.fullName);
    const[foodCategory, setFoodCategory] = useState();
    const[quantity, setQuantity] =useState();
    const[dateOfHandOver, setDateOfHandOver] =useState();
    const[district, setDistrict] =useState(user.address);
    const[mobileNumber, setMobileNumber] =useState(user.mobileNumber);
    
    const navigate = useNavigate();

    const Validate =(e)=>{
        e.preventDefault();
        console.log("called") 
        const formData = new FormData();
            formData.append("donationID",donationID);
            formData.append("dname",dname);
            formData.append("foodCategory",foodCategory);
            formData.append("quantity",quantity)
            formData.append("dateOfHandOver",dateOfHandOver)
            formData.append("district",district);
            formData.append("mobileNumber",mobileNumber);
        
    const  data = 
        {
            "donationID":donationID,
            "dname":dname,
            "foodCategory":foodCategory,
            "quantity":quantity,
            "dateOfHandOver":dateOfHandOver,
            "district":district,
            "mobileNumber":mobileNumber,
        }


        console.log("FormData", formData )
        axios.post("http://localhost:8080/Donations/AddDonations", data).then(res=>{
            alert ("New Donation Added!")
            navigate(-1);

        }).catch(err=>{
            console.log("create failed " + err)
            alert(err)
        })
    }
    
    
  return (
    <>
    <Donations/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>ADD DONATIONS</center></h1>
        <br></br>
        <hr></hr>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Donation ID</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setDonationID(e.target.value)}} required/>
        </Form.Group> */}


    <Form.Group className="mb-3" controlId="formCategoryQuantity">
        <Form.Label>Select Food Category</Form.Label>
        <Row>
        <Col xs={6}>
        <Form.Select onChange={(e) => setFoodCategory(e.target.value)} required>
        <option></option>
        <option value="Rice">Rice</option>
        <option value="Dhal">Dhal</option>
        <option value="Dried Sparts">Dried Sparts</option>
        <option value="Canned Fish">Canned Fish</option>
        <option value="Curry Powder">Curry Powder</option>
        <option value="Papadum">Papadum</option>
        <option value="Soya Meat">Soya Meat</option>
        <option value="Chickpeas">Chickpeas</option>
        <option value="All Pourpose Flour">All Pourpose Flour</option>
      </Form.Select>
        </Col>
        <Col xs={6}>
        <Form.Control type="number" placeholder="Enter Quantity in Kgs" onChange={(e) => setQuantity(e.target.value)} required />
        </Col>
    </Row>
    </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Hand-over</Form.Label>
            <Form.Control type="date" onChange={(e)=>{setDateOfHandOver(e.target.value)}} required/>
        </Form.Group>

        {/* <Form.Group className="mb-3" >
              <Form.Label>District </Form.Label>
              <Form.Select value ={user.address} onChange={(e)=>{setDistrict(e.target.value)}} required >
                <option></option>
                <option value= 'Colombo'>Colombo</option>
                <option value= 'Gampaha'>Gampaha</option>
                <option value='Kalutara'>Kalutara</option>
                <option value='Kandy'>Kandy</option>
                <option value='Matale'>Matale</option>
                <option value=' NuwaraEliya'> Nuwara Eliya</option>
                <option value='Galle'>Galle</option>
                <option value='Matara'>Matara</option>
                <option value='Hambantota'>Hambantota</option>
                <option value='Jaffna'>Jaffna</option>
                <option value='Kilinochchi'>Kilinochchi</option>
                <option value='Mannar'>Mannar</option>
                <option value='Vavuniya'>Vavuniya</option>
                <option value='Mullaitivu'>Mullaitivu</option>
                <option value='Batticaloa'>Batticaloa</option>
                <option value='Ampara'>Ampara</option>
                <option value='Trincomalee'>Trincomalee</option>
                <option value='Kurunegala'>Kurunegala</option>
                <option value='Puttalam'>Puttalam</option>
                <option value='Anuradhapura'>Anuradhapura</option>
                <option value='Polonnaruwa'>Polonnaruwa</option>
                <option value='Badulla'>Badulla</option>
                <option value='Moneragala'>Moneragala</option>
                <option value='Ratnapura'>Ratnapura</option>
                <option value='Kegalle'>Kegalle</option>
              </Form.Select>
        </Form.Group> */}

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">  
            <Form.Label>District</Form.Label>
            <Form.Control  value={user.address}  onChange={(e)=>{setDistrict(e.target.value)}} required />   
        </Form.Group>
                                                                         */}
         {/* <Form.Group className="mb-3" controlId="formBasicEmail">  
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setMobileNumber(e.target.value)}} maxLength={10} minLength ={10} required/>   
        </Form.Group> */}

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Add
        </Button>
    </Form>

    </Container>
    </>
  )
}


export default AddDonations;
