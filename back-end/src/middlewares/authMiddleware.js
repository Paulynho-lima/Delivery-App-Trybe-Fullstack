const auth = require('../auth/services');
const utils = require('../utils');

module.exports = (request, _response, next) => {
  try {
    const { authorization } = request.headers;

    if (!authorization) throw utils.error(utils.status.unauthorized, 'Token not found');

    const userData = auth.verify(authorization);

    if (!userData) throw utils.error(utils.status.unauthorized, 'Expired or invalid token');

    request.user = userData;

    next();
  } catch (error) {
    return next(error);
  }
};
