const { createUserDB, existDB } = require("../repository/users");
const { hash } = require("../utils/bcrypt");
const AppError = require("../utils/errorHandler");
const { registerSchema } = require("../validator/auth");

const createUser = async (body) => {
  const { error } = registerSchema.validate(body);
  if (error) {
    error.Joi = true;
    throw error;
  }

  let { password, username, name, email } = body;

  const exist = await existDB(email, username);
  if (exist) {
    throw new AppError("username or email has been taken", 409);
  }

  const hashPassword = await hash(password);

  const users = await createUserDB(username, hashPassword, email, name);

  return users;
};

module.exports = createUser;
