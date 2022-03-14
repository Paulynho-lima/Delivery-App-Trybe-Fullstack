const orderService = require('../services');
const utils = require('../../utils');

module.exports = async (request, response, next) => {
  try {
    const { status } = request.body;

    const { id } = request.params;

    const updateSale = await orderService.updateSaleStatus(status, id);

    return response.status(utils.status.success).json(updateSale);
  } catch (error) {
    return next(error);
  }
};
