const express = require('express');
const createCustomerController = require('../customer/controllers/createCustomerController');

const customerRouter = express.Router();

customerRouter.post('/', createCustomerController);

module.exports = customerRouter;
