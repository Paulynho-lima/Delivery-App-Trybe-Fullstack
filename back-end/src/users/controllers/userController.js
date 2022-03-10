const utils = require('../../utils');
const { getUserSaleService } = require('../services/userService');

const getUserSaleController = async (_req, res, next) => {
    try {
        const users = await getUserSaleService();
        
        return res.status(utils.status.success).json(users);
    } catch (error) {
        console.log(`POST GETSALES: ${error.message}`);
        return next(error);
    }
};

module.exports = {
    getUserSaleController,
};