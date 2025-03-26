// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/HomePage.css';
import myImage from './logo.jpg';

const HomePage = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleNextClick = () => {
        if (selectedCategory === 'School Head') {
            navigate('/school-head');
        } else if (selectedCategory === 'Grade Head') {
            navigate('/grade-head');
        } else if (selectedCategory === 'House Captain') {
            navigate('/house-captain');
        }
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
                <h1>Home Page</h1>
                <h2>Select the category to vote:</h2>
                <div class="select-container">
                    <select onChange={handleCategoryChange} className="category-select">
                        <option value="">-- Select a Category --</option>
                        <option value="School Head">School Head</option>
                        <option value="Grade Head">Grade Head</option>
                        <option value="House Captain">House Captain</option>
                    </select>
                </div>
                <button onClick={handleNextClick} className="next-button">NEXT</button>
            </div>
        </div>
    );
};

export default HomePage;
