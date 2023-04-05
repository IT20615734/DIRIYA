import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Applications from './Beneficiaries'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function ManageApplication() {

  const [AddApplications,setAddApplications] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/Applications").then((res) =>{
      setAddApplications(res.data.AddApplications);

    }).catch((e) =>{
        alert(e)
    })

}, [AddApplications])

const deleteRecord = (e) =>{
  console.log(e);
  axios.delete(`http://localhost:8080/Applications/delete/${e}`).then(res =>{
    alert("Beneficiary Deleted !")
    console.log(res.state)
  }).catch(err => {
    alert(err);
  })
  
}

  return (
    <>
    <Applications/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>APPLICATIONS</h2>
      <br></br>
      {<Link to = "/Beneficiaries/AddApplications"><Button variant="primary">Add Applications</Button></Link>}
      
      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th> Reference No</th>
          <th> Job Title</th>
          <th> District</th>
          <th> Applicant Name</th>
          <th> NIC</th>
          <th> Gender</th>
          <th> Date of Birth</th>
          <th> Action</th>
         
        </tr>
        </thead>
        <tbody>
         {AddApplications.filter((element) =>{
                if(search === ""){
                    return element
                }else if (element.role.includes(search)){
                    return element
                }
            }
            ).map((e,i) =>(
              <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                  <td>{i+1}</td>
                  <td>{e.jobTitle}</td>
                  <td>{e.district}</td>
                  <td>{e.applicantName}</td>
                  <td>{e.nic}</td>
                  <td>{e.gender}</td>
                  <td>{e.dateOfBirth}</td>
                  <td><center><Link to = "/Beneficiaries/UpdateBeneficiaries"><Button variant="outline-primary">Edit</Button></Link>       <Button variant="outline-danger" onClick={() => deleteRecord(e._id)}>Delete</Button></center></td>
              </tr>
          ))}
    </tbody>
    </Table>
  </Container>

  </>
  )
}