import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

function CardProduto({ id, price, imageUrl, name }) {
  const [quantity, setQuantity] = useState(0);

  const sumQuantity = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const subQuantity = async () => {
    if (quantity === 0) return;
    if (quantity === 1) {
      setQuantity(0);
    }

    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  const handleChange = async ({ target }) => {
    const { value } = target;

    if (value < 0) return;

    setQuantity(Number(value));
  };

  return (
    <div>
      <div data-testid={ `customer_products__element-card-price-${id}` }>
        { `R$ ${price.replace('.', ',')}` }
      </div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ imageUrl }
        alt="imagem do produto"
      />
      <div>
        <div data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </div>
        <div>
          <Button
            name="-"
            testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ subQuantity }
            value={ false }
          />
          <input
            type="text"
            name="quantity"
            id="quantity-input"
            placeholder="0"
            onChange={ handleChange }
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <Button
            name="+"
            testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ sumQuantity }
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
