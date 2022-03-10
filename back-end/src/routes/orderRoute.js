const express = require('express');
const orderController = require('../orders/controllers');
const middlewares = require('../middlewares');

const orderRouter = express.Router();

orderRouter.use(middlewares.auth);
orderRouter.get('/', orderController.getAll);

module.exports = orderRouter;