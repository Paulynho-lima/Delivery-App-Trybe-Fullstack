import constantes from './constantes';

const getLocalStorage = async () => (
  JSON.parse(localStorage.getItem(constantes.LOCALSTORAGEKEY))
);

export default getLocalStorage;
