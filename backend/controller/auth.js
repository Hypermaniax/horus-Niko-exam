const deleteUserByid = require("../service/deleteUser");
const getusers = require("../service/getUsers");
const LoginUser = require("../service/login");
const createUser = require("../service/register");
const updateUserById = require("../service/updateuser");

const register = async (req, res, next) => {
  try {
    await createUser(req.body || {});
    return res.status(201).json({ message: "Registrasi berhasil" });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await LoginUser(req.body || {});
    res.cookie("token", result, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 5 * 60 * 60 * 1000,
    });
    return res.status(200).json({ message: "Login berhasil", token: result });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await getusers();
    return res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 0);
    await updateUserById(id, req.body || {});
    return res.status(200).json({ message: "Data user berhasil diperbarui" });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await deleteUserByid(req.params.id);
    return res.status(200).json({ message: "User berhasil dihapus" });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    return res.status(200).json({ user: req.user });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getAllUsers, updateUser, deleteUser, getMe };
