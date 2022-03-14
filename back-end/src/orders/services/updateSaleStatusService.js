const { sale } = require('../../database/models');

module.exports = async (status, id) => {
  await sale.update(
    { status },
    { where: { id } },
  );

  const updateSale = await sale.findOne({ where: { id } });

  return updateSale;
};
