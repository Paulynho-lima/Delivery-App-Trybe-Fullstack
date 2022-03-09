const express = require('express');
const productController = require('../product/controllers');
const middlewares = require('../middlewares');

const productRouter = express.Router();

productRouter.use(middlewares.auth);
productRouter.get('/', productController.getAll);

module.exports = productRouter;
