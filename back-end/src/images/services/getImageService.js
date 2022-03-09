const path = require('path');
const utils = require('../../utils');

module.exports = async (name) => {
  const image = path.join(__dirname, '../../../public/images', name);

  if (!image) throw utils.error(utils.status.notFound, 'Image not found!');

  return image;
};
