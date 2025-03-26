import React, { useState, useEffect } from 'react';
import myImage from './logo.jpg';

const ResultsPage = () => {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/results')
            .then(res => res.json())
            .then(data => {
                setResults(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch results');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading results...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div>
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
            <h1 style={{marginBottom:"0px"}}>Election Results</h1>

            {/* School Heads Section */}
            <div className="content">
                <h2>School Heads</h2>
                <div>
                    {results?.schoolHeads?.captain && (
                        <div>
                            <h3 style={{textAlign:"left",marginLeft:"400px",marginBottom:"0px"}}>School Captain:</h3>
                            <p style={{textAlign:"left", marginLeft:"400px",marginTop:"10px"}}>Name: {results.schoolHeads.captain.firstName} {results.schoolHeads.captain.lastName}</p>
                            <p style={{textAlign:"left", marginLeft:"400px",marginTop:"10px"}}>Votes: {results.schoolHeads.captain.votes}</p>
                        </div>
                    )}
                    {results?.schoolHeads?.viceCaptain && (
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 style={{textAlign:"left",marginLeft:"800px",marginBottom:"0px",marginTop:"-120px"}}>Vice Captain:</h3>
                            <p style={{textAlign:"left", marginLeft:"800px",marginTop:"10px"}}>Name: {results.schoolHeads.viceCaptain.firstName} {results.schoolHeads.viceCaptain.lastName}</p>
                            <p style={{textAlign:"left", marginLeft:"800px",marginTop:"10px"}}>Votes: {results.schoolHeads.viceCaptain.votes}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* House Captains Section */}
            <div className="content">
                <h2>House Captains</h2>
                {results?.houseCaptains?.blue && (
                    <div>
                        <h3 style={{textAlign:"left",marginLeft:"400px",marginBottom:"0px"}}>Blue House Captain:</h3>
                        <p style={{textAlign:"left", marginLeft:"400px",marginTop:"10px"}}>Name: {results.houseCaptains.blue.firstName} {results.houseCaptains.blue.lastName}</p>
                        <p style={{textAlign:"left", marginLeft:"400px",marginTop:"10px"}}>Votes: {results.houseCaptains.blue.votes}</p>
                    </div>
                )}

                {results?.houseCaptains?.yellow && (
                     <div className="bg-gray-50 p-6 rounded-lg">
                     <h3 style={{textAlign:"left",marginLeft:"800px",marginBottom:"0px",marginTop:"-120px"}}>Yellow House Captain:</h3>
                     <p style={{textAlign:"left", marginLeft:"800px",marginTop:"10px"}}>Name: {results.houseCaptains.yellow.firstName} {results.houseCaptains.blue.lastName}</p>
                     <p style={{textAlign:"left", marginLeft:"800px",marginTop:"10px"}}>Votes: {results.houseCaptains.yellow.votes}</p>
                 </div>
                )}

                {results?.houseCaptains?.green && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 style={{textAlign:"left",marginLeft:"400px",marginBottom:"0px"}}>Green House Captain:</h3>
                    <p style={{textAlign:"left", marginLeft:"400px",marginTop:"10px"}}>Name: {results.houseCaptains.green.firstName} {results.houseCaptains.blue.lastName}</p>
                    <p style={{textAlign:"left", marginLeft:"400px",marginTop:"10px"}}>Votes: {results.houseCaptains.green.votes}</p>
                </div>
            )}

                {results?.houseCaptains?.red && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 style={{textAlign:"left",marginLeft:"800px",marginBottom:"0px",marginTop:"-120px"}}>Red House Captain:</h3>
                    <p style={{textAlign:"left", marginLeft:"800px",marginTop:"10px"}}>Name: {results.houseCaptains.red.firstName} {results.houseCaptains.blue.lastName}</p>
                    <p style={{textAlign:"left", marginLeft:"800px",marginTop:"10px"}}>Votes: {results.houseCaptains.red.votes}</p>
                </div>
               )}
            </div>

            {/* Grade Heads Section */}
            <div className="content">
                <h2>Grade Heads</h2>
                <div>
                    {results?.gradeHeads?.map((head, index) => (
                        head && (
                            <div key={index}>
                                <h3 style={{textAlign:"left",marginLeft:"400px",marginBottom:"0px"}}>{head.subCategory} Head:</h3>
                                <p style={{textAlign:"left", marginLeft:"400px",marginTop:"10px"}}>Name: {head.firstName} {head.lastName}</p>
                                <p style={{textAlign:"left", marginLeft:"400px",marginTop:"10px"}}>Votes: {head.votes}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;