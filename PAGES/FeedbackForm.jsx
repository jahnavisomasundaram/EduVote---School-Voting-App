import React, { useState } from 'react';
import myImage from './logo.jpg';
import "./CSS/NewCandidate.css"

const FeedbackForm = () => {

  return (
    <div className="feedback-container">
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
      <form>
        <h1>FEEDBACK</h1>
        <div className="content">
          <h2 style={{marginTop:'-50px'}}>Name:</h2>
          <input style={{  display: 'block',Align:'left',marginLeft:'220px',fontSize:'25px', marginTop:'-75px'}}
            type="text"
            name="name"
            required
          />
        </div>
        <div className="content">
          <h2>Email:</h2>
          <input style={{  display: 'block',Align:'left',marginLeft:'220px',fontSize:'25px', marginTop:'-75px'}}
            type="email"
            name="email"
            required
          />
        </div>
        <div className="content">
          <h2>What is your opinion about</h2>
          <div className="ratings-group">
            <p style={{ textAlign: 'left',marginLeft:'300px',fontSize:'20px' }}>Ease of Navigation</p>
            {['Very Good', 'Good', 'Satisfactory', 'Poor'].map((option) => (
              <label key={`navigation-${option}`}>
                <input
                  type="radio"
                  name="navigation"  
                />
                {option}
              </label>
            ))}
          </div>
          <div className="ratings-group">
            <p style={{ textAlign: 'left',marginLeft:'300px',fontSize:'20px'}}>Voting Process</p>
            {['Very Good', 'Good', 'Satisfactory', 'Poor'].map((option) => (
              <label key={`voting-${option}`}>
                <input
                  type="radio"
                  name="voting"      
                            
                />
                {option}
              </label>
            ))}
          </div>
          <div className="ratings-group">
            <p style={{ textAlign: 'left',marginLeft:'300px',fontSize:'20px'}} >Overall Experience</p>
            {['Very Good', 'Good', 'Satisfactory', 'Poor'].map((option) => (
              <label key={`experience-${option}`}>
                <input
                  type="radio"
                  name="experience"                
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
