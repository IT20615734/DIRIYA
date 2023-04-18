import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavLink from "./components/NavLink";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/AdminManagement/Admin";
import User from "./pages/AdminManagement/User";
import AddUser from "./pages/AdminManagement/AddUser";
import Jobs from "./pages/AdminManagement/Jobs";
import AddJobs from "./pages/AdminManagement/AddJobs";
import UpdateUser from "./pages/AdminManagement/UpdateUser";

import Beneficiaries from "./pages/BeneficiaryManagement/Beneficiaries";
import ManageBeneficiary from "./pages/BeneficiaryManagement/ManageBeneficiary";
import AddBeneficiary from "./pages/BeneficiaryManagement/AddBeneficiaries";
import UpdateBeneficiaries from "./pages/BeneficiaryManagement/UpdateBeneficiaries";
import JobOpportunities from "./pages/BeneficiaryManagement/JobOpportunities";
import AddApplication from "./pages/BeneficiaryManagement/AddApplications";
import ManageApplication from "./pages/BeneficiaryManagement/ManageApplication";
import UpdateApplications from "./pages/BeneficiaryManagement/UpdateApplications";

import Donations from "./pages/DonatorsManagement/Donations";
import ManageDonations from "./pages/DonatorsManagement/ManageDonations";
import AddDonations from "./pages/DonatorsManagement/AddDonations";
import EditDonations from "./pages/DonatorsManagement/EditDonations";

import Food from "./pages/FoodManagement/Food";
import ManageFood from "./pages/FoodManagement/ManageFood";
import AddFood from "./pages/FoodManagement/AddFood";

function App() {
  return (
    <>
      <React.Fragment>
        <NavLink />
      </React.Fragment>
      <BrowserRouter>
        <Routes>
          {/* Basic */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          {/* Admin */}
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Admin/User" element={<User />} />
          <Route exact path="/Admin/AddUser" element={<AddUser />} />
          <Route exact path="/Admin/Jobs" element={<Jobs />} />
          <Route exact path="/Admin/AddJobs" element={<AddJobs />} />
          <Route exact path="/Admin/User/Admin/UpdateUser/:id" element={<UpdateUser />}
          />

          {/* Beneficiary */}
          <Route exact path="/Beneficiaries" element={<Beneficiaries />} />
          <Route exact path="/Beneficiaries/ManageBeneficiary" element={<ManageBeneficiary />}/>
          <Route exact path="/Beneficiaries/AddBeneficiaries" element={<AddBeneficiary />} />
          <Route exact path="/Beneficiaries/ManageBeneficiary/Beneficiaries/UpdateBeneficiaries/:id" element={<UpdateBeneficiaries />}/>
          <Route exact path="/Beneficiaries/JobOpportunities" element={<JobOpportunities />}/>
          <Route exact path="/Beneficiaries/AddApplications" element={<AddApplication />}/>
          <Route exact path="/Beneficiaries/ManageApplication" element={<ManageApplication />} />
          <Route exact path="/Beneficiaries/ManageApplication/Applications/UpdateApplications/:id" element={<UpdateApplications />} />

          {/* Donations */}
          <Route exact path="/Donations" element={<Donations />} />
          <Route exact path="/Donations/ManageDonations" element={<ManageDonations />}/>
          <Route exact path="/Donations/AddDonations" element={<AddDonations />} />
          <Route exact path="/Donations/ManageDonations/Donations/EditDonations/:id" element={<EditDonations />} />

          {/* Food Management */}
          <Route exact path="/Food" element={<Food />} />
          <Route exact path="/Food/ManageFood" element={<ManageFood />}/>
          <Route exact path="/Food/AddFood" element={<AddFood />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
