const utils = require('../../utils');
const createCustomerService = require('../services/createCustomerService');

module.exports = async (request, response, next) => {
  try {
    const { name, email, password } = request.body;

    const customer = await createCustomerService({ name, email, password });

    return response.status(utils.status.created).json(customer);
  } catch (error) {
    return next(error);
  }
};
