import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../app/slices/user';
import { deleteCart } from '../../app/slices/cart';
import helpers from '../../helpers';
import Button from '../button';

const DEFAULT_USER = {
  name: null,
  email: null,
  role: null,
  token: null,
};

function Header() {
  const loggedUser = useSelector((state) => state.user);
  const { userName, role } = loggedUser;
  const dispatch = useDispatch();

  const handleLogout = () => {
    helpers.removeStorage();
    dispatch(setUser(DEFAULT_USER));
    dispatch(deleteCart());
  };

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
          <Link to="/login">
            <Button
              label="Sair"
              name="logout-btn"
              id="logout-btn"
              testid="customer_products__element-navbar-link-logout"
              onClick={ handleLogout }
              value={ false }
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
