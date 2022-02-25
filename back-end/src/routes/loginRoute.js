const express = require('express');
const loginController = require('../login/controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', loginController);
loginRouter.post('/login', loginController);

module.exports = loginRouter;
