import React, { useEffect, useState } from 'react'
import Food from './Food'
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';
import axios from 'axios';

function ManageFood() {
  const [AddFood, setAddFood] = useState([]);
  const [search, setSearch] = useState("");

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

  // const deleteRecord = (e) => {
  //   console.log(e);
  //   axios
  //     .delete(`http://localhost:8080/User/delete/${e}`)
  //     .then((res) => {
  //       alert("User Deleted !");
  //       console.log(res.state);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

  return (
    <>
    <Food/>
    <Container
        style={{
          marginTop: "1%",
          display: "block",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <br></br>
        <h2>FOOD STOCK</h2>
        <br></br>
        <Link to="/Food/AddFood">
          <Button variant="primary">+ Add Food Stock</Button>
        </Link>
        <br></br>
        <Table
          striped
          bordered
          hover
          style={{ width: "100%", justifyContent: "center", marginTop: 20 }}
        >
          <thead>
            <tr>
              <th>Index Id</th>
              <th>Food Category</th>
              <th>Quantity</th>
              <th>Donater Name</th>
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
              <tr key={i} style={{ textAlign: "center", fontWeight: "400" }}>
                <td>{i + 1}</td>
                <td>{e.foodCategory}</td>
                <td>{e.quantity}</td>
                <td>{e.donaterName}</td>
                <td>
                  <center>
                    <Link to={`Admin/UpdateUser/${e._id}`}>
                      <Button variant="outline-primary">Edit</Button>
                    </Link>{" "}
                    <Button
                      variant="outline-danger"
      
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
  )
}

export default ManageFood