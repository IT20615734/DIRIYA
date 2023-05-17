import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Food from "./Food";
import axios from "axios";
import { UserDetails } from "../../context/UserContext";

function Donation() {
  const [AddDonations, setAddDonations] = useState([]);
  const [search, setSearch] = useState("");
  const { user, setUser } = UserDetails();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/Donations")
      .then((res) => {
        setAddDonations(res.data.AddDonations);
      })
      .catch((e) => {
        alert(e);
      });
  }, [AddDonations]);

  const deleteRecord = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:8080/Donations/delete/${e}`)
      .then((res) => {
        alert("Donation Rejected!");
        console.log(res.state);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const acceptData = (data) => {
    navigate("/Food/AddFood", { state: { data: data } });
  };

  return (
    <>
      <Food />
      <Container
        style={{
          marginTop: "1%",
          display: "block",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <br></br>
        <h2>DONATIONS</h2>
        <br></br>
        <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:-40 }}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search Food Category" />
        <input class="button--submit" value="Search" type="submit"></input>
      </div>
        <Table 
          striped
          bordered
          hover
          style={{
            textAlign: "center",
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <thead>
            <tr>
              <th> Your Donation ID </th>
              <th> Donater Name</th>
              <th> Select Food Category </th>
              <th> Quantity</th>
              <th> Date of Hand-over</th>
              <th> District</th>
              <th> Mobile Number</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
              {AddDonations.filter((element) => element.dname === user.fullName)
                .filter((element) => {
                    if(search === ""){
                        return element
                    }else if (element.foodCategory.includes(search)){
                        return element
                    }
                }  
            ).map((e, i) => (
              <tr key={i} style={{ textAlign: "center", fontWeight: "400" }}>
                <td>{i + 1}</td>
                {/* <td>{e.donationID}</td> */}
                <td>{e.dname}</td>
                <td>{e.foodCategory}</td>
                <td>{e.quantity}</td>
                <td>{e.dateOfHandOver}</td>
                <td>{e.district}</td>
                <td>{e.mobileNumber}</td>
                <td>
                  <center>
                    <Button
                      variant="outline-primary"
                      onClick={() => acceptData(e)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteRecord(e._id)}
                    >
                      Reject
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

export default Donation;
