//server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Configuration
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'eduvote';
let db;

// Connect to MongoDB
MongoClient.connect(mongoURI)
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db(dbName);
    })
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// API Route for Register
app.post('/api/register', async (req, res) => {
    const { username, schoolId, password } = req.body;

    if (!username || !schoolId || !password) {
        return res.status(400).json({ 
            message: 'All fields are required!' 
        });
    }

    try {
        // Check for existing user
        const existingUser = await db.collection('users').findOne({ schoolId });
        if (existingUser) {
            return res.status(400).json({ 
                message: 'User with this School ID already exists!' 
            });
        }
        
        // Create new user
        const newUser = { 
            username, 
            schoolId, 
            password,  // Note: In a production environment, you should never store plain-text passwords
            createdAt: new Date()
        };

        await db.collection('users').insertOne(newUser);
        
        res.status(201).json({ 
            message: 'User registered successfully' 
        });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ 
            message: 'Error registering user. Please try again.' 
        });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and password are required!'
        });
    }

    try {
        const user = await db.collection('users').findOne({ username });

        // Check if user exists
        if (!user) {
            return res.status(401).json({
                message: 'Invalid username or password'
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: 'Invalid username or password'
            });
        }

        res.json({
            message: 'Login successful',
            user: {
                username: user.username,
                schoolId: user.schoolId,
                id: user._id
            }
        });

    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({
            message: 'Error during login. Please try again.'
        });
    }
});

app.post('/api/register1', async (req, res) => {
    const { username, adminId, password } = req.body;

    if (!username || !adminId || !password) {
        return res.status(400).json({ 
            message: 'All fields are required!' 
        });
    }

    try {
        // Check for existing user
        const existingAdmin = await db.collection('admin').findOne({ adminId });
        if (existingAdmin) {
            return res.status(400).json({ 
                message: 'User with this School ID already exists!' 
            });
        }
        
        // Create new user
        const newAdmin = { 
            username, 
            adminId, 
            password,  // Note: In a production environment, you should never store plain-text passwords
            createdAt: new Date()
        };

        await db.collection('admin').insertOne(newAdmin);
        
        res.status(201).json({ 
            message: 'User registered successfully' 
        });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ 
            message: 'Error registering user. Please try again.' 
        });
    }
});

app.post('/api/login1', async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and password are required!'
        });
    }

    try {
        const user = await db.collection('admin').findOne({ username });

        // Check if user exists
        if (!user) {
            return res.status(401).json({
                message: 'Invalid username or password'
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: 'Invalid username or password'
            });
        }

        res.json({
            message: 'Login successful',
            user: {
                username: user.username,
                adminId: user.adminId,
                id: user._id
            }
        });

    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({
            message: 'Error during login. Please try again.'
        });
    }
});

app.post('/api/candidates', async (req, res) => {
    const { firstName, lastName, standard, gender, category, subCategory } = req.body;

    if (!firstName || !lastName || !standard || !gender || !category || !subCategory) {
        return res.status(400).json({ 
            message: 'All fields are required!' 
        });
    }

    try {
        const newCandidate = {
            firstName,
            lastName,
            standard,
            gender,
            category,
            subCategory,
            votes: 0,
            createdAt: new Date()
        };

        await db.collection('candidates').insertOne(newCandidate);
        
        res.status(201).json({ 
            message: 'Candidate registered successfully' 
        });
    } catch (err) {
        console.error('Error registering candidate:', err);
        res.status(500).json({ 
            message: 'Error registering candidate. Please try again.' 
        });
    }
});

//For increasing no. of votes
app.post('/api/vote/:candidateId', async (req, res) => {
    const { candidateId } = req.params;

    try {
        const result = await db.collection('candidates').updateOne(
            { _id: new ObjectId(candidateId) },
            { $inc: { votes: 1 } } 
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({
                message: 'Candidate not found or no updates made.'
            });
        }

        res.status(200).json({
            message: 'Vote recorded successfully'
        });
    } catch (err) {
        console.error('Error updating votes:', err);
        res.status(500).json({
            message: 'Error recording vote. Please try again.'
        });
    }
});

