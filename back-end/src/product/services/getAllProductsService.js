const { product } = require('../../database/models');

module.exports = async () => {
  const products = await product.findAll();

  return products;
};
