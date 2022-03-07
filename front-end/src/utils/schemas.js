const Joi = require('joi');

const MIN_PASSWORD_LENGTH = 6;
const MIN_FULLNAME_LENGTH = 12;

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(MIN_PASSWORD_LENGTH).required(),
});

const registerSchema = Joi.object({
  name: Joi.string().min(MIN_FULLNAME_LENGTH).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(MIN_PASSWORD_LENGTH).required(),
});

module.exports = {
  loginSchema,
  registerSchema,
};
