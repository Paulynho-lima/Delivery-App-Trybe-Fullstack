const utils = require('../../utils');
const { sale } = require('../../database/models');
const { salesService, getSaleService, getSaleBayIdService,
    updateSaleService } = require('../services/salesService');

const salesController = async (req, res, next) => {
    try {
      const bodySales = req.body;
      const { id } = req.user;

      const newSales = await salesService(bodySales, id);
    
      return res.status(utils.status.created).json(newSales);
    } catch (error) {
        console.log(`POST CREATESALES: ${error.message}`);
        return next(error);
    }
};

const getSaleController = async (_req, res, next) => {
    try {
        const sales = await getSaleService();
        
        return res.status(utils.status.success).json(sales);
    } catch (error) {
        console.log(`POST GETSALES: ${error.message}`);
        return next(error);
    }
};

const getSaleByIdController = async (req, res, next) => {
    try {
        const { id } = req.params; 

        const salesId = await getSaleBayIdService(id);

        const idSale = await sale.findOne({ where: { id } });

        if (!idSale) {
          return res.status(utils.status.notFound).json({ message: ' "id" not found' });
        }

        return res.status(utils.status.success).json(salesId);
    } catch (error) {
        console.log(`POST GETSALESBYID: ${error.message}`);
        return next(error);
    }
};

const updateSaleController = async (req, res, next) => {
  try {
      const { id } = req.params;
      const { status } = req.body;
       
      const sales = await updateSaleService(status, id);

      const idSale = await sale.findOne({ where: { id } });

      if (!idSale) {
        return res.status(utils.status.notFound).json({ message: ' "id" not found' });
      }

      return res.status(utils.status.success).json(sales);
  } catch (error) {
    console.log(`POST UPDATESALESBYID: ${error.message}`);
    return next(error);
}
};

module.exports = {
    salesController,
    getSaleController,
    getSaleByIdController,
    updateSaleController,
};