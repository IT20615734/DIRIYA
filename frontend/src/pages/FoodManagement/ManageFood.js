import React, { useEffect, useState } from "react";
import Food from "./Food";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";
import axios from "axios";
import { UserDetails } from "../../context/UserContext";


function ManageFood() {
  const [AddFood, setAddFood] = useState([]);
  const [search, setSearch] = useState("");
  const {user,setUser}= UserDetails();

  useEffect(() => {
    axios
      .get("http://localhost:8080/Food")
      .then((res) => {
        // console.log(res.data.Users)
        setAddFood(res.data.AddFood);
      })
      .catch((e) => {
        alert(e);
      });
  }, [AddFood]);

  //DELETE (DELETE DATA FROM DB)
  const deleteRecord = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:8080/Food/delete/${e}`)
      .then((res) => {
        alert("Food Deleted !");
        console.log(res.state);
      })
      .catch((err) => {
        alert(err);
      });
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

      <div style ={{marginLeft:'-15%', marginTop:'1.5%'}}>
          <label>
            <p style={{fontSize:'135%'}}>
              Welcome, {user.fullName}
              </p>
              <p style={{fontSize:'100%', marginTop:'-5%'}}>
              {user.address} District
              </p>
          </label>
      </div>

        <br></br>

        <h2>All FOODS</h2>

        <br></br>
        {/* <Link to="/Food/AddFood">
          <Button variant="primary">+ Add Food Stock</Button>
        </Link> */}

      <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:-40 }}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search Food Category" />
        <input class="button--submit" value="Search" type="submit"></input>
      </div>

        <br></br>
        <Table
          striped
          bordered
          hover
          style={{ textAlign:'center',width: "100%", justifyContent: "center", marginTop: 20 }}
        >
          <thead>
            <tr>
              <th>Index Id</th>
              <th>Food Category</th>
              <th>Quantity</th>
              <th>Donater Name</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {AddFood.filter((element) => {
              if (search === "") {
                return element;
              } else if (element.foodCategory.includes(search)) {
                return element;
              }
            }).map((e, i) => (
              <tr key={i} style={{ fontWeight: "400" }}>
                <td>{i + 1}</td>
                <td>{e.foodCategory}</td>
                <td>{e.quantity}</td>
                <td>{e.donaterName}</td>
                <td>{e.remarks}</td>
                <td>
                  <center>
                    <Link to={`/Food/UpdateFood/${e._id}`}>
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

export default ManageFood;
