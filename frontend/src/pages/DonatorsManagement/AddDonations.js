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

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Add
        </Button>
    </Form>

    </Container>
    </>
  )
}


export default AddDonations;
