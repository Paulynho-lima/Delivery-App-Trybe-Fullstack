import React, { useEffect, useState } from 'react';
import api from '../../../api';
import helper from '../../../helpers';
import Card from '../../../components/card';
import Header from '../../../components/header';

function Pedidos() {
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    helper.getStorage()
      .then((data) => setLoggedUser(data));
  }, []);

  useEffect(() => {
    api.get('/sales', { headers: { Authorization: `Bearer ${loggedUser.token}` } });
  }, [loggedUser]);

  return (
    loggedUser && (
      <>
        <Header name={ loggedUser.name } />
        <main>
          <Card
            id="0001"
            status="PENDENTE"
            data="00/00/0000"
            value="R$ 00,00"
            address="Rua X, Bairo Y, 000"
          />
        </main>
      </>
    )
  );
}

export default Pedidos;
