const knex = require("knex");
const config = require("../knexfile");

const db = knex(config.development);

db.raw("SELECT 1")
  .then(() => console.log("DB connected successfully (Knex)"))
  .catch((err) => console.error("DB connection failed:", err.message));

module.exports = db;
