const utils = require('.');

module.exports = (object, schema) => {
  const { error } = schema.validate(object);

  if (error) throw utils.error(utils.status.badRequest, error.message);
};
