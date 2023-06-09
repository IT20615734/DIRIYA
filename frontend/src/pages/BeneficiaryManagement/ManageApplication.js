import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Applications from "./Beneficiaries";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserDetails } from "../../context/UserContext";

export default function ManageApplication() {
  const [AddApplications, setAddApplications] = useState([]);
  const [search, setSearch] = useState("");
  const {user,setUser}= UserDetails();



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

  //DELETE (DELETE DATA FROM DB)
  const deleteRecord = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:8080/Applications/delete/${e}`)
      .then((res) => {
        alert("Application Deleted !");
        console.log(res.state);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Applications />

      <Container

        style={{
          marginTop: "1%",
          display: "block",
          width: "200%",
          justifyContent: "center",
        }}
      >
        <div style ={{marginLeft:'-15%', marginTop:'1.5%'}}>
          <label>
            <p style={{fontSize:'135%'}}>
              Welcome, {user.fullName}
              </p>
              <p style={{fontSize:'100%', marginTop:'-5%'}}>
              {user.gsDivision} GS Division
              </p>
          </label>
       </div>
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
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {AddApplications.filter((element) => element.livingArea === user.gsDivision)
            .filter((element) => {
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
                <td>
                  <center>

                    <Link to={`Applications/UpdateApplications/${e._id}`}>
                      <Button variant="outline-primary">Edit</Button>
                    </Link>{" "}

                        <Button variant="outline-danger" onClick={() => deleteRecord(e._id)}> Delete </Button></center></td>
              </tr>
            ))}
          </tbody>
          </Table>
      </Container>
      
    </>
  );
}
