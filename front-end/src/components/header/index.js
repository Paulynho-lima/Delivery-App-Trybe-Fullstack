import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ name }) {
  return (
    <header>
      <div>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          <div>
            PRODUTOS
          </div>
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          <div>
            Meus Pedidos
          </div>
        </Link>
      </div>
      <div>
        <div data-testid="customer_productselement-navbar-user-full-name">
          { name }
          <Link
            data-testid="customer_products__element-navbar-link-logout"
            to="/customer/checkout"
          >
            <div>
              Sair
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  name: PropTypes.string,
}.isRequired;
