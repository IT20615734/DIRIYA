import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Applications from './Beneficiaries'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function JobOpportunities() {
  const [AddJob, setAddJob] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/Job")
      .then((res) => {
        // console.log(res.data.Users)
        setAddJob(res.data.AddJob);
      })
      .catch((e) => {
        alert(e);
      });
  }, [AddJob]);

  return (
     <>
    <Applications/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>JOB OPPORTUNITIES</h2>
      <br></br>
      {/* <Link to = "/Beneficiaries/AddApplications"><Button variant="primary">Add Applications</Button></Link> */}
      
      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th> Reference No</th>
          <th> Job Title</th>
          <th> District</th>
          <th> Gender</th>
          <th> Number Of People</th>
          <th> Company Name</th>
          <th> Company Contact Number</th>
          <th> Action</th>
        </tr>
      </thead>
      <tbody>
            {AddJob.filter((element) => {
              if (search === "") {
                return element;
              } else if (element.jobTitle.includes(search)) {
                return element;
              }
            }).map((e, i) => (
              <tr key={i} style={{ textAlign: "center", fontWeight: "400" }}>
                <td>{e.jobId}</td>
                <td>{e.jobTitle}</td>
                <td>{e.district}</td>
                <td>{e.gender}</td>
                <td>{e.numberOfPeople}</td>
                <td>{e.companyName}</td>
                <td>{e.contactNumber}</td>
                <td><Link to = "/Beneficiaries/AddApplications"><center><Button variant="primary">APPLY</Button></center></Link></td>
              </tr>
            ))}
          </tbody>


      </Table>
    </Container>

    </>
  )
}
