import React from 'react';
import PropTypes from 'prop-types';

function Table({ prefix, order }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {(order.products).map(({ name, quantity, price }, index) => (
            <tr
              key={ index }
              id={ index }
              data-testid={ `order-table-name-${index}` }
            >
              <td data-testid={ `${prefix}order-table-item-number-${index}` }>
                { index + 1 }
              </td>
              <td data-testid={ `${prefix}order-table-name-${index}` }>
                { name }
              </td>
              <td data-testid={ `${prefix}order-table-quantity-${index}` }>
                { quantity.quantity }
              </td>
              <td data-testid={ `${prefix}unit-price-${index}` }>
                { price }
              </td>
              <td data-testid={ `${prefix}order-table-sub-total-${index}` }>
                { (quantity.quantity * price).toFixed(2).replace('.', ',') }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

Table.propTypes = {
  prefix: PropTypes.string,
  order: PropTypes.object,
}.isRequired;
