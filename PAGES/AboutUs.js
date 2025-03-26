import React, { useState } from 'react';
import myImage from './logo.jpg';

const AboutUs = () => {
    const [searchText, setSearchText] = useState('');

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
                <h1>About Us</h1>
                <div style={{
                    padding: '20px',
                    border: '2px solid #603f26',
                    borderRadius: '8px',
                    backgroundColor: '#f7eed3',
                    maxWidth: '600px',
                    margin: '20px auto',
                    fontSize: '25px'
                }}>
                    <p>The website is a platform for schools to run elections where students can vote for leaders like captains, vice-captains, grade heads, and house captains. It makes the voting process easy and secure for students and gives school admins the tools to manage and oversee the elections smoothly. This helps promote leadership and student involvement in a fair way.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;