const productService = require('../services');
const utils = require('../../utils');

module.exports = async (_request, response, next) => {
  try {
    const products = await productService.getAll();

    return response.status(utils.status.success).json(products);
  } catch (error) {
    return next(error);
  }
};
