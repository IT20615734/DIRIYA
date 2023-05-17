import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Admin from "./Admin";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Navigate,useLocation,useNavigate,useParams,} from "react-router-dom";

function UpdateUser() {
  const [userId, setUserId] = useState();
  const [role, setRole] = useState();
  const [fullName, setFulltName] = useState();
  const [nic, setNic] = useState();
  const [address, setAddress] = useState();
  const [gsDivision, setgsDivision] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [userName, setUserName] = useState();
//   const [Password, setPassword] = useState();

  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/User/")
      .then((value) => {
        const users = value.data.AddUser;
        for (let user of users) {
          if (user["_id"] === id) {
            //console.log("user found");
            setUserId(user["userId"]);
            setRole(user["role"]);
            setFulltName(user["fullName"]);
            setNic(user["nic"]);
            setAddress(user["address"]);
            setgsDivision(user["gsDivision"]);
            setEmail(user["email"]);
            setMobileNumber(user["mobileNumber"]);
            setUserName(user["userName"]);
            // setPassword(user["password"]);
          }
        }
      })
      .catch((err) => {
        console.log("cant find the user " + err);
      });
  }, []);

  const navigate = useNavigate();

  const Validate = async (e) => {
    e.preventDefault();

    const data = {
      userId:userId,
      role: role,
      fullName: fullName,
      nic: nic,
      address: address,
      gsDivision: gsDivision,
      email: email,
      mobileNumber: mobileNumber,
      userName: userName,
    //   Password: Password,
    };

    await axios
      .put("http://localhost:8080/User/update/"+id, data)
      .then((res) => {
        alert("Update User");
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
        alert(
          "There is an existing user by this user name; use different user name " +
            err
        );
      });
  };

  return (
    <>
      <Admin />
      <Container style={{marginTop: "1%", display: "block", width: "50%", justifyContent: "center" }}>
        <Form onSubmit={Validate}>
          <h1 style={{ fontWeight: "bold" }}>
            <center>EDIT DETAILS</center>
          </h1>

          <br></br>
          <hr></hr>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Id</Form.Label>
            <Form.Control type="text" disabled={true} value={userId} onChange={(e) => {setUserId(e.target.value);}}required/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>User Type</Form.Label>
            <Form.Select disabled={true} value={role}onChange={(e) => {setRole(e.target.value);}} required>
              <option></option>
              <option value="Admin">Admin</option>
              <option value="FoodManager">Food Manager</option>
              <option value="VillageOfficer">Village Officer</option>``
              <option value="Donater">Donater</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={fullName} onChange={(e) => {setFulltName(e.target.value);}}required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" disabled={true} maxLength={12} minLength={10}  value={nic} onChange={(e) => {setNic(e.target.value);}}required/>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={address} onChange={(e) => {setAddress(e.target.value);}} required/>
          </Form.Group> */}
          <Form.Group className="mb-3" >
              <Form.Label>District</Form.Label>
              <Form.Select value = {address} onChange={(e)=>{setAddress(e.target.value)}} required >
                <option></option>
                <option value = 'Colombo'>Colombo</option>
                <option value = 'Gampaha'>Gampaha</option>
                <option value='Kalutara'>Kalutara</option>``
                <option value='Kandy'>Kandy</option>
                <option value='Matale'>Matale</option>
                <option value=' NuwaraEliya'> Nuwara Eliya</option>
                <option value='Galle'>Galle</option>
                <option value='Matara'>Matara</option>
                <option value='Hambantota'>Hambantota</option>
                <option value='Jaffna'>Jaffna</option>
                <option value='Kilinochchi'>Kilinochchi</option>
                <option value='Mannar'>Mannar</option>
                <option value='Vavuniya'>Vavuniya</option>
                <option value='Mullaitivu'>Mullaitivu</option>
                <option value='Batticaloa'>Batticaloa</option>
                <option value='Ampara'>Ampara</option>
                <option value='Trincomalee'>Trincomalee</option>
                <option value='Kurunegala'>Kurunegala</option>
                <option value='Puttalam'>Puttalam</option>
                <option value='Anuradhapura'>Anuradhapura</option>
                <option value='Polonnaruwa'>Polonnaruwa</option>
                <option value='Badulla'>Badulla</option>
                <option value='Moneragala'>Moneragala</option>
                <option value='Ratnapura'>Ratnapura</option>
                <option value='Kegalle'>Kegalle</option>
              </Form.Select>
        </Form.Group>

        {role === 'VillageOfficer' && address === 'Colombo' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Dehiwala'>Dehiwala</option>
            <option value='Homagama'>Homagama</option>
            <option value='Kaduwela'>Kaduwela</option>	
            <option value='Kesbewa'>Kesbewa</option>	
            <option value='Maharagama'>Maharagama</option>
            <option value='Moratuwa'>Moratuwa</option>	
            <option value='Padukka'>Padukka</option>	
            <option value='Ratmalana'>Ratmalana</option>	
            <option value='Seethawaka'>Seethawaka</option>	
            <option value='Sri Jayawardenepura'>Sri Jayawardenepura</option> 
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Gampaha' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value = 'Negombo'>Negombo</option>
            <option value = 'Katana'>Katana</option>
            <option value ='Divulapitiya'>Divulapitiya</option>``
            <option value ='Mirigama'>Mirigama</option>
            <option value='Minuwangoda'>Minuwangoda</option>
            <option value='Wattala'>Wattala</option>
            <option value='Ja-Ela'>Ja-Ela</option>
            <option value='Gampaha'>Gampaha</option>
            <option value='Attanagalla'>Attanagalla</option>
            <option value='Dompe'>Dompe</option>
            <option value='Mahara'>Mahara</option>
            <option value='Kelaniya'>Kelaniya</option>
            <option value='Biyagama'>Biyagama</option>
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Kalutara' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Agalawatta'>Agalawatta	</option>
            <option value='Bandaragama'>Bandaragama</option>	
            <option value='Beruwala'>Beruwala</option>	
            <option value='Bulathsinhala'>Bulathsinhala</option>	
            <option value='Dodangoda'>Dodangoda</option>
            <option value='Horana'>Horana</option>
            <option value='Ingiriya'>Ingiriya</option>

            <option>Mathara</option>
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Kandy' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Akurana'>Akurana</option>	
            <option value='Doluwa'>Doluwa</option>
            <option value='Harispattuwa'>Harispattuwa</option>	
            <option value='Kundasale'>Kundasale</option>	
            <option value='Minipe'>Minipe</option>
            <option value='Panvila'>Panvila</option>	
            <option value='Pathadumbara'>Pathadumbara</option>		
            <option value='Poojapitiya'>Poojapitiya</option>	
            </Form.Select>
        </Form.Group>
        )}  

        {role === 'VillageOfficer' && address === 'Matale' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Ambanganga Korale'>Ambanganga Korale</option> 
            <option value='Dambulla'>Dambulla</option> 
            <option value='Galewela'>Galewela</option> 
            <option value='Naula'>Naula</option> 
            <option value='Pallepola'>Pallepola</option> 
            <option value='Rattota'>Rattota</option> 
            <option value='Ukuwela'>Ukuwela</option> 
            <option value='Wilgamuwa'>Wilgamuwa</option>
            <option value='Yatawatta'>Yatawatta</option> 
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'NuwaraEliya' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Nuwaraeliya'>Nuwaraeliya</option>
            <option value='Kotmale'>Kotmale</option>
            <option value='Ambagamuwa'>Ambagamuwa</option> 
            <option value='Walapane'>Walapane</option>
            <option value='Hanguranketha'>Hanguranketha</option>
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Galle' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Ahangama'>Ahangama</option>
            <option value='Ahungalla'>Ahungalla</option>
            <option value='Koggala'>Koggala</option>
            <option value='Kosgoda'>Kosgoda</option>
            <option value='Elpitiya'>Elpitiya</option>
            <option value='Habaraduwa'>Habaraduwa</option>
            <option value='Rathgama'>Rathgama</option>
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Matara' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Akuressa'>Akuressa</option>	
            <option value='Thuraliya'>Thuraliya</option>	
            <option value='Devinuwara'>Devinuwara</option>
            <option value='Dickwella'>Dickwella</option>		
            <option value='Kamburupitiya'> Kamburupitiya</option>	
            <option value='Pasgoda'>Pasgoda</option>	
            <option value='Pitabeddara'>Pitabeddara</option>	
            <option value='Tihihagoda'>Tihihagoda</option>
            <option value='Weligama'>Weligama</option>	
            <option value='Welipitiya'>Welipitiya</option>
            <option value='Rathgama'>Rathgama</option>
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Hambantota' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Ambalantota'>Ambalantota </option>
            <option value='Angunakolapellessa'>Angunakolapellessa </option>
            <option value='Beliatte'>Beliatte</option> 
            <option value='Katuwana'>Katuwana</option> 
            <option value='Lunugamvehera'>Lunugamvehera</option> 
            <option value='Suriyawewa'>Suriyawewa</option>Suriyawewa 
            <option value='Tangalle'>Tangalle</option>
            <option value='Tissamaharama'>Tissamaharama</option> 
            <option value='Weeraketiya'>Weeraketiya</option> 
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Jaffna' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Delft'>Delft</option>	
            <option value='Karainagar'>Karainagar</option>	
            <option value='Nallur'>Nallur</option>	
            <option value='Vadamarachchi'>Vadamarachchi</option> 
            <option value='Valikamam'>Valikamam</option> 
        
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Kilinochchi' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Kandavalai'>Kandavalai</option>	
            <option value='Karachchi'>Karachchi</option>	
            <option value='Pachchilaipalli'>Pachchilaipalli</option>	
            <option value='Poonakary'>Poonakary</option>

            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Mannar' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Madhu'>Madhu</option>	
            <option value='Manthai West'>Manthai West</option>	
            <option value='Musali'>Musali</option>
            <option value='Nanaddan'>Nanaddan</option>	
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Vavuniya' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Vavuniya'>Vavuniya</option>	
            <option value='Vavuniya North'>Vavuniya North</option>
            <option value='Vavuniya South'>Vavuniya South</option>		
            <option value='Venkalacheddikulam'>Venkalacheddikulam</option>

            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Mullaitivu' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Manthai East'>Manthai East</option>		
            <option value='Maritimepattu'>Maritimepattu</option>
            <option value='Oddusuddan'>Oddusuddan</option>
            <option value='Puthukkudiyiruppu'>Puthukkudiyiruppu</option>
            <option value='Thunukkai'>Thunukkai</option>	
            <option value='Weli Oya'>Weli Oya</option>
            
            </Form.Select>
        </Form.Group>
        )}


        {role === 'VillageOfficer' && address === 'Batticaloa' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Eravurpattu'>Eravurpattu</option>
            <option value='Koralaipattu'>Koralaipattu</option>
            <option value='Manmunai North'>Manmunai North</option>
            <option value='Manmunaipattu'>Manmunaipattu</option>
            <option value='Manmunai South'>Manmunai South</option>
            <option value='Manmunai Southwest'>Manmunai Southwest</option>
            <option value='Manmunai West'>Manmunai West</option>
            <option value='Porativupattu'>Porativupattu</option>
                
            </Form.Select>
        </Form.Group>
        )}
        
        {role === 'VillageOfficer' && address === 'Ampara' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Akkaraipattu'>Akkaraipattu</option>		
            <option value='Dehiattakandiya'>Dehiattakandiya</option>	
            <option value='Kalmunai'>Kalmunai</option> 
            <option value='Karaitivu'>Karaitivu</option>		
            <option value='Maha Oya'>Maha Oya</option>	
            <option value='Padiyathalawa'>Padiyathalawa</option>	
            <option value='Pottuvil'>Pottuvil</option>
            <option value='Sainthamaruthu'>Sainthamaruthu</option>	
            </Form.Select>
        </Form.Group>
        )}

        {role === 'VillageOfficer' && address === 'Trincomalee' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Gomarankadawala'>Gomarankadawala</option>
            <option value='Kantalai'>Kantalai</option>
            <option value='Kinniya'>Kinniya</option>
            <option value='Kuchchaveli'>Kuchchaveli</option>
            <option value='Morawewa'>Morawewa</option>
            <option value='Muttur'>Muttur</option>
            <option value='Padavi Siripura'>Padavi Siripura</option>

            </Form.Select>
        </Form.Group>
        )}
        {role === 'VillageOfficer' && address === 'Kurunegala' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Girathalana'>Girathalana</option>
            <option value='Panagamuwa'>Panagamuwa</option>
            <option value='Narammala'>Narammala</option>
            <option value='Wariyapola'>Wariyapola</option>
            <option value='Nikaweratiya'>Nikaweratiya</option>
            <option value='Pannala'>Pannala</option>
            </Form.Select>
        </Form.Group>
        )}
        {role === 'VillageOfficer' && address === 'Puttalam' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Anamaduwa'>Anamaduwa</option>
            <option value='Battuluoya'>Battuluoya</option>
            <option value='Dankotuwa'>Dankotuwa</option>
            <option value='Eluvankulam'>Eluvankulam</option>
            <option value='Kalpitiya'>Kalpitiya</option>
            <option value='Madampe'>Madampe</option>
            </Form.Select>
        </Form.Group>
        )}
        {role === 'VillageOfficer' && address === 'Anuradhapura' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Galenbindunuwewa'>Galenbindunuwewa</option>
            <option value='Galnewa'>Galnewa</option>
            <option value='Ganewalpola'>Ganewalpola</option>
            <option value='Habarana'>Habarana</option>
            <option value='Horowupotana'>Horowupotana</option>
            <option value='Kahatagasdigiliya'>Kahatagasdigiliya</option>
            </Form.Select>
        </Form.Group>
        )}
        {role === 'VillageOfficer' && address === 'Polonnaruwa' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Thamankaduwa'>Thamankaduwa</option>
            <option value='Hingurakgoda'>Hingurakgoda</option>
            <option value='Medirigiriya'>Medirigiriya</option>
            <option value='Lankapura'>Lankapura</option>
            <option value='Welikanda'>Welikanda</option>
            <option value='Dimbulagala'>Dimbulagala</option>
            <option value='Elahera'>Elahera</option>
            </Form.Select>
        </Form.Group>
        )}
        {role === 'VillageOfficer' && address === 'Badulla' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Hali-Ela'>Hali-Ela</option>
            <option value='Haputale'>Haputale</option>
            <option value='Mahiyanganaya'>Mahiyanganaya</option>
            <option value='Passara'>Passara</option>
            <option value='Uva-Paranagama'>Uva-Paranagama</option>
            <option value='Welimada'>Welimada</option>
            </Form.Select>
        </Form.Group>
        )}
        {role === 'VillageOfficer' && address === 'Moneragala' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Bibile'>Bibile</option>
            <option value='Buttala'>Buttala</option>
            <option value='Wellawaya'>Wellawaya</option>
            <option value='Kataragama'>Kataragama</option>
            <option value='Siyambalanduva'>Siyambalanduva</option>
            <option value='medagama'>medagama</option>
            </Form.Select>
        </Form.Group>
        )}
        {role === 'VillageOfficer' && address === 'Ratnapura' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Eheliyagoda'>Eheliyagoda</option>
            <option value='Pelmadulla'>Pelmadulla</option>
            <option value='Kuruwita'>Kuruwita</option>
            <option value='Imbulpe'>Imbulpe</option>
            <option value='Godakawela'>Godakawela</option>
            <option value='Kahawatta'>Kahawatta</option>
            <option value='Rakwana'>Rakwana</option>
            <option value='Weligepola'>Weligepola</option>
            </Form.Select>
        </Form.Group>
        )}
        {role === 'VillageOfficer' && address === 'Kegalle' &&   (
        <Form.Group className="mb-3">
            <Form.Label>GS Division</Form.Label>
            <Form.Select type="text" onChange={(e)=>{setgsDivision(e.target.value)}} required>
            <option></option>
            <option value='Karawanella'>Karawanella</option>
            <option value='Kitulgala'>Kitulgala</option>
            <option value='Kotiyakumbura'>Kotiyakumbura</option>
            <option value='Mawanella'>Mawanella</option>
            <option value='Rambukkana'>Rambukkana</option>
            <option value='Ruwanwella'>Ruwanwella</option>
            <option value='Thalgaspitiya'>Thalgaspitiya</option>
            <option value='Warakapola'>Warakapola</option>
            </Form.Select>
        </Form.Group>
        )}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email"value={email} onChange={(e) => {setEmail(e.target.value);}}required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text"maxLength={10} minLength={10} value={mobileNumber} onChange={(e) => {setMobileNumber(e.target.value);}}required/>
          </Form.Group>

          <h4 style={{ fontWeight: "bold" }}>Login details</h4>
          <hr></hr>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" disabled={true} value={userName} onChange={(e) => {setUserName(e.target.value);}}required/>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={Password} onChange={(e) => {setPassword(e.target.value);}} required/>
          </Form.Group> */}

          <Button variant="primary" type="submit" style={{ width: "20%", marginBottom: 20 }}>
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default UpdateUser;
