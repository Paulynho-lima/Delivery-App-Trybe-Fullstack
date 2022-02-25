const utils = require('../utils');

module.exports = (error, _request, response, _next) => {
  if (error.status) {
    return response.status(error.status).json({ message: error.message });
  }

  console.error(error);
  return response.status(utils.status.serverError).json({ message: 'Internal Server Error' });
};
