const jwt = require('jsonwebtoken');
const helper = require('../../helpers');

const SECRET = helper.getSecret().then((data) => data);

const JWT_CONFIG = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

module.exports = (async (data) => jwt.sign({ data }, await SECRET, JWT_CONFIG));
