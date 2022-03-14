const { user } = require('../../database/models');

const getUserSaleService = async () => {
    const users = await user.findAll({ where: { role: 'seller' } });

     return users;
  };

const getSellerById = async (id) => {
const seller = await user.findOne({ where: { id } });

return seller;
};

  module.exports = {
      getUserSaleService,
      getSellerById,
  };