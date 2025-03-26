import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/captains.css';
import myImage from './logo.jpg';
import axios from "axios";

function ViceCaptain() {
    const navigate = useNavigate();
    const [candidates, setCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchText(""); // Clear the search text
    };

    const handleVote = async() => {
        if (!selectedCandidate) {
            alert("Please select a candidate first!");
            return;
        }

        try{
            const response = await axios.post(`http://localhost:5000/api/vote/${selectedCandidate._id}`,{});
            alert("Voted Successfully");
            navigate("/home")
        }
        catch(err)
        {
            alert("Voting Not successful");
        }
    };


    useEffect(() => {
        fetchViceCaptainCandidates();
    }, []);

    const fetchViceCaptainCandidates = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/candidates/vicecaptain");
            const data = await response.json();
            setCandidates(data);
        } catch {
            setCandidates([]); // If there's an error, set an empty list
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
                <h2>Vice Captain:</h2>
                
            {candidates.length === 0 ? (
                    <p>No candidates found for Captain</p>
                ) : (
                    <div className="candidates-list">
                        {candidates.map((candidate) => (
                            <div
                                key={candidate._id}
                                className={`candidate-card ${candidate === selectedCandidate ? "selected" : ""}`}
                                onClick={() => setSelectedCandidate(candidate)}>
                                <h3>
                                    {candidate.firstName} {candidate.lastName}
                                </h3>
                                <p>Standard: {candidate.standard}</p>
                                <p>Gender: {candidate.gender}</p>
                            </div>
                        ))}
                    </div>
                )}

                <button  onClick={handleVote}
                    className="next-button"
                    disabled={!selectedCandidate}>VOTE</button>
            </div>
        </div>
    );
}

export default ViceCaptain;