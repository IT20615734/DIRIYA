import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Food from "./Food";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function UpdateFood() {
  //const[FoodID, setFoodID] = useState();
  const [foodCategory, setfoodCategory] = useState();
  const [quantity, setquantity] = useState();
  const [donaterName, setdonaterName] = useState();
  const [remarks, setremarks] = useState();

  const location = useLocation();

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/Food/${id}`)
      .then((res) => {
        console.log(res.data.food);
        setfoodCategory(res.data.food.foodCategory);
        setquantity(res.data.food.quantity);
        setdonaterName(res.data.food.donaterName);
        setremarks(res.data.food.remarks);

      })
      .catch((err) => {
        console.log("cant find the Food" + err);
      });
  }, []);

 
  const navigate = useNavigate();

  const Validate = async (e) => {
    e.preventDefault();

    const form = {
      id,
      foodCategory,
      quantity,
      donaterName,
      remarks,
    }
    // console.log(form);
    console.log(id);
    await axios
      .put(`http://localhost:8080/Food/update`, form)
      .then((res) => {
        alert("Update Food");
        navigate(-1);  
      })
      .catch((err) => {
        console.log(err);
        alert(
          "There is an existing Food by this name; use different name " + err
        );
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
            <center>EDIT DONATION ACCEPTANCE DETAILS</center>
          </h1>
          <br></br>
          <hr></hr>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Food ID</Form.Label>
            <Form.Control type="text" value={FoodID} onChange={(e)=>{setFoodID(e.target.value)}} required/>
        </Form.Group> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Food name</Form.Label>
            <Form.Control
              type="text"
              value={foodCategory}
              onChange={(e) => {
                setfoodCategory(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>quantity</Form.Label>
            <Form.Control
              type="text"
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>donaterName</Form.Label>
            <Form.Control
              type="text"
              value={donaterName}
              onChange={(e) => {
                setdonaterName(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Remarks</Form.Label>
            <Form.Control
              type="text"
              value={remarks}
              onChange={(e) => {
                setremarks(e.target.value);
              }}
              required
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
