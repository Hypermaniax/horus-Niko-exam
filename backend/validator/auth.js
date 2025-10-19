const Joi = require("joi");

const registerSchema = Joi.object({
  username: Joi.string().required().min(5),
  password: Joi.string().required().min(5),
  email: Joi.string().required().email(),
  name: Joi.string().required(),
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const updateUserShecma = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required().email(),
  name: Joi.string().required(),
});

module.exports = { registerSchema, loginSchema, updateUserShecma };
