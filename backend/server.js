import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import pool from './db.js'


const app = express();

app.use(cors());
// Enable CORS for all routes: without this, browser blocks requests from React app

app.use(express.json());
// Parse incoming JSON request bodies into req.body (needed for POST/PUT requests)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5001;
// Get the port from .env, or default to 5000 if not set

// Start the server, listening for incoming requests on this port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});