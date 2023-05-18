import { React ,useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Beneficiaries from './Beneficiaries'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserDetails } from '../../context/UserContext';

//export default function AddBeneficiary() {

function AddBeneficiaries() {
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
    
    const[beneficiaryID, setBeneficiaryID] = useState(`BI_${generateRandomString(6)}`); //gsDivision
    const[beneficiaryName, setBeneficiaryName] =useState();
    const[address, setAddress] =useState();
    const[gsDivision, setgsDivision] =useState(user.gsDivision);
    const[nic, setnic] =useState();
    const[mobileNumber, setMobileNumber] =useState();
    const[monthlyIncome, setMonthlyIncome] =useState();
    const[numberOfFamilyMembers, setnumberOfFamilyMembers] =useState();

    const navigate = useNavigate();

    const Validate =(e)=>{
        e.preventDefault();
        console.log("called") 
        const formData = new FormData();
            formData.append("beneficiaryID",beneficiaryID);
            formData.append("beneficiaryName",beneficiaryName)
            formData.append("address",address)
            formData.append("gsDivision",gsDivision)
            formData.append("nic",nic);
            formData.append("mobileNumber",mobileNumber);
            formData.append("monthlyIncome",monthlyIncome);
            formData.append("numberOfFamilyMembers",numberOfFamilyMembers);
        
    const  data = 
        {
            "beneficiaryID":beneficiaryID,
            "beneficiaryName":beneficiaryName,
            "address":address,
            "gsDivision":gsDivision,
            "nic":nic,
            "mobileNumber":mobileNumber,
            "monthlyIncome":monthlyIncome,
            "numberOfFamilyMembers":numberOfFamilyMembers,
        }


        console.log("FormData", formData )
        axios.post("http://localhost:8080/Beneficiaries/AddBeneficiaries", data).then(res=>{
            alert ("New Beneficiary Added!")
            navigate(-1);

        }).catch(err=>{
            console.log("create failed " + err)
            alert(err)
        })
    }
    
  return (
    <>
    <Beneficiaries/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>ADD BENEFICIARIES</center></h1>
        <br></br>
        <hr></hr>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary ID</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setBeneficiaryID(e.target.value)}} required/>
        </Form.Group> */}
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beneficiary name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setBeneficiaryName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setAddress(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setnic(e.target.value)}} maxLength={12} minLength ={10} placeholder='Eg: [741922757V or 197419202757]' required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setMobileNumber(e.target.value)}} maxLength={10} minLength ={10} placeholder='Eg: 076 155 4468' required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Monthly Income</Form.Label>
            <Form.Control type="number" max="12500" onChange={(e) => setMonthlyIncome(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of Family Members</Form.Label>
            <Form.Control type="number" onChange={(e)=>{setnumberOfFamilyMembers(e.target.value)}} placeholder='enter a number' required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}
export default AddBeneficiaries;