// Grade 8
app.get('/api/candidates/grade8', async (req, res) => {
    try {
        const grade8Candidates = await db.collection('candidates')
            .find({ 
                category: 'Grade Head',
                subCategory: '8th Grade'
            })
            .toArray();
        
        res.json(grade8Candidates);
    } catch (err) {
        console.error('Error fetching grade8 house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

// Grade 9
app.get('/api/candidates/grade9', async (req, res) => {
    try {
        const grade9Candidates = await db.collection('candidates')
            .find({ 
                category: 'Grade Head',
                subCategory: '9th Grade'
            })
            .toArray();
        
        res.json(grade9Candidates);
    } catch (err) {
        console.error('Error fetching grade9 house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

// Grade 10
app.get('/api/candidates/grade10', async (req, res) => {
    try {
        const grade10Candidates = await db.collection('candidates')
            .find({ 
                category: 'Grade Head',
                subCategory: '10th Grade'
            })
            .toArray();
        
        res.json(grade10Candidates);
    } catch (err) {
        console.error('Error fetching grade10 house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

// Grade 11
app.get('/api/candidates/grade11', async (req, res) => {
    try {
        const grade11Candidates = await db.collection('candidates')
            .find({ 
                category: 'Grade Head',
                subCategory: '11th Grade'
            })
            .toArray();
        
        res.json(grade11Candidates);
    } catch (err) {
        console.error('Error fetching grade11 house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

// Grade 12
app.get('/api/candidates/grade12', async (req, res) => {
    try {
        const grade12Candidates = await db.collection('candidates')
            .find({ 
                category: 'Grade Head',
                subCategory: '12th Grade'
            })
            .toArray();
        
        res.json(grade12Candidates);
    } catch (err) {
        console.error('Error fetching grade12 house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

//Blue
app.get('/api/candidates/blue', async (req, res) => {
    try {
        const blueCandidates = await db.collection('candidates')
            .find({ 
                category: 'House Captain',
                subCategory: 'Blue'
            })
            .toArray();
        
        res.json(blueCandidates);
    } catch (err) {
        console.error('Error fetching blue house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

app.get('/api/candidates/yellow', async (req, res) => {
    try {
        const yellowCandidates = await db.collection('candidates')
            .find({ 
                category: 'House Captain',
                subCategory: 'Yellow'
            })
            .toArray();
        
        res.json(yellowCandidates);
    } catch (err) {
        console.error('Error fetching yellow house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

app.get('/api/candidates/red', async (req, res) => {
    try {
        const redCandidates = await db.collection('candidates')
            .find({ 
                category: 'House Captain',
                subCategory: 'Red'
            })
            .toArray();
        
        res.json(redCandidates);
    } catch (err) {
        console.error('Error fetching red house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

app.get('/api/candidates/green', async (req, res) => {
    try {
        const greenCandidates = await db.collection('candidates')
            .find({ 
                category: 'House Captain',
                subCategory: 'Green'
            })
            .toArray();
        
        res.json(greenCandidates);
    } catch (err) {
        console.error('Error fetching green house candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

app.get('/api/candidates/captain', async (req, res) => {
    try {
        const blueCandidates = await db.collection('candidates')
            .find({ 
                category: 'School Head',
                subCategory: 'Captain'
            })
            .toArray();
        
        res.json(blueCandidates);
    } catch (err) {
        console.error('Error fetching Captain candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

app.get('/api/candidates/vicecaptain', async (req, res) => {
    try {
        const blueCandidates = await db.collection('candidates')
            .find({ 
                category: 'School Head',
                subCategory: 'Vice Captain'
            })
            .toArray();
        
        res.json(blueCandidates);
    } catch (err) {
        console.error('Error fetching ViceCaptain candidates:', err);
        res.status(500).json({ 
            message: 'Error fetching candidates. Please try again.' 
        });
    }
});

app.get('/api/results', async (req, res) => {
    try {
        // Get winners for School Head positions
        const captainWinner = await db.collection('candidates')
            .find({ category: 'School Head', subCategory: 'Captain' })
            .sort({ votes: -1 })
            .limit(1)
            .toArray();

        const viceCaptainWinner = await db.collection('candidates')
            .find({ category: 'School Head', subCategory: 'Vice Captain' })
            .sort({ votes: -1 })
            .limit(1)
            .toArray();

        // Get winners for House Captain positions
        const blueHouseWinner = await db.collection('candidates')
            .find({ category: 'House Captain', subCategory: 'Blue' })
            .sort({ votes: -1 })
            .limit(1)
            .toArray();

        //yellow house winners
        const yellowHouseWinner = await db.collection('candidates')
            .find({ category: 'House Captain', subCategory: 'Yellow' })
            .sort({ votes: -1 })
            .limit(1)
            .toArray();

        //Green House winners
        const greenHouseWinner = await db.collection('candidates')
            .find({ category: 'House Captain', subCategory: 'Green' })
            .sort({ votes: -1 })
            .limit(1)
            .toArray();

        //Red House winners
        const redHouseWinner = await db.collection('candidates')
            .find({ category: 'House Captain', subCategory: 'Red' })
            .sort({ votes: -1 })
            .limit(1)
            .toArray();


        // Get winners for Grade Heads
        const gradeHeadWinners = await Promise.all(
            ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'].map(async (grade) => {
                const winner = await db.collection('candidates')
                    .find({ category: 'Grade Head', subCategory: grade })
                    .sort({ votes: -1 })
                    .limit(1)
                    .toArray();
                return winner[0];
            })
        );

        const results = {
            schoolHeads: {
                captain: captainWinner[0],
                viceCaptain: viceCaptainWinner[0]
            },
            houseCaptains: {
                blue: blueHouseWinner[0],
                yellow: yellowHouseWinner[0],
                green: greenHouseWinner[0],
                red: redHouseWinner[0]

            },
            gradeHeads: gradeHeadWinners
        };

        res.json(results);
    } catch (err) {
        console.error('Error fetching results:', err);
        res.status(500).json({
            message: 'Error fetching results. Please try again.'
        });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});