const orderService = require('../services');
const utils = require('../../utils');

module.exports = async (request, response, next) => {
  try {
    const { id } = request.params;

    const orders = await orderService.getOrderById(id);

    return response.status(utils.status.success).json(orders);
  } catch (error) {
    return next(error);
  }
};
