import constantes from './constantes';

const setLocalStorage = async (data) => {
  localStorage.setItem(constantes, JSON.stringify(data));
};

export default setLocalStorage;
