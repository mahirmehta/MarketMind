import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Team from './components/pages/Team';
import AboutUs from './components/pages/AboutUs';
import General from './components/pages/General';
import Support from './components/pages/Support';
import Partners from './components/pages/Partners';
import Careers from './components/pages/Careers';
import MMBlogs from './components/pages/MMBlogs';
import Articles from './components/pages/Articles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Function to handle successful signup and set the username
  const handleSignUp = (newUsername) => {
    setUsername(newUsername);
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} username={username} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/sign-up' element={<SignUp onSignUp={handleSignUp} />} />
          <Route exact path='/log-in' element={<LogIn />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/about-us-&-contact-us' element={<AboutUs />} />
          <Route exact path='/general' element={<General />} />
          <Route exact path='/support' element={<Support />} />
          <Route exact path='/partners' element={<Partners />} />          
          <Route exact path='/careers' element={<Careers />} />
          <Route exact path='/mm-blogs' element={<MMBlogs />} />
          <Route exact path='/articles' element={<Articles />} />
          {/* Redirect to dashboard if user is logged in */}
          {isLoggedIn && <Route path='/sign-up' element={<Navigate to='/dashboard' />} />}
        </Routes>
      </Router>
    </>
  );
}

export default App;
