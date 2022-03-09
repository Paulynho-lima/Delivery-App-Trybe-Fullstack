import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Pedidos from '../pages/pedidos/seller';
import Produtos from '../pages/produtos';
<<<<<<< HEAD
import pedidoDetalhado from '../pages/pedidos/details';
=======
import PedidosCliente from '../pages/pedidos/customer';
import Checkout from '../pages/checkout';
>>>>>>> 47dd24d9ddf69890b171653640f20660b11d7c63

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route path="/seller/orders/:id" component={ pedidoDetalhado } />
=======
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/orders" component={ PedidosCliente } />
>>>>>>> 47dd24d9ddf69890b171653640f20660b11d7c63
        <Route path="/seller/orders" component={ Pedidos } />
        <Route path="/customer/products" component={ Produtos } />
        <Route path="/register" component={ Cadastro } />
        <Route path="/login" component={ Login } />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
