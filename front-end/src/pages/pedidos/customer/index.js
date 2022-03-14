import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../api';
import Card from '../../../components/card';
import Header from '../../../components/header';

function Pedidos() {
  const loggedUser = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get(`/order/customer/${loggedUser.id}`,
      { headers: { Authorization: loggedUser.token } })
      .then((data) => setOrders(data.data))
      .catch((error) => console.log(error.response.data));
  }, [loggedUser]);

  return (
    <>
      <Header />
      <main>
        { (orders.length > 0) && orders.map((order) => (
          <Card
            key={ order.id }
            id={ order.id }
            status={ order.status }
            data={ order.saleDate }
            value={ order.totalPrice }
            address=""
            prefix="customer_orders"
            route="/customer/orders/"
          />
        ))}
      </main>
    </>
  );
}

export default Pedidos;
