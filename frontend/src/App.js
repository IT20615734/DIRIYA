import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login ";
import NavLink from "./components/NavLink";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/AdminManagement/Admin";
import User from "./pages/AdminManagement/User";
import AddUser from "./pages/AdminManagement/AddUser";
import Footer from "./components/Footer";
import Jobs from "./pages/AdminManagement/Jobs";
import AddJobs from "./pages/AdminManagement/AddJobs";
import UpdateUser from "./pages/AdminManagement/UpdateUser";
import UpdateJob from "./pages/AdminManagement/UpdateJob";

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
import NewDonater from "./pages/DonatorsManagement/NewDonater";

import Food from "./pages/FoodManagement/Food";
import ManageFood from "./pages/FoodManagement/ManageFood";
import AddFood from "./pages/FoodManagement/AddFood";
import UpdateFood from "./pages/FoodManagement/UpdateFood";
import Overview from "./pages/FoodManagement/Overview";

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
          <Route exact path="/Login" element={<Login />} />
          {/* Admin */}
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Admin/User" element={<User />} />
          <Route exact path="/Admin/AddUser" element={<AddUser />} />
          <Route exact path="/Admin/Jobs" element={<Jobs />} />
          <Route exact path="/Admin/AddJobs" element={<AddJobs />} />
          <Route exact path="/Admin/User/Admin/UpdateUser/:id" element={<UpdateUser />}/>
          <Route exact path="/Admin/Jobs/Admin/UpdateJob/:id" element={<UpdateJob />}/>

          {/* Beneficiary */}
          <Route exact path="/Beneficiaries" element={<Beneficiaries />} />
          <Route
            exact
            path="/Beneficiaries/ManageBeneficiary"
            element={<ManageBeneficiary />}
          />
          <Route
            exact
            path="/Beneficiaries/AddBeneficiaries"
            element={<AddBeneficiary />}
          />
          <Route
            exact
            path="/Beneficiaries/ManageBeneficiary/Beneficiaries/UpdateBeneficiaries/:id"
            element={<UpdateBeneficiaries />}
          />
          <Route
            exact
            path="/Beneficiaries/JobOpportunities"
            element={<JobOpportunities />}
          />
          <Route
            exact
            path="/Beneficiaries/AddApplications"
            element={<AddApplication />}
          />
          <Route
            exact
            path="/Beneficiaries/ManageApplication"
            element={<ManageApplication />}
          />
          <Route
            exact
            path="/Beneficiaries/ManageApplication/Applications/UpdateApplications/:id"
            element={<UpdateApplications />}
          />

          {/* Donations */}
          <Route exact path="/Donations" element={<Donations />} />
          <Route exact path="/Donations/ManageDonations" element={<ManageDonations />}/>
          <Route exact path="/Donations/AddDonations" element={<AddDonations />} />
          <Route exact path="/Donations/ManageDonations/Donations/EditDonations/:id" element={<EditDonations />} />
          <Route exact path="/Donater/NewDonater" element={<NewDonater />} />

          {/* Food Management */}
          <Route exact path="/Food" element={<Food />} />
          <Route exact path="/Food/ManageFood" element={<ManageFood />} />
          <Route exact path="/Food/AddFood" element={<AddFood />} />
          <Route exact path="/Food/UpdateFood/:id" element={<UpdateFood />} />
          <Route exact path="/Food/Overview" element={<Overview />} />
        </Routes>
        <Footer/> 
      </BrowserRouter>
    </>
  );
}

export default App;
