const express = require('express');

const login = require('./loginRoute');

const route = express.Router();

route.use('/login', login);
route.use('/', login);

module.exports = route;
