const fs = require('fs');

module.exports = () => {
  const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
    .trim();
  return secret;
};
