import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CSS/SignUpPage.css';
import myImage from './logo.jpg';
import axios from 'axios';

const SignUpPageAdmin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        adminId: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        setError('');
    };

    const validateForm = () => {
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords Do not match")
            return false;
        }
        return true;
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/register1', {
                username: formData.username.trim(),
                adminId: formData.adminId.trim(),
                password: formData.password.trim()
            });
            
            if (response.status === 201) {
                // Clear form
                setFormData({
                    username: '',
                    adminId: '',
                    password: '',
                    confirmPassword: ''
                });
                navigate('/admin');
                alert("Registered Successfully");
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="left-section">
                <h1>EDUVOTE</h1>
                <svg height="100" width="540" style={{marginTop: "-50px", marginBottom: "20px"}}>
                    <line x1="0" y1="50" x2="540" y2="50" style={{stroke: "#603f26", strokeWidth: 2}} />
                </svg>
                <p style={{color: "#603f26", fontSize: "25px", marginLeft: "30px", marginTop: "-55px"}}>
                    Empowering voices, shaping futures
                </p>
                <img src={myImage} alt="Eduvote Logo" />
            </div>
            <div className="right-section login-section">
                <h3>SIGN UP</h3>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleRegister}>
                    <label>Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <label>Admin ID</label>
                    <input
                        id="adminId"
                        type="text"
                        name="adminId"
                        value={formData.schoolId}
                        onChange={handleChange}
                        required
                    />
                    <label>New Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="6"
                    />
                    <label>Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        minLength="6"
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPageAdmin;