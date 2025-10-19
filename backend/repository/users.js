const pool = require("../config/db");

const existDB = async (email, username) => {
  const query = `
    SELECT username,email from users WHERE username = $1 OR email = $2;
    `;
  const value = [username, email];

  const result = await pool.query(query, value);

  return result.rowCount;
};

const createUserDB = async (username, password, email, name) => {
  const query = `
  INSERT INTO users (username, password, email, nama)
  VALUES ($1, $2, $3, $4) RETURNING username ;
  `;
  const value = [username, password, email, name];
  const result = await pool.query(query, value);

  return result.rows;
};

const getUserByCredentialsDB = async (username) => {
  const query = `
  SELECT username,password,nama FROM users 
  WHERE username = $1 
  LIMIT 1; 
  `;
  const value = [username];

  const result = await pool.query(query, value);
  return result.rows[0];
};

const getAllUser = async () => {
  const query = `
  SELECT id, username, email, nama, created_at
  FROM users;
  `;

  const result = await pool.query(query);

  return result.rows;
};

const existUpdateUser = async (id, email, username) => {
  const query = `
  select * from users
  WHERE (email = $1 OR username=$2) AND id != $3;
  `;
  const value = [email, username, id];

  const result = await pool.query(query, value);

  return result.rowCount > 0;
};

const updateUser = async (id, email, username, name) => {
  const query = `
  UPDATE users
  SET username = $1, nama = $2 ,email = $3
  WHERE id = $4;
  `;

  const value = [username, name, email, id];

  const result = await pool.query(query, value);

  return result.rowCount;
};

const deleteUser = async (id) => {
  const query = `
  DELETE FROM users WHERE id = $1
  `;
  const value = [id];
  const result = await pool.query(query, value);

  return result.rowCount;
};

module.exports = {
  createUserDB,
  existDB,
  getUserByCredentialsDB,
  getAllUser,
  updateUser,
  existUpdateUser,
  deleteUser,
};
