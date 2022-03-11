const { sale} = require('../../database/models');

module.exports = async (id) => {
  const orders = await sale.findOne({ where: { id } });

  return orders;
};
