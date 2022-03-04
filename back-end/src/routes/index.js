const express = require('express');

const login = require('./loginRoute');
const sales = require('./salesRouter')

const route = express.Router();

route.use('/login', login);
route.use('/', login);
route.use('/customer/orders', sales);

module.exports = route;
