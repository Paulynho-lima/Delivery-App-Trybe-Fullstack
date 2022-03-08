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
            <div>
              <Link to="/customer/products">
                PRODUTOS
              </Link>
            </div>
            <div>
              <Link to="/customer/orders">
                MEUS PEDIDOS
              </Link>
            </div>
          </div>
        )}
        <div>
          <div>
            { userName }
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
