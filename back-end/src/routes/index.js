const express = require('express');

const login = require('./loginRoute');
const customer = require('./customerRoute');
const order = require('./orderRoute');
const product = require('./productRoute');
const image = require('./imageRoute');

const route = express.Router();

route.use('/login', login);
route.use('/register', customer);
route.use('/orders', order);
route.use('/products', product);
route.use('/images', image);

module.exports = route;
