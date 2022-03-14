const utils = require('../../utils');
const orderService = require('../services');

module.exports = async (_request, response, next) => {
  try {
    const orders = await orderService.getAll();

    return response.status(utils.status.success).json(orders);
  } catch (error) {
    return next(error);
  }
};
