import constantes from './constantes';

const setLocalStorage = async (data) => {
  localStorage.setItem(constantes.LOCALSTORAGEKEY, JSON.stringify(data));
};

export default setLocalStorage;
