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
import JobOpportunities from './pages/BeneficiaryManagement/JobOpportunities';
import AddApplication from './pages/BeneficiaryManagement/AddApplications';
import ManageApplication from './pages/BeneficiaryManagement/ManageApplication';

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
          <Route exact path="/Admin/UpdateUser" element={<UpdateUser/>}/>

          {/* Beneficiary */}
          <Route exact path="/Beneficiaries" element={<Beneficiaries />} />
          <Route exact path="/Beneficiaries/ManageBeneficiary" element={<ManageBeneficiary/>}/>
          <Route exact path="/Beneficiaries/AddBeneficiaries" element={<AddBeneficiary/>}/>
          <Route exact path="/Beneficiaries/JobOpportunities" element={<JobOpportunities/>}/>
          <Route exact path="/Beneficiaries/AddApplications" element={<AddApplication/>}/>
          <Route exact path="/Beneficiaries/ManageApplication" element={<ManageApplication/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
