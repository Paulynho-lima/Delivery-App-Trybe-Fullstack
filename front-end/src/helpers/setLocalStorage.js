const helper = require('.');

module.exports = async (data) => {
  localStorage.setItem(helper.contantes.LOCALSTORAGEKEY, JSON.stringify(data));
};
