require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const JWT_CONFIG = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

module.exports = ((data) => jwt.sign({ data }, SECRET, JWT_CONFIG));
