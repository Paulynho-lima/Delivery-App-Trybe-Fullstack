import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ id, status, data, value, address }) {
  return (
    <Link key={ id } to={ `seller/orders/${id}` }>
      <div
        data-testid={ `seller_orders__element-order-date-${id}` }
      >
        <div>
          <p>Pedido</p>
          <p>{ id }</p>
        </div>
        <div>
          <div>
            <div>
              { status }
            </div>
            <div>
              { data }
              { value }
            </div>
          </div>
          <div>
            { address }
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
  data: PropTypes.string,
  value: PropTypes.string,
  address: PropTypes.string,
}.isRequired;
