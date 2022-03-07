import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Pedidos from '../pages/pedidos/seller';
import Produtos from '../pages/produtos';
import pedidoDetalhado from '../pages/pedidos/details';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/seller/orders/:id" component={ pedidoDetalhado } />
        <Route path="/seller/orders" component={ Pedidos } />
        <Route path="/customer/products" component={ Produtos } />
        <Route path="/register" component={ Cadastro } />
        <Route path="/login" component={ Login } />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
