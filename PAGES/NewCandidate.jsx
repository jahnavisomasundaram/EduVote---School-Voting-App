import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/NewCandidate.css';
import axios from 'axios';
import myImage from './logo.jpg';


const NewCandidate = () => {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [searchText, setSearchText] = useState('');

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setFormData({
            ...formData,
            category,
            subCategory: '' // Reset subcategory
        });
    };
    
    const handleSubCategoryChange = (event) => {
        const subCategory = event.target.value;
        setSelectedSubCategory(subCategory);
        setFormData({
            ...formData,
            subCategory
        });
    };    

    const subCategories = {
        "School Head": ["Captain", "Vice Captain"],
        "Grade Head": ["8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade"],
        "House Captain": ["Red", "Yellow", "Blue", "Green"],
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        standard: '',
        gender: '',
        category: '',
        subCategory: ''
    });
    const [error, setError] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        setError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/candidates', formData);
            
            if (response.status === 201) {
                // Clear form
                setFormData({
                    username: '',
                    schoolId: '',
                    password: '',
                    confirmPassword: ''
                });
                navigate('/new-candidate');
                alert("New candidate added successfully");
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Candidate could not be added. Please try again.');
        }
    };

    return (
        <div className="home-page">
            <header className="header">
                <nav className="links" style={{gap:80}}>
                    <a href="/admin">LOGIN</a>
                    <a href="/new-candidate">NEW CANDIDATE</a>
                    <a href="/results">RESULTS</a>
                    <a href="/feedback">FEEDBACK</a>
                </nav>
                <div className="logo">
                    <img src={myImage} alt="Eduvote Logo" />
                </div>
            </header>

            <div className="content">
                <h1>Candidate Details</h1>
            </div>
            <div className="content1">
                <form onSubmit={handleSubmit}>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    <br /><br />
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <br /><br />
                    <label>Standard:</label>
                    <input
                        type="text"
                        name="standard"
                        value={formData.standard}
                        onChange={handleChange}
                        required
                    />
                    <br /><br />
                    <label>Gender:</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    /> Female
                    <br/><br/>
                    <label>Category:</label>
                    <select onChange={handleCategoryChange} className="category-select" value={selectedCategory}>
                        <option value="">-- Select a Category --</option>
                        <option value="School Head">School Head</option>
                        <option value="Grade Head">Grade Head</option>
                        <option value="House Captain">House Captain</option>
                    </select>
                    <br /><br />
                    {selectedCategory && (
                        <>
                            <label className="subcategory-label">Sub-Category:</label>
                            <select onChange={handleSubCategoryChange} className="subcategory-select" value={selectedSubCategory}>
                                <option value="">-- Select a Sub-Category --</option>
                                {subCategories[selectedCategory].map((subCategory, index) => (
                                    <option key={index} value={subCategory}>
                                        {subCategory}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}
                    <br/>
                    <button type="submit" className="next-button">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default NewCandidate;