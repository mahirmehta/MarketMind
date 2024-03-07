import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import APIService from '../APIService';
import './SignUp.css';

function SignUp({ isLoggedIn, handleLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Password validation
    if (name === 'password') {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      if (!regex.test(value)) {
        setMessage('Password must contain at least 1 special character, 1 uppercase letter, 1 lowercase letter, and be at least 8 characters long.');
      } else {
        setMessage('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if there's an error message
    if (message) return;

    APIService.RegisterUser(formData)
      .then(data => {
        console.log('Registration successful:', data);
        setMessage('Registration successful. Redirecting to dashboard...');
        // Handle successful registration, redirect or show a success message
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('Registration failed:', error);
        setMessage('Registration failed. Please try again.');
        // Handle registration failure, show error message to the user
      });
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {message && <p className="error-message">{message}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/log-in">Log In</Link></p>
    </div>
  );
}

export default SignUp;
