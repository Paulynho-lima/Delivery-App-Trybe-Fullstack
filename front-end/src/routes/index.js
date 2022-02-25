import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Pedidos from '../pages/pedidos';
import Produtos from '../pages/produtos';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pedidos" component={ Pedidos } />
        <Route path="/produtos" component={ Produtos } />
        <Route path="/cadastro" component={ Cadastro } />
        <Route path="/login" component={ Login } />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
