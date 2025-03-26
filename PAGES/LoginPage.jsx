// SignUpPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CSS/LoginPage.css';
import myImage from './logo.jpg';
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        navigate('/signup');
    };

    const handleAdmin = (event) => {
        event.preventDefault();
        navigate('/admin');
    };


    const handleLogin = async(event) => {
        event.preventDefault();

        try{
            const response = await axios.post('http://localhost:5000/api/login',{
                username,password
            });
    
            alert("Login successfull");
            navigate("/home");
        }
        catch(err)
        {
            alert("Invalid Username or Password");
        }
    };

    return (
        <div className="signup-container">
            <div className="left-section">
                <h1>EDUVOTE</h1>
                <svg height="100" width="540" style={{marginTop:"-50px",marginBottom:"20px"}}>
                        <line x1="0" y1="50" x2="540" y2="50" style={{stroke:"#603f26", strokeWidth:2}} />
                </svg>
                <p style={{color: "#603f26", fontSize: "25px",marginLeft: "30px",marginTop: "-55px"}}>Empowering voices, shaping futures</p>
                <img src={myImage} alt="Eduvote Logo" />
            </div>
            <div className="right-section login-section">
                <h3>LOGIN</h3>
                <form>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <a onClick={handleRegister} style={{marginBottom:"0 px"}}>Dont have an acc? Register here</a>
                    <br/>
                    <a onClick={handleAdmin} style={{marginTop:"10px"}}>Admin Login</a>
                    <br/>
                    <button onClick={handleLogin}>Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
