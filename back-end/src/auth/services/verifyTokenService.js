require('dotenv').config();
const jwt = require('jsonwebtoken');
const utils = require('../../utils');

module.exports = (token) => {
  const SECRET = process.env.JWT_SECRET;

  try {
    const decoded = jwt.verify(token, SECRET);

    return decoded.data;
  } catch (error) {
    throw utils.error(utils.status.unauthorized, 'Expired or invalid token');
  }
};
