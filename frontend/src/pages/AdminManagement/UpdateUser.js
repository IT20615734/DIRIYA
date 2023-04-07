import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Admin from "./Admin";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Navigate,useLocation,useNavigate,useParams,} from "react-router-dom";

function UpdateUser() {
  const [role, setRole] = useState();
  const [fullName, setFulltName] = useState();
  const [nic, setNic] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [userName, setUserName] = useState();
//   const [Password, setPassword] = useState();

  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/User/")
      .then((value) => {
        const users = value.data.AddUser;
        for (let user of users) {
          if (user["_id"] === id) {
            //console.log("user found");

            setRole(user["role"]);
            setFulltName(user["fullName"]);
            setNic(user["nic"]);
            setAddress(user["address"]);
            setEmail(user["email"]);
            setMobileNumber(user["mobileNumber"]);
            setUserName(user["userName"]);
            // setPassword(user["password"]);
          }
        }
      })
      .catch((err) => {
        console.log("cant find the user " + err);
      });
  }, []);

  const navigate = useNavigate();

  const Validate = async (e) => {
    e.preventDefault();

    const data = {
      role: role,
      fullName: fullName,
      nic: nic,
      address: address,
      email: email,
      mobileNumber: mobileNumber,
      userName: userName,
    //   Password: Password,
    };

    await axios
      .put("http://localhost:8080/User/update/"+id, data)
      .then((res) => {
        alert("Update User");
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
        alert(
          "There is an existing user by this user name; use different user name " +
            err
        );
      });
  };

  return (
    <>
      <Admin />
      <Container style={{marginTop: "1%", display: "block", width: "50%", justifyContent: "center" }}>
        <Form onSubmit={Validate}>
          <h1 style={{ fontWeight: "bold" }}>
            <center>UPDATE USER</center>
          </h1>

          <br></br>
          <hr></hr>
          <Form.Group className="mb-3">
            <Form.Label>User Type</Form.Label>
            <Form.Select value={role}onChange={(e) => {setRole(e.target.value);}} required>
              <option></option>
              <option value="Admin">Admin</option>
              <option value="FoodManager">Food Manager</option>
              <option value="VillageOfficer">Village Officer</option>``
              <option value="Donater">Donater</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={fullName} onChange={(e) => {setFulltName(e.target.value);}}required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" disabled={true} maxLength={12} minLength={10}  value={nic} onChange={(e) => {setNic(e.target.value);}}required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={address} onChange={(e) => {setAddress(e.target.value);}} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email"value={email} onChange={(e) => {setEmail(e.target.value);}}required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text"maxLength={10} minLength={10} value={mobileNumber} onChange={(e) => {setMobileNumber(e.target.value);}}required/>
          </Form.Group>

          <h4 style={{ fontWeight: "bold" }}>Login details</h4>
          <hr></hr>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" disabled={true} value={userName} onChange={(e) => {setUserName(e.target.value);}}required/>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={Password} onChange={(e) => {setPassword(e.target.value);}} required/>
          </Form.Group> */}

          <Button variant="primary" type="submit" style={{ width: "20%", marginBottom: 20 }}>
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default UpdateUser;