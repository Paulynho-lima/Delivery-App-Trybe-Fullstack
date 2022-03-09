import React from 'react';
import PropTypes from 'prop-types';

function Card({ id, status, date, value, address, testId, testIdStatus, testIdDate }) {
  return (
    <div>
      <div>
        <p>Pedido</p>
        <p data-testid={ `${testId}${id}` }>{ id }</p>
      </div>
      <div>
        <div>
          <div data-testid={ `${testIdStatus}${id}` }>
            { status }
          </div>
          <div data-testid={ `${testIdDate}${id}` }>
            { date }
            { value }
          </div>
        </div>
        <div>
          { address }
        </div>
      </div>
    </div>
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
