import React from 'react';
import Home from './pages/Home';
import NavLink from './components/NavLink';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Admin from './pages/AdminManagement/Admin';
import User from './pages/AdminManagement/User';
import AddUser from './pages/AdminManagement/AddUser';
import Jobs from './pages/AdminManagement/Jobs';
import AddJobs from './pages/AdminManagement/AddJobs';

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

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
