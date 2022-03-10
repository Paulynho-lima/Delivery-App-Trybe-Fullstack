const express = require('express');
const { getUserSaleController } = require('../users/controllers/userController');

const userRouter = express.Router();

userRouter.get('/', getUserSaleController);

module.exports = userRouter;