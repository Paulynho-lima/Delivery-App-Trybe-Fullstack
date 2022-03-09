import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.css';
import Header from '../../components/header';
import api from '../../api';
import CardProduto from '../../components/productCard';
import Button from '../../components/button';

function Produtos() {
  const loggedUser = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState(null);
  const [totalCart, setTotalCart] = useState(0);
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    api.get('/products', { headers: { Authorization: loggedUser } })
      .then((apiResponse) => {
        setProducts((apiResponse.data));
      }).catch((err) => console.log(err));
  }, [loggedUser]);

  useEffect(() => {
    let totalPrice = 0.00;

    const totalValue = cart.map(({ subTotal }) => {
      const sumTotal = totalPrice + parseFloat(subTotal);
      totalPrice = sumTotal;
      return sumTotal;
    });
    totalPrice = ((totalValue[totalValue.length - 1] * 100) / 100);
    setTotalCart(totalPrice);
  }, [cart]);

  const handleClick = () => setRedirectTo('/customer/checkout');

  if (redirectTo) return <Redirect to={ redirectTo } />;
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
      <Button
        label={
          <h1>
            Ver Carrinho R$
            <span
              data-testid="customer_products__checkout-bottom-value"
            >
              {totalCart ? totalCart.toFixed(2).replace('.', ',') : '0,00'}
            </span>
          </h1>
        }
        name="button-cart"
        id="button-cart"
        testid="customer_products__button-cart"
        onClick={ handleClick }
        value={ !totalCart }
      />
    </>
  );
}

export default Produtos;
