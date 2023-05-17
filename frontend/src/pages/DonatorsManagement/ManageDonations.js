import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Donations from './Donations'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { UserDetails } from '../../context/UserContext';
import "../DonatorsManagement/movingBanner.css"

export default function ManageDonations() {

  const [AddDonations,setAddDonations] = useState([]);
  const [search,setSearch] = useState("");
  const {user,setUser}= UserDetails();


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
    alert("Donation Deleted!")
    console.log(res.state)
  }).catch(err => {
    alert(err);
  })
}


  return (
    <>
    < Donations/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
    <div className="moving-banner" style={{}}>
      <h2>Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS | Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS | Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS</h2>
    </div>
      <br></br>
      <h2>DONATIONS</h2>
      <br></br>
      <Link to = "/Donations/AddDonations"><Button variant="primary">Add Donation</Button></Link>
      
      <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:-40 }}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search Hand over Date" />
        <input class="button--submit" value="Search" type="submit"></input>
      </div>
        <br></br>

      <Table striped bordered hover style={{textAlign : 'center', width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th> Donation ID </th>
          <th> Name</th>
          <th> Select Food Category </th>
          <th> Quantity</th>
          <th> Date of Hand-over</th>
          <th> District</th>
          <th> Mobile Number</th>
          <th> Action</th>
        </tr>
      </thead>
         
      <tbody>
       {AddDonations.filter((element) => element.dname === user.fullName)
            .filter((element) => {
                if(search === ""){
                    return element
                }else if (element.dateOfHandOver.includes(search)){
                    return element
                }
            }
            
            ).map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{e.donationID}</td>
                    <td>{e.dname}</td>
                    <td>{e.foodCategory}</td>
                    <td>{e.quantity}</td>
                    <td>{e.dateOfHandOver}</td>
                    <td>{e.district}</td>
                    <td>{e.mobileNumber}</td>
                    <td><center><Link to ={`Donations/EditDonations/${e._id}`}><Button variant="outline-primary">Edit</Button></Link>{" "}         <Button variant="outline-danger"onClick={() => deleteRecord(e._id)}>Delete</Button></center></td>
                </tr>
            ))}
      </tbody>
      </Table>
    </Container>

    </>
    )
}
