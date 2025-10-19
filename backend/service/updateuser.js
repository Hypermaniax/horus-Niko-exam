const { updateUser, existUpdateUser } = require("../repository/users");
const AppError = require("../utils/errorHandler");
const { updateUserShecma } = require("../validator/auth");

const updateUserById = async (id, body) => {
  const { error } = updateUserShecma.validate(body);
  if (error) {
    error.Joi = true;
    throw error;
  }
  const { email, username, name } = body;

  const exist = await existUpdateUser(id, email, username);

  if (exist) {
    throw new AppError("username or email has been taken", 409);
  }

  const user = await updateUser(id, email, username, name);
  return user;
};

module.exports = updateUserById;
