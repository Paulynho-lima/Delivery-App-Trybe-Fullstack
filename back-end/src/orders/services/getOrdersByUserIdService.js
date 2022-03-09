const { sale } = require('../../database/models');

module.exports = async (id) => {
  const orders = await sale.findAll({ where: { id } });

  return orders;
};
