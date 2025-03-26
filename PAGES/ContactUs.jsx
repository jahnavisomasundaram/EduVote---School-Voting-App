// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/ContactUs.css';
import myImage from './logo.jpg';
import Img1 from './Insta.png';
import Img2 from './Twitter.png';
import Img3 from './Linkedin.png';

const ContactUs = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="contactus-page">
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
            <div className="contact-us">
                <h1>Contact Us</h1>
                <h3>For any queries contact: +91 894760xxxx</h3>
                <h3>Follow us on:</h3>
            </div>
            <div className="social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={Img1} alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={Img2} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={Img3} alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default ContactUs;














/* <div className="contact-us">
    <h2>Contact Us</h2>
    <p>For any queries contact: +91 894760xxxx</p>
    <p>Follow us on:</p>
    <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-linkedin-icon.png" alt="LinkedIn" />
        </a>
    </div>
</div> */
