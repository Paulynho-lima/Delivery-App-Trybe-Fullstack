const utils = require('../../utils');
const imageService = require('../services');

module.exports = async (request, response, next) => {
  try {
    const { name } = request.params;

    const image = await imageService.getImage(name);

    return response.status(utils.status.success).sendFile(image);
  } catch (error) {
    return next(error);
  }
};
