import React from "react";
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

function Overview() {
  ////////////////Data//////////////////
  const data = [
    {
      name: "DHAL",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "RICE",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "CHICKPEACE",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "POTATO",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "ONION",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "GARLIC",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  ////////////////////end data//////////////////////////

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
        <div className="Overview">
          <h1>Overview Table</h1>
        </div>

        <br></br>

        <div>
          <label>
            <p>
              Welcome to Overview page.
              <br /> you can see all Food donation in here...
            </p>
          </label>
        </div>

        <div style={{ width: "150%", height: 450 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 50,
                right: 0,
                bottom: 0,
                left: 250,
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
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
}

export default Overview;
