// Import the Pool class from the pg (node-postgres) library
// Pool = manages multiple simultaneous connections to PostgreSQL
import { Pool } from 'pg';
import 'dotenv/config';

// Create a pool of connections using the DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10, // maximum number of simultaneous connections in the pool
});

// Export the pool so other files (like server.js) can use it to query the database
export default pool