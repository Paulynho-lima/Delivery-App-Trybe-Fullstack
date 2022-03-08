import React from 'react';
import PropTypes from 'prop-types';

function Header({ name }) {
  return (
    <header>
      <nav>
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
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  name: PropTypes.string,
}.isRequired;
