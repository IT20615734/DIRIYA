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
          fontFamily:'Verdana',
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

        <div style={{display: "flex", height: "50px", width: "100%"}}>
        <Container style={{display: "flex",flexWrap: "wrap",marginTop: "1%",width: "100%",height: "600%",justifyContent: "space-between",backgroundColor:"#ffffff",paddingTop: "1.2rem",paddingBottom: "1.2rem"}}>
          
        <p>Statistics of Gampaha District</p>
        <br></br>
            <Container style={{ flexBasis: "40%",marginTop: "1%",padding: "1rem", backgroundColor:"#27E1C1",boxShadow: "0px 0px 10px #888888",transition: "box-shadow 0.3s ease-in-out"}}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 0px 15px #888888"}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = "0px 0px 10px #888888"}
            >
              <p>Total Number of Families Identified</p>
              <p>Count till {new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</p>
            </Container>

            <Container style={{ flexBasis: "40%",marginTop: "1%",padding: "1rem",backgroundColor: "#FFD966",boxShadow: "0px 0px 10px #888888",transition: "box-shadow 0.3s ease-in-out"}}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 0px 15px #888888"}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = "0px 0px 10px #888888"}
            >
              <p>GS Divisions with defict of donations</p>
              <p>Count till {new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</p>
            </Container>

            <Container style={{ flexBasis: "40%",marginTop: "1%",padding: "1rem",backgroundColor: "#E96479",boxShadow: "0px 0px 10px #888888",transition: "box-shadow 0.3s ease-in-out"}}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 0px 15px #888888"}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = "0px 0px 10px #888888"}
            >
              <p>GS Divisions with surplus of donations</p>
              <p>Count till {new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</p>
            </Container>
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
