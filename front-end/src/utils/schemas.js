const Joi = require('joi');

const MIN_PASSWORD_LENGTH = 6;

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(MIN_PASSWORD_LENGTH).required(),
});

module.exports = {
  loginSchema,
};
