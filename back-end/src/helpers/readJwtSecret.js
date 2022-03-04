const fs = require('fs').promises;

module.exports = async () => {
  const secret = await fs.readFile('./jwt.evaluation.key', 'utf-8')
    .then((content) => (content));

  return secret;
};
