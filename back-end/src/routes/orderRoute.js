const express = require('express');
const orderController = require('../order/controllers');
const middleware = require('../middlewares');

const orderRouter = express.Router();

orderRouter.use(middleware.auth);
orderRouter.get('/', orderController.getAll);

module.exports = orderRouter;
