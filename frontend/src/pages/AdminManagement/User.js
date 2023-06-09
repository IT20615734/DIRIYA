import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Admin from "./Admin";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import '../../Styles/Search.css'

function User() {
  const [AddUser, setAddUser] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/User")
      .then((res) => {
        // console.log(res.data.Users)
        setAddUser(res.data.AddUser);
      })
      .catch((e) => {
        alert(e);
      });
  }, [AddUser]);

  const deleteRecord = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:8080/User/delete/${e}`)
      .then((res) => {
        alert("User Deleted !");
        console.log(res.state);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Admin />
      <Container
        style={{
          marginTop: "1%",
          display: "block",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <br></br>
        <h2>USERS</h2>
        <br></br>
        <Link to="/Admin/AddUser">
          <Button variant="primary">+ Add New User</Button>
        </Link>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:-40 }}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search Name " />
        <input class="button--submit" value="Search" type="submit"></input>
      </div>
        <br></br>
        <Table
          striped
          bordered
          hover
          style={{textAlign : 'center', width: "100%", justifyContent: "center", marginTop: 20 }}
        >
          <thead>
            <tr>
              {/* <th>Index Id</th> */}
              <th>User Id</th>
              <th>User Type</th>
              <th>Full Name</th>
              <th>NIC</th>
              <th>District</th>
              <th>GS Division</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {AddUser.filter((element) => {
              if (search === "") {
                return element;
              } else if (element.fullName.includes(search)) {
                return element;
              }
            }).map((e, i) => (
              <tr key={i} style={{ textAlign: "center", fontWeight: "400" }}>
                {/* <td>{i + 1}</td> */}
                <td>{e.userId}</td>
                <td>{e.role}</td>
                <td>{e.fullName}</td>
                <td>{e.nic}</td>
                <td>{e.address}</td>
                <td>{e.gsDivision}</td>
                <td>{e.email}</td>
                <td>{e.mobileNumber}</td>
                <td>{e.userName}</td>
                <td>
                  <center>
                    <Link to={`Admin/UpdateUser/${e._id}`}>
                      <Button variant="outline-primary">Edit</Button>
                    </Link>{" "}
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteRecord(e._id)}
                    >
                      Delete
                    </Button>
                  </center>
                </td>
              </tr>
            ))}
          </tbody>
        </Table> 

      </Container>
    </>
  );
}
export default User;
