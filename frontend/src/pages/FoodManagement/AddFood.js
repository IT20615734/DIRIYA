import React, { useEffect, useState } from "react";
import Food from "./Food";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AddFood() {
  const [foodCategory, setfoodCategory] = useState();
  const [quantity, setquantity] = useState();
  const [donaterName, setdonaterName] = useState();
  const [id, setid] = useState();
  const [data, setData] = useState();

  const location = useLocation();
  useEffect(() => {
    setfoodCategory(location.state.data.foodCategory);
    setquantity(location.state.data.quantity);
    setdonaterName(location.state.data.dname);
    setdonaterName(location.state.data.dname);
    setid(location.state.data._id);
  }, []);

  const navigate = useNavigate();

  const Validate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foodCategory", foodCategory);
    formData.append("quantity", quantity);
    formData.append("donaterName", donaterName);

    const data = {
      foodCategory: foodCategory,
      quantity: quantity,
      donaterName: donaterName,
    };

    console.log("FormData", formData);
    axios
      .post("http://localhost:8080/Food/AddFood", data)
      .then((res) => {
        alert("New Food Stock Added!");

        // Perform deletion request
        axios
          .delete(`http://localhost:8080/Donations/delete/${id}`)
          .then((res) => {
            navigate("/Food/ManageFood");
          })
          .catch((err) => {
            alert("Failed to delete food stock.");
            console.error(err);
          });
      })
      .catch((err) => {
        alert("Failed to add food stock.");
        console.error(err);
      });
  };

  return (
    <>
      <Food />
      <Container
        style={{
          marginTop: "1%",
          display: "block",
          width: "50%",
          justifyContent: "center",
        }}
      >
        <Form onSubmit={Validate}>
          <h1 style={{ fontWeight: "bold" }}>
            <center>ADD FOOD STOCK</center>
          </h1>

          <br></br>
          <hr></hr>
          <Form.Group className="mb-3">
            <Form.Label>Food Category</Form.Label>
            <Form.Select
              value={foodCategory}
              onChange={(e) => {
                setfoodCategory(e.target.value);
              }}
              required
              disabled
            >
              <option></option>
              <option value="Rice">Rice</option>
              <option value="Dhal">Dhal</option>
              <option value="Dried Sparts">Dried Sparts</option>
              <option value="Canned Fish">Canned Fish</option>
              <option value="Curry Powder">Curry Powder</option>
              <option value="Papadum">Papadum</option>
              <option value="Soya Meat">Soya Meat</option>
              <option value="Chickpeas">Chickpeas</option>
              <option value="All Pourpose Flour">All Pourpose Flour</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
              }}
              required
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Donater Name</Form.Label>
            <Form.Control
              type="text"
              value={donaterName}
              onChange={(e) => {
                setdonaterName(e.target.value);
              }}
              required
              disabled
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ width: "20%", marginBottom: 20 }}
          >
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddFood;
