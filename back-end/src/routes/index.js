const express = require('express');

const login = require('./loginRoute');
const customer = require('./customerRoute');
const order = require('./orderRoute');
const product = require('./productRoute');

const route = express.Router();

route.use('/login', login);
route.use('/register', customer);
route.use('/orders', order);
route.use('/products', product);

module.exports = route;
