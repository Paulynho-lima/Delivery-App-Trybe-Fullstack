import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header';
import api from '../../api';

function Produtos() {
  const loggedUser = useSelector((state) => state.user.token);
  const [products, setProducts] = useState({});

  useEffect(() => {
    api.get('/products', { headers: { Authorization: loggedUser } })
      .then((apiResponse) => setProducts(apiResponse.data));
  }, [loggedUser]);

  return (
    <>
      <Header />
      <main>
        PRODUTOS
      </main>
    </>
  );
}

export default Produtos;
