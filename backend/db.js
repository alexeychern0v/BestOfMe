import pg from 'pg';
import { Pool } from 'pg';
import 'dotenv/config';

// By default, node-postgres parses DATE columns into JS Date objects using
// the server's local timezone, which causes off-by-one-day bugs when that
// Date is later converted back via toISOString() (which uses UTC).
// Fix: tell pg to return DATE columns as raw 'YYYY-MM-DD' strings instead —
// no timezone conversion involved at all, since our dates have no time component.
pg.types.setTypeParser(1082, (val) => val); // 1082 = OID for the DATE type


// Create a pool of connections using the DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10, // maximum number of simultaneous connections in the pool
});

export default pool;