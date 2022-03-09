const Joi = require('joi');
const helper = require('../../helpers');

const { user } = require('../../database/models');

const utils = require('../../utils');
const auth = require('../../auth/services');

const loginSchema = Joi.object({
  email: Joi.string().email().required().error(
    (errors) => {
      let errMsg = '';
      errors.forEach((err) => {
        switch (err.code) {
          case 'string.empty':
            errMsg = '"email" is not allowed to be empty';
            break;
          case 'any.required':
            errMsg = '"email" is required';
            break;
          default:
            errMsg = 'Invalid entries. Try again.';
        }
      });
      return new Error(errMsg);
    },
  ),
  password: Joi.string().required().error(
    (errors) => {
      let errMsg = '';
      errors.forEach((err) => {
        switch (err.code) {
          case 'string.empty':
            errMsg = '"password" is not allowed to be empty';
            break;
          case 'any.required':
            errMsg = '"password" is required';
            break;
          default:
            errMsg = 'Invalid entries. Try again.';
        }
      });
      return new Error(errMsg);
    },
  ),
});

module.exports = async (loginData) => {
  utils.validate(loginData, loginSchema);

  const encodedPassword = helper.encode(loginData.password);
  
  const loggedUser = await user.findOne({ where: { email: loginData.email } });
  
  if (!loggedUser || loggedUser.password !== encodedPassword) {
    throw utils.error(utils.status.notFound, 'Invalid fields');
  }

  const { password, ...dataWithoutPassword } = loggedUser.dataValues;
  const userData = dataWithoutPassword;

  const token = await auth.generate(userData);
  return { ...userData, token };
};
