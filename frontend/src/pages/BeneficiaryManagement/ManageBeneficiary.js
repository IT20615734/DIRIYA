import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Beneficiaries from './Beneficiaries'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../../Styles/Search.css'
import { UserDetails } from '../../context/UserContext';

export default function ManageBeneficiary() {

  const [AddBeneficiaries,setAddBeneficiaries] = useState([]);
  const [search,setSearch] = useState([]);
  const {user,setUser}= UserDetails();

  //GET (GET DATA FROM DB)
  useEffect(() => {
    axios.get("http://localhost:8080/Beneficiaries").then((res) =>{
      
    setAddBeneficiaries(res.data.AddBeneficiaries);

    }).catch((e) =>{
        alert(e)
    })

}, [AddBeneficiaries])

//DELETE (DELETE DATA FROM DB)
const deleteRecord = (e) =>{
  console.log(e);
  axios.delete(`http://localhost:8080/Beneficiaries/delete/${e}`).then(res =>{
    alert("Beneficiary Deleted !")
    console.log(res.state)
  }).catch(err => {
    alert(err);
  })
  
}

  return (
    <>
    <Beneficiaries/>
    
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>

    <div style ={{marginLeft:'-15%', marginTop:'1.5%'}}>
          <label>
            <p style={{fontSize:'135%'}}>
              Welcome, {user.fullName}
              </p>
              <p style={{fontSize:'100%', marginTop:'-5%'}}>
              {user.gsDivision} GS Division
              </p>
          </label>
    </div>
      <br></br>
      <h2>BENEFICIARIES</h2>
      <br></br>
      <Link to = "/Beneficiaries/AddBeneficiaries"><Button variant="primary">+ Add Beneficiary</Button></Link>
      
      <div style={{flex : 1,display : 'flex',justifyContent : 'right',marginTop:-40 }}>
        <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}}  placeholder="Search by NIC" />
        <input class="button--submit" value="Search" type="submit"></input>
      </div>
        <br></br>

      <Table striped bordered hover style={{textAlign : 'center', width : '110%',justifyContent : 'right',marginTop : 20}}>
      <thead>
        <tr>
          <th> Beneficiary <br/>ID</th>
          <th> Beneficiary Name</th>
          <th> Address </th>
          <th> GS Division</th>
          <th> NIC</th>
          <th> Mobile <br/>Number</th>
          <th> No of <br/>Family Members</th>
          <th> Monthly <br/>Income</th>
          <th> Action</th>
        </tr>
      </thead>
         
      <tbody>

       {AddBeneficiaries.filter((element) => element.gsDivision === user.gsDivision)
       .filter((element) =>{
                if(search === ""){
                    return element
                }else if (element.nic.includes(search)){
                    return element
                }
            }

            //catch data for the columns created using on change events
            ).map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{e.beneficiaryID}</td>
                    <td>{e.beneficiaryName}</td>
                    <td>{e.address}</td>
                    <td>{e.gsDivision}</td>
                    <td>{e.nic}</td>
                    <td>{e.mobileNumber}</td>
                    <td>{e.numberOfFamilyMembers}</td>
                    <td>{e.monthlyIncome}</td>
                    <td><center>
                    <Link to={`Beneficiaries/UpdateBeneficiaries/${e._id}`}>
                      <Button variant="outline-primary">Edit</Button>
                    </Link>{" "}       
                        
                        <Button variant="outline-danger" onClick={() => deleteRecord(e._id)}>Delete</Button></center></td>
                </tr>
            ))}
      </tbody>
      </Table>
    </Container>

    </>
    )
}
