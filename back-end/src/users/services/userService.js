const { user } = require('../../database/models');

const getUserSaleService = async () => {
    const users = await user.findAll({ where: { role: 'seller' } });

     return users;
  };

  module.exports = {
      getUserSaleService,
  };