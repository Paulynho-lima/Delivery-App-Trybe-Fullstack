const helper = require('.');

module.exports = async () => (
  JSON.parse(localStorage.getItem(helper.contantes.LOCALSTORAGEKEY))
);
