const fs = require('fs').promises;

module.exports = async () => {
  const secret = await fs.readFile('./jwt.evaluation.key', 'utf-8')
    .then((content) => JSON.parse(content));

  console.log(secret);
  return secret;
};
