const { sale, product } = require('../../database/models');

module.exports = async (id) => {
  const orders = await sale.findAll({
     where: { userId: id }, 
     include: [{
      model: product, as: 'products', through: { attributes: ['quantity'], as: 'quantityTotal' },
    }] });

  return orders;
};
