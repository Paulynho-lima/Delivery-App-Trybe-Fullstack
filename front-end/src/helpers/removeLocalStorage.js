const helper = require('.');

module.exports = async () => {
  localStorage.removeItem(helper.contantes.LOCALSTORAGEKEY);
};
