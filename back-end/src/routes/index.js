const express = require('express');

const login = require('./loginRoute');
const customer = require('./customerRoute');

const route = express.Router();

route.use('/login', login);
route.use('/customer', customer);

module.exports = route;
