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
  const [seller, SetSeller] = useState(null);
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState('');
  const { id } = useParams();

  const handleClick = () => {
    const data = {
      status: 'Entregue',
    };

    api.put(`/orders/customer/update/${id}`, data,
      { headers: { Authorization: loggedUser.token } })
      .then((response) => setStatus(response.data.status))
      .catch((error) => console.log(error.response.data));
  };

  useEffect(() => {
    api.get(`/orders/customer/order/${id}`,
      { headers: { Authorization: loggedUser.token } })
      .then((data) => {
        setOrder(data.data);
        setStatus(data.data.status);

        api.get(`/sales/user/seller/${data.data.sellerId}`,
          { headers: { Authorization: loggedUser.token } })
          .then((response) => {
            SetSeller(response.data.name);
          });
      })
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
            {`P. Vend: ${seller}`}
          </p>
          <p
            data-testid={ `${prefix}__element-order-details-label-order-date` }
          >
            { order && moment(order.saleDate).format('DD/MM/YYYY') }
          </p>
          <p
            data-testid={ `${prefix}__element-order-details-label-delivery-status` }
          >
            { status }
          </p>
          <Button
            label="MARCAR COMO ENTREGUE"
            testid="customer_order_details__button-delivery-check"
            onClick={ handleClick }
            value={ status === 'Entregue' }
          />
        </nav>
        {order && <Table
          prefix
          order={ order }
        />}
        <p>{`Total: ${order && order.totalPrice}`}</p>
      </div>
    </>
  );
}

export default PedidosClienteDetalhes;
