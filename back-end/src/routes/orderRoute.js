const express = require('express');
const orderController = require('../order/controllers');
const middleware = require('../middlewares');

const orderRouter = express.Router();

orderRouter.use(middleware.auth);
orderRouter.get('/', orderController.getAll);
orderRouter.get('/customer/:id', orderController.getOrdersByUserId);
orderRouter.get('/customer/order/:id', orderController.getOrderById);
orderRouter.put('/customer/update/:id', orderController.updateSaleStatus);

module.exports = orderRouter;
