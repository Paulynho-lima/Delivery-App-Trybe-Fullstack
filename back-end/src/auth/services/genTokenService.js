const jwt = require('jsonwebtoken');

const SECRET = 'ujKIPBDg4';

const JWT_CONFIG = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

module.exports = ((data) => jwt.sign({ data }, SECRET, JWT_CONFIG));
