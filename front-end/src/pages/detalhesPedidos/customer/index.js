import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../api';
import Header from '../../../components/header';
import Button from '../../../components/button';
import Table from '../../../components/table';

function PedidosClienteDetalhes() {
  const loggedUser = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get(`/orders/customer/${loggedUser.id}`,
      { headers: { Authorization: loggedUser.token } })
      .then((data) => setOrders(data.data))
      .catch((error) => console.log(error.response.data));
  }, [loggedUser]);

  console.log(orders);

  return (
    <>
      <Header />
      <h2>Detalhe do Pedido</h2>
      <div>
        <div>
          <p>
            Pedido
            {loggedUser.id}
          </p>
          <p>P. Vend: Fulana Pereira</p>
          <p>07/04/2021</p>
          <p>status</p>
          <Button
            label="MARCAR COMO ENTREGUE"
          />
        </div>
        <Table />
      </div>
    </>
  );
}

export default PedidosClienteDetalhes;
