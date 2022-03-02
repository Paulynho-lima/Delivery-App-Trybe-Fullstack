const express = require('express');

const login = require('./loginRoute');
const customer = require('./customerRoute');

const route = express.Router();

route.use('/login', login);
route.use('/register', customer);

module.exports = route;
