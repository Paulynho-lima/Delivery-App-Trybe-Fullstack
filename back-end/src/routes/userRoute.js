const express = require('express');
const { 
    getUserSaleController, 
    getSellerByIdController, 
} = require('../users/controllers/userController');

const userRouter = express.Router();

userRouter.get('/', getUserSaleController);
userRouter.get('/seller/:id', getSellerByIdController);

module.exports = userRouter;