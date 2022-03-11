import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

function Card({ id, status, data, value, address, prefix, route }) {
  return (
    <Link key={ id } to={ `${route}${id}` }>
      <section>
        <div data-testid={ `${prefix}__element-order-id-${id}` }>
          <p>Pedido</p>
          <p>{ id }</p>
        </div>
        <div>
          <div>
            <div data-testid={ `${prefix}__element-delivery-status-${id}` }>
              { status }
            </div>
            <div data-testid={ `${prefix}__element-order-date-${id}` }>
              { moment(data).format('L') }
            </div>
            <div data-testid={ `${prefix}__element-card-price-${id}` }>
              { `R$ ${value.replace('.', ',')}` }
            </div>
          </div>
          { prefix === 'seller_orders' && (
            <div data-testid={ `${prefix}__element-card-address-${id}` }>
              { address }
            </div>
          )}
        </div>
      </section>
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
  prefix: PropTypes.string,
  route: PropTypes.string,
}.isRequired;
