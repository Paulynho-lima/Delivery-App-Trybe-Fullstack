import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import api from '../../../api';
import Header from '../../../components/header';
import Button from '../../../components/button';
import Table from '../../../components/table';

function PedidosClienteDetalhes() {
  const loggedUser = useSelector((state) => state.user);
  const [order, setOrder] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/orders/customer/order/${id}`,
      { headers: { Authorization: loggedUser.token } })
      .then((data) => setOrder(data.data))
      .catch((error) => console.log(error.response.data));
  }, [loggedUser, id]);

  const prefix = 'customer_order_details__';

  console.log(order);

  return (
    <>
      <Header />
      <h2>Detalhe do Pedido</h2>
      <div>
        <nav>
          <p
            data-testid={ `${prefix}element-order-details-label-order-id` }
          >
            Pedido id
          </p>
          <p
            data-testid={ `${prefix}element-order-details-label-seller-name` }
          >
            P. Vend:
          </p>
          <p
            data-testid={ `${prefix}element-order-details-label-order-date` }
          >
            07/04/2021
          </p>
          <p
            data-testid={ `${prefix}element-order-details-label-delivery-status` }
          >
            status
          </p>
          <Button
            label="MARCAR COMO ENTREGUE"
            testid={ `${prefix}button-delivery-check` }
          />
        </nav>
        <Table />
      </div>
    </>
  );
}

export default PedidosClienteDetalhes;
