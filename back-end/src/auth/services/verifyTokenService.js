const jwt = require('jsonwebtoken');
const utils = require('../../utils');
const helper = require('../../helpers');

module.exports = async (token) => {
  const SECRET = helper.getSecret().then((data) => data);

  try {
    const decoded = jwt.verify(token, await SECRET);

    return decoded.data;
  } catch (error) {
    throw utils.error(utils.status.unauthorized, 'Expired or invalid token');
  }
};
