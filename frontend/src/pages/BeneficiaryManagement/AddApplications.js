import { React ,useEffect,useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Applications from './Beneficiaries'
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { UserDetails } from '../../context/UserContext';



export default function AddApplications() {
    // const {user,setUser}= UserDetails();
    // const[beneficiaryID, setBeneficiaryID] = useState();
    const[jobTitle, setJobTitle] =useState();
    const[district, setDistrict] =useState();
    const[livingArea, setlivingArea] =useState();
    const[applicantName, setApplicantName] =useState();
    const[nic, setnic] =useState();
    const[gender, setGender] =useState();
    const[dateOfBirth, setDateOfBirth] =useState();
    const[mobileNumber, setMobileNumber] =useState();
    const [id, setid] = useState();
    const [data, setData] = useState();

    const location = useLocation();
    useEffect(() => {
        setJobTitle(location.state.data.jobTitle);
        setDistrict(location.state.data.district);
        setlivingArea(location.state.data.livingArea);
        setApplicantName(location.state.data.applicantName);
        setnic(location.state.data.nic);
        setGender(location.state.data.gender);
        setDateOfBirth(location.state.data.mobileNumber);
        setMobileNumber(location.state.data._id);
        setid(location.state.data._id);
    
  }, []);
    
    const navigate = useNavigate();


    const Validate =(e)=>{
        e.preventDefault();

        const formData = new FormData();
            formData.append("jobTitle",jobTitle)
            formData.append("district",district)
            formData.append("livingArea",livingArea)
            formData.append("applicantName",applicantName);
            formData.append("nic",nic);
            formData.append("gender",gender);
            formData.append("dateOfBirth",dateOfBirth);
            formData.append("mobileNumber",mobileNumber);
        
    const  data = 
        {
            jobTitle:jobTitle,
            district:district,
            livingArea:livingArea,
            applicantName:applicantName,
            nic:nic,
            gender:gender,
            dateOfBirth:dateOfBirth,
            mobileNumber:mobileNumber,
        }


        console.log("FormData", formData )
        axios.post("http://localhost:8080/Applications/AddApplications", data).then(res=>{
            alert ("New Application Added!")
            navigate(-1);
            console.log("data adedd")
            navigate(-1);

            
        }).catch(err=>{
            alert(err)
        })
    }

  return (
    <>
    <Applications/>
    <Container style={{marginTop : '1%',display : 'block',width : '50%',justifyContent : 'center'}}>

    <Form onSubmit={Validate}>
    <h1 style={{fontWeight:'bold'}}><center>ADD JOB APPLICATIONS</center></h1>
        <br></br>
        <hr></hr>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control disabled={true} value={jobTitle} type="text" onChange={(e)=>{setJobTitle(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Site</Form.Label>
            <Form.Control disabled={true} value={district} type="text" onChange={(e)=>{setDistrict(e.target.value)}} required/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Applicant's Area of Living</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setlivingArea(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Applicant Name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setApplicantName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" onChange={(e) => {const value = e.target.value;
                if (
                    /^[0-9]{9}[vV]$/.test(value) || // Check if input has 9 digits with "v" or "V" as the last character
                    /^[0-9]{12}$/.test(value) // Check if input has exactly 12 digits
                ) {setnic(value);}}} maxLength={12} minLength={10} pattern="^[0-9]{9}[vV]$|^[0-9]{12}$" placeholder='Eg: [741922757V or 197419202757]' required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Select onChange={(e)=>{setGender(e.target.value)}}  required >
                <option></option>
                <option value = 'Male'>Male</option>
                <option value = 'Female'>Female</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" onChange={(e)=>{setDateOfBirth(e.target.value)}} maxLength={10} minLength ={10} placeholder='YY/MM/DD' required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text"maxLength={10} minLength ={10} onChange={(e)=>{setMobileNumber(e.target.value)}} placeholder='Eg: 076 155 4468' required/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20%',marginBottom:20}}>
            Save
        </Button>
    </Form>

    </Container>
    </>
  )
}

