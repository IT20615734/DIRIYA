import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Food from './Food';
import axios from 'axios';

function Donation() {

  const [AddDonations,setAddDonations] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/Donations").then((res) =>{
      
    setAddDonations(res.data.AddDonations);

    }).catch((e) =>{
        alert(e)
    })

}, [AddDonations])

const deleteRecord = (e) =>{
  console.log(e);
  axios.delete(`http://localhost:8080/Donations/delete/${e}`).then(res =>{
    alert("Donation Rejected!")
    console.log(res.state)
  }).catch(err => {
    alert(err);
  })
}

  return (
    <>
    <Food/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>DONATIONS</h2>
      <br></br>      
      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th> Your Donation ID </th>
          <th> Select Food Category </th>
          <th> Quantity</th>
          <th> Date of Hand-over</th>
          <th> District</th>
          <th> Mobile Number</th>
          <th> Action</th>
        </tr>
      </thead>
      <tbody>
      {AddDonations.filter((element) =>{
                if(search === ""){
                    return element
                }else if (element.role.includes(search)){
                    return element
                }
            }
            ).map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    {/* <td>{e.donationID}</td> */}
                    <td>{e.foodCategory}</td>
                    <td>{e.quantity}</td>
                    <td>{e.dateOfHandOver}</td>
                    <td>{e.district}</td>
                    <td>{e.mobileNumber}</td>
                    <td><center><Link to="/Food/AddFood"><Button variant="outline-primary">Accept</Button></Link>        <Button variant="outline-danger" onClick={() => deleteRecord(e._id)}>Reject</Button></center></td>
                </tr>
            ))}
      </tbody>
      </Table>
    </Container>
    </>
  )
}

export default Donation