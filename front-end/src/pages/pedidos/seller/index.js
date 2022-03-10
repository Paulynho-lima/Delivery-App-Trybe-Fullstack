import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import api from '../../../api';
import Card from '../../../components/OrderCard';
import Header from '../../../components/header';

function Pedidos() {
  const loggedUser = useSelector((state) => state.user.token);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    api.get('/order', { headers: { Authorization: loggedUser } })
      .then((apiResponse) => setOrders(apiResponse.data));
  }, [loggedUser]);

  const renderOrders = () => {
    orders.map((order) => (
      <Card
        key={ order.id }
        id={ order.id }
        status={ order.status }
        data={ order.sale_date }
        value={ moment(order.total_price).format('L') }
        address={ order.delivery_address }
        prefix="seller_orders"
        route="seller/orders/"
      />
    ));
  };

  return (
    <>
      <Header name={ loggedUser.name } />
      <main>
        {
          (orders && orders.length !== 0)
            ? renderOrders()
            : <span>NENHUMA VENDA CADASTRADA</span>
        }
      </main>
    </>
  );
}

export default Pedidos;
