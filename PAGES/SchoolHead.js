import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import './CSS/SchoolHead.css';
import myImage from './logo.jpg';

function SchoolHead({ searchText }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();  // Initialize the navigate function

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleNextClick = () => {
        if (selectedCategory === 'Captain') {
            navigate('/captain');  // Navigate to the CaptainPage
        } else if (selectedCategory === 'Vice Captain') {
            navigate('/vice-captain');  // Navigate to the ViceCaptainPage
        } else {
            alert('Please select a category first!');
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
                <h1>School Head</h1>
            </div>
            <h2>Select the category to vote:</h2>
            <div className="content">
                <select onChange={handleCategoryChange} className="category-select">
                    <option value="">-- Select a Category --</option>
                    <option value="Captain">Captain</option>
                    <option value="Vice Captain">Vice Captain</option>
                </select>
                <br />
                <button onClick={handleNextClick} className="next-button">NEXT</button>
            </div>
        </div>
    );
}

export default SchoolHead;