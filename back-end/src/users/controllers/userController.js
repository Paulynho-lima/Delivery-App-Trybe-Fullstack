const utils = require('../../utils');
const { getUserSaleService, getSellerById } = require('../services/userService');

const getUserSaleController = async (_req, res, next) => {
    try {
        const users = await getUserSaleService();
        
        return res.status(utils.status.success).json(users);
    } catch (error) {
        console.log(`POST GETSALES: ${error.message}`);
        return next(error);
    }
};

const getSellerByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const seller = await getSellerById(id);
        
        return res.status(utils.status.success).json(seller);
    } catch (error) {
        console.log(`POST GETSALES: ${error.message}`);
        return next(error);
    }
};

module.exports = {
    getUserSaleController,
    getSellerByIdController,
};