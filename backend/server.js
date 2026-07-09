import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import pool from './db.js';
import bcrypt from 'bcrypt';


const app = express();

app.use(cors());
// Enable CORS for all routes: without this, browser blocks requests from React app

app.use(express.json());
// Parse incoming JSON request bodies into req.body (needed for POST/PUT requests)

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

const PORT = process.env.PORT || 5001;
// Get the port from .env, or default to 5000 if not set

// Start the server, listening for incoming requests on this port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});