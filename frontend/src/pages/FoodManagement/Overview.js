import React from "react";
import Container from "react-bootstrap/esm/Container";
import Food from "./Food";
import "../FoodManagement/Overview.css";
import { ResponsiveContainer,ComposedChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

function Overview() {
  // DATA
  
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
          width: "100%",
          justifyContent: "center",
        }}
      >
       

        <br></br>

        <div style ={{marginLeft:'-15%', marginTop:'-1.5%'}}>
          <label>
            <p style={{fontSize:'135%'}}>
              Welcome, Dinuka Thilakarathna
              </p>
              <p style={{fontSize:'100%', marginTop:'-5%'}}>
              Donation Manager - Gampaha District
              </p>
          </label>
        </div>



        <div className="Overview" style={{justifyContent:'center'}}>
          <h2>DONATION MANAGEMENT DASHBOARD</h2>
        </div>

        <Container style={{marginTop: "1%", display: "block", width: "25%", justifyContent: "left", padding: "1rem", backgroundColor: 'blue'}}> 
        <p>This is test</p>
        </Container>

        <div style={{ width: "75%", height: 450 }}>
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
