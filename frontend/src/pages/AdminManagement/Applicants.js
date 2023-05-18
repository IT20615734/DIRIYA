import React, { useEffect, useState } from 'react'
import Admin from './Admin';
import { UserDetails } from '../../context/UserContext';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/esm/Button';
import GeneratePDF from './GeneratePDF';

function Applicants() {
  const [AddApplications, setAddApplications] = useState([]);
  const [search, setSearch] = useState("");
  const {user,setUser}= UserDetails();

  const columnsPDF = [{ Title:'Title',District:'District',LivingArea:'LivingArea',ApplicantName:'ApplicantName',NIC : 'NIC', Gender:'Gender', BirthDate:'BirthDate'  }]

  //GET (GET DATA FROM DB)
  useEffect(() => {
    axios
      .get("http://localhost:8080/Applications")
      .then((res) => {
        setAddApplications(res.data.AddApplications);
      })
      .catch((e) => {
        alert(e);
      });
  }, [AddApplications]);

  return (
     <>
      <Admin />

      <Container

        style={{
          marginTop: "1%",
          display: "block",
          width: "200%",
          justifyContent: "center",
        }}
      >
        <br></br>
        <h2>APPLICATIONS</h2>
        <br></br>

      <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:-40 }}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search by NIC" />
        <input class="button--submit" value="Search" type="submit"></input>
      </div>

        <Table striped bordered hover style={{textAlign: "center",width: "100%",justifyContent: "center",marginTop: 20,}}>
          <thead>
            <tr>
              <th> Reference No</th>
              <th> Job Title</th>
              <th> District</th>
              <th> Living Area</th>
              <th> Applicant Name</th>
              <th> NIC</th>
              <th> Gender</th>
              <th> Date of Birth</th>
              
            </tr>
          </thead>
          <tbody>
            {AddApplications.filter((element) => {
                if (search === "") {
                  return element;
                } else if (element.nic.includes(search)) {
                  return element;
                }
              }

              //catch data for the columns created using on change events
            ).map((e, i) => (
              <tr key={i} style={{ textAlign: "center", fontWeight: "400" }}>
                <td>{i + 1}</td>
                <td>{e.jobTitle}</td>
                <td>{e.district}</td>
                <td>{e.livingArea}</td>
                <td>{e.applicantName}</td>
                <td>{e.nic}</td>
                <td>{e.gender}</td>
                <td>{e.dateOfBirth}</td>
              </tr>
            ))}
          </tbody>
          </Table>

          <Button variant="warning" onClick={
                () => GeneratePDF(
                  AddApplications.map(e => ({
                  Title: e.jobTitle,
                  District: e.district,
                  LivingArea: e.livingArea,
                  ApplicantName: e.applicantName,
                  NIC: e.nic,
                  Gender: e.gender,
                  BirthDate: e.dateOfBirth,
                }
          )), columnsPDF, false, "All Applicants")} style = {{marginBottom:20}}>Download All Applicant Report</Button>

      </Container>
      
    </>
  )
}

export default Applicants
