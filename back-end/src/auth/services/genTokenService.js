const jwt = require('jsonwebtoken');
const helper = require('../../helpers');

const SECRET = helper.getSecret().then((data) => data);

const JWT_CONFIG = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

module.exports = ((data) => jwt.sign({ data }, SECRET, JWT_CONFIG));
