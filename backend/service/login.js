const { compare } = require("bcrypt");
const { getUserByCredentialsDB } = require("../repository/users");
const AppError = require("../utils/errorHandler");
const { loginSchema } = require("../validator/auth");
const { generateJWT } = require("../utils/jwt");

const LoginUser = async (body) => {
  const { error } = loginSchema.validate(body);
  if (error) {
    error.Joi = true;
    throw error;
  }
  const { username, password } = body;

  const user = await getUserByCredentialsDB(username);

  if (!user) {
    throw new AppError("username or password wrong", 401);
  }

  const comparePassword = await compare(password, user.password);
  if (!comparePassword) {
    throw new AppError("username or password wrong", 401);
  }

  const safeUser = {
    username: user.username,
    nama: user.nama,
  };

  const token = generateJWT(safeUser)

  return token;
};

module.exports = LoginUser;
