// src/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/colours.css';
import myImage from './logo.jpg';


function HouseCaptain() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="home-page">
            <header className="header">
                <nav className="links" style={{gap:50}}>
                    <a href="/home">HOME</a>
                    <a href="/results">RESULTS</a>
                    <a href="/feedback">FEEDBACK</a>
                    <a href="/contact-us">CONTACT US</a>
                    <a href="/aboutus">ABOUT US</a>
                </nav>
                <div className="logo">
                    <img src={myImage} alt="Eduvote Logo" />
                </div>
            </header>

            <div className="content">
            <   h1>House Captain</h1>
                <h2>Select the House you are in:</h2>
                <svg width="600" height="250">
                    <rect x="75" y="0" width="180" height="90" rx="20" ry="20" fill="#ffeb55" />
                    <text x="163" y="45" fontFamily="serif" fontSize="25" fill="black" textAnchor="middle" onClick={() => handleNavigate('/yellow-house')}>
                        Yellow
                    </text>

                    <rect x="350" y="0" width="180" height="90" rx="20" ry="20" fill="#ff5757" />
                    <text x="438" y="45" fontFamily="serif" fontSize="25" fill="black" textAnchor="middle" onClick={() => handleNavigate('/red-house')}>
                        Red
                    </text>

                    <rect x="75" y="140" width="180" height="90" rx="20" ry="20" fill="#7bb7e0" />
                    <text x="163" y="190" fontFamily="serif" fontSize="25" fill="black" textAnchor="middle" onClick={() => handleNavigate('/blue-house')}>
                        Blue
                    </text>

                    <rect x="350" y="140" width="180" height="90" rx="20" ry="20" fill="#6cdb6c" />
                    <text x="438" y="190" fontFamily="serif" fontSize="25" fill="black" textAnchor="middle" onClick={() => handleNavigate('/green-house')}>
                        Green
                    </text>
                </svg>
            </div>
        </div>
    );
}

export default HouseCaptain;
