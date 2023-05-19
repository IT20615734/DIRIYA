import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Food from "./Food";
import "../FoodManagement/Overview.css";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { UserDetails } from "../../context/UserContext";
import axios from "axios";

function Overview() {
  // DATA
  const [datas, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/Food")
      .then((res) => {
        console.log(res.data);
        setData(res.data.AddFood);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  const { user, setUser } = UserDetails();

  const data = [
    {
      name: "Rice",

      pv: 800,
      amt: 1700,
    },
    {
      name: "Dhal",
      pv: 967,
      amt: 1700,
    },
    {
      name: "Dried Sparts",
      pv: 1098,
      amt: 1700,
    },
    {
      name: "Canned Fish",
      pv: 1200,
      amt: 1700,
    },
    {
      name: "Curry Powder",
      pv: 1108,
      amt: 1700,
    },
    {
      name: "Papadum",
      pv: 680,
      amt: 1700,
    },
    {
      name: "Soya Meat",
      pv: 680,
      amt: 1700,
    },
    {
      name: "Chickpeas",
      pv: 680,
      amt: 1700,
    },
    {
      name: "All Pourpose Flour",
      pv: 680,
      amt: 1700,
    },
  ];

  return (
    <>
      <Food />

      <Container
        style={{
          marginTop: "1%",
          display: "block",
          width: "100%",
          justifyContent: "center",
          fontFamily: "Verdana",
        }}
      >
        <div style={{ marginLeft: "-15%", marginTop: "1.5%" }}>
          <label>
            <p style={{ fontSize: "135%" }}>Welcome, {user.fullName}</p>
            <p style={{ fontSize: "100%", marginTop: "-5%" }}>
              {user.address} District
            </p>
          </label>
        </div>

        <div className="Overview" style={{ justifyContent: "center" }}>
          <h1>DONATION MANAGEMENT DASHBOARD</h1>
        </div>

        <div style={{ display: "flex", height: "50px", width: "100%" }}>
          <Container
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "1%",
              width: "100%",
              height: "600%",
              justifyContent: "space-between",
              backgroundColor: "#ffffff",
              paddingTop: "1.2rem",
              paddingBottom: "1.2rem",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px #888888",
            }}
          >
            <h5>Statistics of {user.address} District</h5>
            <br></br>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "200px",
                marginTop: "2px",
                marginLeft: "125px",
              }}
            >
              <Container
                style={{
                  borderRadius: "20px",
                  flexBasis: "40%",
                  marginTop: "1%",
                  padding: "1rem",
                  backgroundColor: "#27E1C1",
                  boxShadow: "0px 0px 10px #888888",
                  transition: "box-shadow 0.3s ease-in-out",
                  marginRight: "30px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = "0px 0px 15px #888888")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow = "0px 0px 10px #888888")
                }
              >
                <p>Total Number of Families Identified</p>
                <p>
                  Count till{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </Container>

              <Container
                style={{
                  borderRadius: "20px",
                  flexBasis: "40%",
                  marginTop: "1%",
                  padding: "1rem",
                  backgroundColor: "#FFD966",
                  boxShadow: "0px 0px 10px #888888",
                  transition: "box-shadow 0.3s ease-in-out",
                  marginRight: "30px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = "0px 0px 15px #888888")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow = "0px 0px 10px #888888")
                }
              >
                <p>GS Divisions with defict of donations</p>
                <p>
                  Count till{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </Container>

              <Container
                style={{
                  borderRadius: "20px",
                  flexBasis: "40%",
                  marginTop: "1%",
                  padding: "1rem",
                  backgroundColor: "#E96479",
                  boxShadow: "0px 0px 10px #888888",
                  transition: "box-shadow 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = "0px 0px 15px #888888")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow = "0px 0px 10px #888888")
                }
              >
                <p>GS Divisions with surplus of donations</p>
                <p>
                  Count till{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </Container>
            </div>
          </Container>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div style={{ width: "100%", height: 450 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={datas}
              margin={{
                top: 50,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="pv" barSize={50} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
}

export default Overview;
