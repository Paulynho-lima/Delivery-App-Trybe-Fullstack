const express = require('express');

const login = require('./loginRoute');
const customer = require('./customerRoute');
const order = require('./orderRoute');

const route = express.Router();

route.use('/login', login);
route.use('/register', customer);
route.use('/orders', order);

module.exports = route;
