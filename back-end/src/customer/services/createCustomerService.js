const Joi = require('joi');
const helper = require('../../helpers');

const { user } = require('../../database/models');

const utils = require('../../utils');
const auth = require('../../auth/services');

const registerSchema = Joi.object({
  name: Joi.string().min(12).required().error(new Error('Invalid name entrie. Try again.')),
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

module.exports = async (customer) => {
  utils.validate(customer, registerSchema);

  const emailExists = await user.findOne({ where: { email: customer.email } });

  if (emailExists) {
    throw utils.error(utils.status.conflict, 'User already registered');
  }
  
  const encodedPassword = helper.encode(customer.password);
  
  const data = {
    name: customer.name,
    email: customer.email,
    password: encodedPassword,
    role: 'customer',
  };

  const newCostumer = await user.create(data);

  const { id, password, ...dataWithoutPassword } = newCostumer.dataValues;
  const customerData = dataWithoutPassword;

  const token = auth.generate(customerData);
  return { ...customerData, token };
};
