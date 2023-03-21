import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/AdminManagement/Admin';

function App() {
  return (
    <>
    <React.Fragment>
      <Navbar />
    </React.Fragment>
    <BrowserRouter>
        <Routes>
          {/* Basic */}
          <Route exact path="/" element={<Home />} />
          {/* Admin */}
          <Route exact path="/Admin" element={<Admin />} />

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
