import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import api from '../../../api';
import Header from '../../../components/header';
import Button from '../../../components/button';
import Table from '../../../components/table';

function PedidosClienteDetalhes() {
  const loggedUser = useSelector((state) => state.user);
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/orders/customer/order/${id}`,
      { headers: { Authorization: loggedUser.token } })
      .then((data) => setOrder(data.data))
      .catch((error) => console.log(error.response.data));
  }, [loggedUser, id]);

  const prefix = 'customer_order_details';

  return (
    <>
      <Header />
      <h2>Detalhe do Pedido</h2>
      <div>
        <nav>
          <p
            data-testid={ `${prefix}__element-order-details-label-order-id` }
          >
            {`Pedido ${id}`}
          </p>
          <p
            data-testid={ `${prefix}__element-order-details-label-seller-name` }
          >
            {`P. Vend: ${id}`}
          </p>
          <p
            data-testid={ `${prefix}__element-order-details-label-order-date` }
          >
            { order && moment(order.saleDate).format('DD/MM/YYYY') }
          </p>
          <p
            data-testid={ `${prefix}__element-order-details-label-delivery-status` }
          >
            {order && order.status}
          </p>
          <Button
            label="MARCAR COMO ENTREGUE"
            testid="customer_order_details__button-delivery-check"
          />
        </nav>
        {order && <Table
          prefix
          order={ order }
        />}
      </div>
    </>
  );
}

export default PedidosClienteDetalhes;
