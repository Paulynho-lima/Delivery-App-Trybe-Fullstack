import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header';
import api from '../../api';
import CardProduto from '../../components/productCard';

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
        { products && (
          products.map((product) => (
            <CardProduto
              key={ product.id }
              price={ product.price }
              imageUrl={ product.url_image }
              name={ product.name }
            />
          ))
        )}
      </main>
    </>
  );
}

export default Produtos;
