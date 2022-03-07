import React, { useEffect, useState } from 'react';
import api from '../../../api';
import helper from '../../../helpers';
import Card from '../../../components/OrderCard';
import Header from '../../../components/header';

function Pedidos() {
  const [loggedUser, setLoggedUser] = useState({});
  const [orders, setOrders] = useState({});

  useEffect(() => {
    helper.getStorage()
      .then((data) => setLoggedUser(data));
  }, []);

  useEffect(() => {
    api.get('/order', { headers: { Authorization: loggedUser.token } })
      .then((apiResponse) => setOrders(apiResponse.data));
  }, [loggedUser]);

  return (
    loggedUser && (
      <>
        <Header name={ loggedUser.name } />
        <main>
          { orders && (
            orders.map((order) => (
              <Card
                key={ order.id }
                id={ order.id }
                status={ order.status }
                data={ order.sale_date }
                value={ order.total_price }
                address={ order.delivery_address }
              />
            ))
          )}
        </main>
      </>
    )
  );
}

export default Pedidos;
