const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: null,
  port: process.env.DB_PORT,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log("✅ DB connected successfully");
    client.release(); // lepas ke pool biar gak nyangkut
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
  }
})();

module.exports = pool;
