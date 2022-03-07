const express = require('express');
const { salesController, getSaleController, 
  getSaleByIdController, updateSaleController } = require('../sales/controllers/salesController');

 const middleware = require('../middlewares');

const salesRouter = express.Router();

salesRouter.post('/', middleware.auth, salesController);
salesRouter.get('/', getSaleController);
salesRouter.get('/:id', getSaleByIdController);
salesRouter.put('/:id', updateSaleController);

module.exports = salesRouter;