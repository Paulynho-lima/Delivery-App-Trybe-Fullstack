import React, { useState, useEffect } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, updateCart } from '../../app/slices/cart';
import Button from '../button';

function CardProduto({ id, price, imageUrl, name }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const product = cart.find((element) => element.id === id);

    if (!product) {
      if (quantity === 0) return;
      const subTotal = (parseFloat(price) * quantity).toFixed(2);
      return dispatch(setCart({ id, name, price, quantity, subTotal }));
    }

    if (product) {
      if (quantity === 0) return;
      const newSubTotal = (parseFloat(price) * quantity).toFixed(2);
      const newQuantity = quantity;
      dispatch(updateCart({ id, newQuantity, newSubTotal }));
    }

    if (product.quantity <= 0) {
      const newCart = cart.filter((productCart) => productCart.id !== id);
      dispatch(setCart(newCart));
    }
  }, [cart, dispatch, id, name, price, quantity]);

  return (
    <div className="container">
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { `R$ ${price.replace('.', ',')}` }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ imageUrl }
        alt="imagem do produto"
      />
      <div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </p>
        <p>{ quantity }</p>
        <div>
          <Button
            label="-"
            name="btn-sub"
            id={ id }
            testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => { if (quantity >= 1) setQuantity(quantity - 1); } }
            value={ false }
          />
          <input
            type="text"
            name="quantity"
            id={ id }
            placeholder="0"
            onChange={ ({ target }) => setQuantity(target.value) }
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <Button
            label="+"
            name="btn-add"
            id={ id }
            testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => { setQuantity(quantity + 1); } }
            value={ false }
          />
        </div>
      </div>
    </div>
  );
}

export default CardProduto;

CardProduto.propTypes = {
  id: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
