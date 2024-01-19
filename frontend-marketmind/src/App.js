import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Analysis from './components/pages/Analysis';
import Dashboard from './components/pages/Dashboard';
import SignUp from './components/pages/SignUp';
import Team from './components/pages/Team';
import AboutUs from './components/pages/AboutUs';
import General from './components/pages/General';
import Support from './components/pages/Support';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Dashboard' element={<Dashboard />} />
          <Route exact path='/Analysis' element={<Analysis />} />
          <Route exact path='/sign-up' element={<SignUp />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/about-us-&-contact-us' element={<AboutUs />} />
          <Route exact path='/general' element={<General />} />
          <Route exact path='/support' element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
