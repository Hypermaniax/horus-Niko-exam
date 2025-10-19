const express = require("express");
const {
  register,
  login,
  getAllUsers,
  updateUser,
  deleteUser,
  getMe,
} = require("../controller/auth");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.get("/me", verifyToken, getMe);
router.post("/register", register);
router.post("/login", login);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
