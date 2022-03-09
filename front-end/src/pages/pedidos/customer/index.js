import React, { useEffect, useState } from 'react';
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
            <Link to={`/customer/orders/${loggedUser.id}`}>
            <Card
              key={ order.id }
              id={ order.id }
              status={ order.status }
              data={ order.sale_date }
              value={ order.total_price }
              address={ null }
            />
            </Link>
          ))}
        </main>
      </>
    )
  );
}

export default Pedidos;
