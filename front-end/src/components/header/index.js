import React from 'react';
import PropTypes from 'prop-types';

function Header({ name }) {
  return (
    <header>
      <div>
        PEDIDOS
      </div>
      <div>
        <div>
          { name }
        </div>
        <div>
          Sair
        </div>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  name: PropTypes.string,
}.isRequired;
