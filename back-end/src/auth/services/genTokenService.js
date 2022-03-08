const jwt = require('jsonwebtoken');
const helper = require('../../helpers');

const SECRET = helper.getSecret();

const JWT_CONFIG = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

module.exports = ((data) => jwt.sign({ data }, SECRET, JWT_CONFIG));
