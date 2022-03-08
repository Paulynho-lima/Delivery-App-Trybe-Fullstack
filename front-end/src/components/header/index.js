import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const loggedUser = useSelector((state) => state.user);
  const { userName, role } = loggedUser;

  return (
    <header>
      <nav>
        { role === 'customer' && (
          <div>
            <div data-testid="customer_products__element-navbar-link-products">
              <Link to="/customer/products">
                PRODUTOS
              </Link>
            </div>
            <div data-testid="customer_products__element-navbar-link-orders">
              <Link to="/customer/orders">
                MEUS PEDIDOS
              </Link>
            </div>
          </div>
        )}
        <div>
          <div data-testid="customer_products__element-navbar-user-full-name">
            { userName }
          </div>
          <div data-testid="customer_products__element-navbar-link-logout">
            Sair
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
