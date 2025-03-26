// src/components/MainPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/GradeHead.css';
import myImage from './logo.jpg';

function GradeHead() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Navigate to another page based on selected category
    const handleNextClick = () => {
        if (selectedCategory === '8th') {
            navigate('/8th');
        } else if (selectedCategory === '9th') {
            navigate('/9th');
        }
        else if (selectedCategory === '10th') {
            navigate('/10th');
        }
        else if (selectedCategory === '11th') {
            navigate('/11th');
        }
        else if (selectedCategory === '12th') {
            navigate('/12th');
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
                <h1><big>Grade Head</big></h1>
                <h2>Select the category to vote:</h2>
                <div class="select-container">
                    <select onChange={handleCategoryChange} className="category-select">
                        <option value="">-- Select a Category --</option>
                        <option value="8th">8th Grade</option>
                        <option value="9th">9th Grade</option>
                        <option value="10th">10th Grade</option>
                        <option value="11th">11th Grade</option>
                        <option value="12th">12th Grade</option>
                    </select>
                </div>
                <button onClick={handleNextClick} className="next-button">NEXT</button>
            </div>
        </div>
    );
}

export default GradeHead;
