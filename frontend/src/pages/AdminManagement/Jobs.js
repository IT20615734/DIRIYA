import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'
import { Link } from 'react-router-dom'
import Admin from './Admin'
import axios from 'axios'
import '../../Styles/Search.css'

export default function Jobs() {
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

  const deleteRecord = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:8080/Job/delete/${e}`)
      .then((res) => {
        alert("Job Opportunity Deleted !");
        console.log(res.state);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
    <Admin/>
    <Container style={{marginTop : '2%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>JOB OPPORTUNITIES</h2>
      <br></br>
      <Link to="/Admin/AddJobs"><Button variant="primary">+ Add Job Opportunity</Button></Link>
      <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:-40}}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search Job title" />
        <input class="button--submit" value="Search" type="submit"></input>
      </div>
      
      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th>Job Reference Number</th>
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
                <td>{i + 1}</td>
                <td>{e.jobTitle}</td>
                <td>{e.district}</td>
                <td>{e.gender}</td>
                <td>{e.numberOfPeople}</td>
                <td>{e.companyName}</td>
                <td>{e.contactNumber}</td>
                <td>
                  <center>
                    <Link to={`Admin/UpdateJob/${e._id}`}><Button variant="outline-primary">Edit</Button></Link>{" "}          <Button variant="outline-danger" onClick={() => deleteRecord(e._id)}> Delete</Button>
                  </center>
                </td>
              </tr>
            ))}
          </tbody>


      </Table>
    </Container>
    </>
  )
}
