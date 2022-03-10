const orderService = require('../services');
const utils = require('../../utils');

module.exports = async (_request, response, next) => {
  try {
    const orders = await orderService.getAll();

    return response.status(utils.status.success).json(orders);
  } catch (error) {
    return next(error);
  }
};
