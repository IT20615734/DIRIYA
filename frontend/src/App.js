import React from 'react';
import Home from './pages/Home';
import NavLink from './components/NavLink';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Admin from './pages/AdminManagement/Admin';
import User from './pages/AdminManagement/User';
import AddUser from './pages/AdminManagement/AddUser';
import Jobs from './pages/AdminManagement/Jobs';
import AddJobs from './pages/AdminManagement/AddJobs';
import UpdateUser from './pages/AdminManagement/UpdateUser';

import Beneficiaries from './pages/BeneficiaryManagement/Beneficiaries';
import ManageBeneficiary from './pages/BeneficiaryManagement/ManageBeneficiary';
import AddBeneficiary from './pages/BeneficiaryManagement/AddBeneficiaries';
import UpdateBeneficiaries from './pages/BeneficiaryManagement/UpdateBeneficiaries';
import JobOpportunities from './pages/BeneficiaryManagement/JobOpportunities';
import AddApplication from './pages/BeneficiaryManagement/AddApplications';
import ManageApplication from './pages/BeneficiaryManagement/ManageApplication';
import UpdateApplications from './pages/BeneficiaryManagement/UpdateApplications';

import Donations from './pages/DonatorsManagement/Donations';
import ManageDonations from './pages/DonatorsManagement/ManageDonations';
import AddDonations from './pages/DonatorsManagement/AddDonations';


function App() {
  return (
    <>
    <React.Fragment>
      <NavLink/>
    </React.Fragment>
    <BrowserRouter>
        <Routes>
          {/* Basic */}
          <Route exact path="/" element={<Home />} />
          {/* Admin */}
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Admin/User" element={<User/>} />
          <Route exact path="/Admin/AddUser" element={<AddUser/>}/>
          <Route exact path="/Admin/Jobs" element={<Jobs/>}/>
          <Route exact path="/Admin/AddJobs" element={<AddJobs/>}/>
          <Route exact path="/Admin/User/Admin/UpdateUser/:id" element={<UpdateUser/>}/>

          {/* Beneficiary */}
          <Route exact path="/Beneficiaries" element={<Beneficiaries />} />
          <Route exact path="/Beneficiaries/ManageBeneficiary" element={<ManageBeneficiary/>}/>
          <Route exact path="/Beneficiaries/AddBeneficiaries" element={<AddBeneficiary/>}/>
          <Route exact path="/Beneficiaries/UpdateBeneficiaries" element={<UpdateBeneficiaries/>}/>
          <Route exact path="/Beneficiaries/JobOpportunities" element={<JobOpportunities/>}/>
          <Route exact path="/Beneficiaries/AddApplications" element={<AddApplication/>}/>
          <Route exact path="/Beneficiaries/ManageApplication" element={<ManageApplication/>}/>
          <Route exact path="/Beneficiaries/UpdateApplications" element={<UpdateApplications/>}/>


           {/* Donations */}
           <Route exact path="/Donations" element={<Donations />} />
           <Route exact path="/Donations/ManageDonations" element={<ManageDonations/>}/>
           <Route exact path="/Donations/AddDonations" element={<AddDonations/>}/>


          

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
