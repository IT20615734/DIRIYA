import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Food from "./Food";
import axios from "axios";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function UpdateFood() {
  //const[FoodID, setFoodID] = useState();
  const [foodCategory, setfoodCategory] = useState();
  const [quantity, setquantity] = useState();
  const [donaterName, setdonaterName] = useState();

  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/Food")
      .then((value) => {
        const Foods = value.data.AddFoods;
        for (let Food of Foods) {
          if (Food["_id"] === id) {
            console.log("user found");

            //setFoodID(Food["FoodID"]);
            setfoodCategory(Food["foodCategory"]);
            setquantity(Food["quantity"]);
            setdonaterName(Food["donaterName"]);
          }
        }
      })
      .catch((err) => {
        console.log("cant find the Food" + err);
      });
  }, []);

  const navigate = useNavigate();

  const Validate = async (e) => {
    e.preventDefault();

    const data = {
      //FoodID: FoodID,
      foodCategory: foodCategory,
      quantity: quantity,
      donaterName: donaterName,
    };

    await axios
      .put("http://localhost:8080/Food/update/" + id, data)
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
            <center>EDIT FOOD DETAILS</center>
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
              maxLength={12}
              minLength={10}
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
