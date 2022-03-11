const { sale } = require('../../database/models');

module.exports = async (status, id) => {
  const updateSale = await sale.update(
    { status },
    { where: { id } },
  );

  return updateSale;
};
