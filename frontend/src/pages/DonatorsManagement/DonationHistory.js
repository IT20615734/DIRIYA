import React, { useEffect, useState } from 'react'
import Donations from './Donations'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/esm/Table'
import { UserDetails } from '../../context/UserContext';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import "../DonatorsManagement/movingBanner.css"
import QRCode from 'react-qr-code'; 


function DonationHistory() {
  const [AddFood, setAddFood] = useState([]);
  const [search, setSearch] = useState("");
  const {user,setUser}= UserDetails();
  const [visibleRows, setVisibleRows] = useState([]);

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

  const toggleVisibility = (index) => {
    const isVisible = visibleRows.includes(index);
    if (isVisible) {
      setVisibleRows(visibleRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setVisibleRows([...visibleRows, index]);
    }
  };

  return (
    <>
    < Donations/>
    <Container
        style={{
          marginTop: "1%",
          display: "block",
          width: "100%",
          justifyContent: "center",
        }}
      >
      <div className="moving-banner" style={{}}>
      <h2>Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS | Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS | Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS</h2>
    </div>
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
            {AddFood.filter((element) => element.donaterName === user.fullName)
            .filter((element) => {
                if(search === ""){
                    return element
                }else if (element.foodCategory.includes(search)){
                    return element
                }
            }).map((e, i) => (
              <tr key={i} style={{ fontWeight: "400" }}>
                <td>{i + 1}</td>
                <td>{e.foodCategory}</td>
                <td>{e.quantity}</td>
                <td>{e.donaterName}</td>
                <td>{e.remarks}</td>
                <td>
                {visibleRows.includes(i) ? (
                    <QRCode value={JSON.stringify(e)} />
                  ) : (
                    <Button variant="primary" onClick={() => toggleVisibility(i)}>
                      View
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
   

    </>
  )
}

export default DonationHistory