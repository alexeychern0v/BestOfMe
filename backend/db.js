import { Pool } from 'pg';
import 'dotenv/config';

// Create a pool of connections using the DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10, // maximum number of simultaneous connections in the pool
});

export default pool;