const { sale } = require('../../database/models');

module.exports = async () => {
  const orders = await sale.findAll();

  return orders;
};
