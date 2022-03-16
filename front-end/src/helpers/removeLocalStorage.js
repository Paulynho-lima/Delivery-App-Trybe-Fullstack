import constantes from './constantes';

const removeLocalStorage = async () => {
  localStorage.removeItem(constantes);
};

export default removeLocalStorage;
