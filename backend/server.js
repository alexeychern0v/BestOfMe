import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import pool from './db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyToken } from './middleware/auth.js';


const app = express();

// Enable CORS for all routes: without this, browser blocks requests from React app
app.use(cors());

// Parse incoming JSON request bodies into req.body (needed for POST/PUT requests)
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// POST /api/register - creates a new user account
app.post('/api/register', async(req, res) => {
    const { email, password } = req.body;

    try {
        // 1: check if email already exists
        const existingUser = await pool.query(
            'SELECT id FROM users WHERE email = $1',
            [email]
        );

        if (existingUser.rows.length > 0) {
            // If Email taken, reject immediately with 409 error
            return res.status(409).json({ error: 'Email already registered!'});
        };

        // 2: hash the password
        const passwordHash = await bcrypt.hash(password, 10);

        // 3: insert new user to the DB
        const newUser = await pool.query(
            'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email',
            [email, passwordHash]
        );

        res.status(201).json({ user: newUser.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    };

});

// POST /api/login - authenticates user and returns a JWT token
app.post('/api/login', async(req, res) => {
    const { email, password } = req.body
    
    try {
        // 1: find user by email
        const result = await pool.query(
            'SELECT id, email, password_hash FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            // No user found - don't reveal whether it's the email or password that's wrong
            return res.status(401).json({ error: 'Invalid email or password' })
        };

        const user = result.rows[0];
        // 2: compare plain password with stored hash
        const passwordsMatch = await bcrypt.compare(password, user.password_hash);

        if (!passwordsMatch) {
            return res.status(401).json({ error: 'Invalid email or password' })
        };

        // 3: password correct - generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({ token });
    } catch(err) {
        console.error(err)
        res.status(500).json({ error: 'Server error'})
    }
});

// Test middleware protection
app.get('/api/test', verifyToken, (req, res) => {
    res.json({
        message: 'Access granted!',
        userId: req.userId
    });
});

// Get the port from .env, or default to 5001 if not set
const PORT = process.env.PORT || 5001;

// Start the server, listening for incoming requests on this port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});