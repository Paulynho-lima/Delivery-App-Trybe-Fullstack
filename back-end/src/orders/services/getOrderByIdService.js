const { sale, product } = require('../../database/models');

module.exports = async (id) => {
  const orders = await sale.findAll({
     where: { id }, 
     include: 
    { model: product, as: 'products', through: { attributes: ['quantity'], as: 'quantity' } },
     });

  return orders[0];
};
