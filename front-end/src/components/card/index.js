import React from 'react';
import PropTypes from 'prop-types';

function Card({ id, status, data, value, address }) {
  return (
    <div>
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
