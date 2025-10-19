const db = require("../config/db");

const existDB = async (email, username) => {
  const result = await db("users")
    .where("email", email)
    .orWhere("username", username)
    .count("* as count")
    .first();

  return result.count > 0;
};

const createUserDB = async (username, password, email, nama) => {
  const [user] = await db("users")
    .insert({ username, password, email, nama })
    .returning(["id", "username", "email"]);

  return user;
};

const getUserByCredentialsDB = async (username) => {

  return await db("users")
    .select("username", "password", "nama")
    .where({ username })
    .first();
};

const getAllUser = async () => {
  return await db("users").select(
    "id",
    "username",
    "email",
    "nama",
    "created_at"
  );
};

const existUpdateUser = async (id, email, username) => {
  const result = await db("users")
    .where(function () {
      this.where("email", email).orWhere("username", username);
    })
    .andWhereNot("id", id)
    .count("* as count")
    .first();

  return result.count > 0;
};

const updateUser = async (id, email, username, nama) => {
  return await db("users").where({ id }).update({ username, nama, email });
};

const deleteUser = async (id) => {
  return await db("users").where({ id }).del();
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
