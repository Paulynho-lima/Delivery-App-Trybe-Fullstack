import constantes from './constantes';

const removeLocalStorage = async () => {
  localStorage.removeItem(constantes.LOCALSTORAGEKEY);
};

export default removeLocalStorage;
