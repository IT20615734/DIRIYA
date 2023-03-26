import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Admin from './Admin'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

 function User () {

  const [AddUser,setAddUser] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/User").then((res) =>{
      // console.log(res.data.Users)
      setAddUser(res.data.AddUser);

    }).catch((e) =>{
        alert(e)
    })

}, [AddUser])

  return (
    <>
    <Admin/>
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
      <br></br>
      <h2>USERS</h2>
      <br></br>
      <Link to = "/Admin/AddUser"><Button variant="primary">+ Add New User</Button></Link>
      <br></br>
      <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20}}>
      <thead>
        <tr>
          <th>Index Id</th>
          <th>User Type</th>
          <th>Full Name</th>
          <th>NIC</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>User Name</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
         {AddUser.filter((element) =>{
                if(search === ""){
                    return element
                }else if (element.role.includes(search)){
                    return element
                }
            }
            ).map((e,i) =>(
                <tr key={i} style={{textAlign : 'center',fontWeight : '400'}}>
                    <td>{i+1}</td>
                    <td>{e.role}</td>
                    <td>{e.fullName}</td>
                    <td>{e.nic}</td>
                    <td>{e.email}</td>
                    <td>{e.mobileNumber}</td>
                    <td>{e.userName}</td>
                    <td><center><Button variant="outline-primary">Edit</Button>        <Button variant="outline-danger">Delete</Button></center></td>
                </tr>
            ))}
      </tbody>
      </Table>
    </Container>
         
   </>
  )
}export default User;
