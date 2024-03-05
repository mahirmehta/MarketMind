import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import APIService from '../APIService';
import './SignUp.css';

function SignUp() {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button type="submit">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p>Already have an account? <Link to="/log-in">Log In</Link></p>
    </div>
  );
}

export default SignUp;
