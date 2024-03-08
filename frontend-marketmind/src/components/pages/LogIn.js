import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIService from '../APIService';
import './LogIn.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
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
        APIService.LoginUser(formData)
            .then(data => {
                if (data && data.token) {
                    console.log('Login successful:', data);
                    setMessage('Login successful. Redirecting...');
                    // Handle successful login, redirect or show a success message
                    navigate('/dashboard');
                } else {
                    setMessage('Invalid username or password. Please try again.');
                }
            })
            .catch(error => {
                console.error('Login failed:', error);
                setMessage('Login failed. Please check your credentials and try again.');
                // Handle login failure, show error message to the user
            });
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <button type="submit">Log In</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
        </div>
    );
}

export default Login;
