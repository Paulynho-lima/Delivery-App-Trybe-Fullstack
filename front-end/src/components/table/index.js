import React from 'react';

function Table() {
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
      </table>
    </div>
  );
}

export default Table;
