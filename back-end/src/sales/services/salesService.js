const Joi = require('joi');

const { user, sale, salesProduct, product, sequelize } = require('../../database/models');
const utils = require('../../utils');

const saleSchema = Joi.object({
    totalPrice: Joi.number().precision(2).required(),
    deliveryAddress: Joi.string().min(3).required(),
    deliveryNumber: Joi.number().min(1).required(),
    status: Joi.string().min(8).required(),
    sellerId: Joi.number().min(1).required(),
    products: Joi.array().empty().required(),
});

const Status = Joi.string().min(8).required();

const salesService = async (bodys, userId) => {
  utils.validate(bodys, saleSchema);
    const result = await sequelize.transaction(async (insertSales) => {
        const sales = await sale.create(
          { ...bodys, userId }, { transaction: insertSales },
        );
          
            const { products } = bodys;

            console.log(products.map((prot) => prot.productId));

            await Promise.all(products.map(async (product) => salesProduct.create(
        
              { saleId: sales.id, ...product },
              { transaction: insertSales },

            )));

           return sales;
    });

          return result;
};

const getSaleService = async () => {
  const sales = await sale.findAll({
    include: [
      { model: user, as: 'seller_id', attributes: { exclude: ['password'] } },
      { model: product, as: 'products', though: { attributes: [] } },
    ],
  });
   return sales;
};

const getSaleBayIdService = async (id) => {
  const salesId = await sale.findOne({ where: { id },
     include: [
      { model: user, as: 'seller_id', attributes: { exclude: ['password'] } },
       { model: product, as: 'products', though: { attributes: [] } },
     ],
  });
      return salesId;
};

const updateSaleService = async (status, id) => {
  utils.validate(status, Status);

  await sale.update({ status }, { where: { id } });

  const saleUpdate = await getSaleBayIdService(id);

  return saleUpdate;
};

module.exports = {
    salesService,
    getSaleService,
    getSaleBayIdService,
    updateSaleService,
};
