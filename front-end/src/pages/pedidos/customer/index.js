import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api';
import helper from '../../../helpers';
import Card from '../../../components/card';
import Header from '../../../components/header';

function Pedidos() {
  const [loggedUser, setLoggedUser] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    helper.getStorage()
      .then((data) => setLoggedUser(data));
  }, []);

  useEffect(() => {
    api.get(`/orders/customers/${loggedUser.id}`)
      .then((data) => setOrders(data));
  }, [loggedUser.id]);

  return (
    loggedUser && (
      <>
        <Header name={ loggedUser.name } />
        <main>
          { orders && orders.map((order) => (
            <Link
              key={ `link-${loggedUser.id}` }
              to={ `/customer/orders/${loggedUser.id}` }
            >
              <Card
                key={ order.id }
                id={ order.id }
                status={ order.status }
                date={ order.sale_date }
                value={ order.total_price }
                address={ null }
                testId="customer_orders__element-order-id-"
                testIdStatus="customer_orders__element-delivery-status-"
                testIdDate="customer_orders__element-order-date-"
              />
            </Link>
          ))}
        </main>
      </>
    )
  );
}

export default Pedidos;
