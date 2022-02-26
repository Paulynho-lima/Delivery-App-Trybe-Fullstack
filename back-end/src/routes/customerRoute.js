const express = require('express');
const createCustomerController = require('../customer/controllers/createCustomerController');

const customerRouter = express.Router();

customerRouter.post('/register', createCustomerController);

module.exports = customerRouter;
