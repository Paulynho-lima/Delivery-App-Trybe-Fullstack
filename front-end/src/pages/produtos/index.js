import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import Header from '../../components/header';
import api from '../../api';
import CardProduto from '../../components/productCard';

function Produtos() {
  const loggedUser = useSelector((state) => state.user.token);
  // const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    api.get('/products', { headers: { Authorization: loggedUser } })
      .then((apiResponse) => {
        setProducts((apiResponse.data));
      }).catch((err) => console.log(err));
  }, [loggedUser]);

  // useEffect(() => {
  //   let totalPrice = 0.00;

  //   cart.map
  // }, [cart]);
  return (
    <>
      <Header />
      <main className="container">
        { products && (
          products.map((product) => (
            <CardProduto
              key={ product.id }
              id={ product.id }
              price={ product.price }
              imageUrl={ product.url_image }
              name={ product.name }
            />
          ))
        )}
      </main>
      <div data-testid="customer_products__checkout-bottom-value">
        Botão do Carrinho
      </div>
    </>
  );
}

export default Produtos;
