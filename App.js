// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './PAGES/LoginPage';
import HomePage from './PAGES/HomePage';
import SignUpPage from './PAGES/SignUpPage';
import Admin from './PAGES/AdminPage';
import SignUpPageAdmin from './PAGES/SignUpPageAdmin';

import NewCandidate from './PAGES/NewCandidate';

import SchoolHead from './PAGES/SchoolHead';
import Captain from './PAGES/CaptainPage';
import ViceCaptain from './PAGES/ViceCaptainPage';

import GradeHead from './PAGES/GradeHeadPg';
import Grade8 from './PAGES/Grade8Pg';
import Grade9 from './PAGES/Grade9Pg';
import Grade10 from './PAGES/Grade10Pg';
import Grade11 from './PAGES/Grade11Pg';
import Grade12 from './PAGES/Grade12Pg';

import HouseCaptain from './PAGES/HouseCaptain';
import RedHouse from './PAGES/RedPage';
import YellowHouse from './PAGES/YellowPage';
import GreenHouse from './PAGES/GreenPage';
import BlueHouse from './PAGES/BluePage';
import ContactUs from './PAGES/ContactUs';

import ResultsPage from './PAGES/ResultsPage';
import FeedbackForm from './PAGES/FeedbackForm';
import AboutUs from './PAGES/AboutUs';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/home" element={<HomePage />} />

                <Route path="/signup-admin" element={<SignUpPageAdmin/>}/>
                <Route path="/admin" element={<Admin />} />


                <Route path='/school-head' element={<SchoolHead />}/>
                <Route path='/captain' element={<Captain />}/>
                <Route path='/vice-captain' element={<ViceCaptain />}/>

                <Route path="/house-captain" element={<HouseCaptain />} />
                <Route path="/yellow-house" element={<YellowHouse />} />
                <Route path="/red-house" element={<RedHouse />} />
                <Route path="/green-house" element={<GreenHouse />} />
                <Route path="/blue-house" element={<BlueHouse />} />

                <Route path="/new-candidate" element={<NewCandidate/>}/>

                <Route path="/grade-head" element={<GradeHead />} />
                <Route path="/8th" element={<Grade8 />} />
                <Route path="/9th" element={<Grade9 />} />
                <Route path="/10th" element={<Grade10 />} />
                <Route path="/11th" element={<Grade11 />} />
                <Route path="/12th" element={<Grade12 />} />

                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/results" element={<ResultsPage />} />

                <Route path="/feedback" element={<FeedbackForm />} />
                <Route path="/aboutus" element={<AboutUs/>} />



            </Routes>
        </Router>
    );
}

export default App;
