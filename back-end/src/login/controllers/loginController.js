const utils = require('../../utils');
const loginService = require('../services/loginService');

module.exports = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    const token = await loginService({ email, password });

    return response.status(utils.status.success).json(token);
  } catch (error) {
    return next(error);
  }
};
