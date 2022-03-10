import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import api from '../../api';
import helper from '../../helpers';
import Button from '../../components/button';
import Input from '../../components/input';
import './style.css';
import Header from '../../components/header';

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const price = useSelector((state) => state.totalPrice.totalPrice);
  const [vendedores, setVendedores] = useState([]);
  const [IdSeller, setIdSeller] = useState(0);
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const [token, setToken] = useState(null);
  const [saleId, setSaleId] = useState('');
  const [array, setArray] = useState(cart);
  const [totalPrice, setTotalPrice] = useState(price);
  const history = useHistory();

  useEffect(() => {
    api.get('/sales/user')
      .then((response) => {
        setVendedores(response.data);
      })
      .catch((err) => (err.response.data));
  }, []);

  helper.getStorage().then((resp) => {
    setToken(resp.token);
  });

  const header = {
    headers: {
      Authorization: token,
    },
  };

  const createSale = async (data) => {
    await api.post('/customer/orders', data, header)
      .then((response) => {
        setSaleId(response.data);
      })
      .catch((err) => (err.response.data));
  };

  const onSubmitOrder = async (envet) => {
    envet.preventDefault();
    const products = array.map(({ id, quantity }) => {
      const productId = id;
      return { productId, quantity };
    });
    await createSale({
      totalPrice,
      deliveryAddress: endereço,
      deliveryNumber: numero,
      status: 'Pendente',
      sellerId: IdSeller,
      products,
    });
  };

  if (saleId.id) {
    history.push(`/customer/orders/${saleId.id}`);
  }

  const removeItem = (index) => {
    const itens = [...array];
    setTotalPrice((totalPrice - (itens[index].price * itens[index].quantity).toFixed(2)));
    itens.splice(index, 1);
    setArray(itens);
  };

  return (
    <div>
      <Header />
      <table className="table">
        <caption>Finalizar Pedido</caption>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {array.map((arr, i) => (
            <tr key={ i }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                { i + 1 }
              </td>

              <td data-testid={ `customer_checkout__element-order-table-name-${i}` }>
                { arr.name }
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                { arr.quantity }
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                { arr.price.replace('.', ',') }
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                { Number(arr.price * arr.quantity).toFixed(2).replace('.', ',') }
              </td>

              <div>
                <Button
                  label="Remover"
                  name="Remover"
                  testid={ `customer_checkout__element-order-table-remove-${i}` }
                  onClick={ () => removeItem(i) }
                  value={ false }
                />
              </div>

            </tr>
          ))}
        </tbody>
        <tbody>
          <tr>

            <td data-testid="customer_checkout__element-order-total-price">
              {` Total: R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}

            </td>
          </tr>
        </tbody>
      </table>

      <form className="forms" onSubmit={ onSubmitOrder }>

        <h3> Detalhes e Endereço para Entrega</h3>

        <label htmlFor="vendedores">
          P.Vendedora Responsavel

          <select
            id="vendedores"
            required
            Value={ IdSeller }
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => setIdSeller(Number(target.value)) }
          >
            <option value=""> selecione o vendedor/a </option>
            {vendedores.map((vend, index) => (

              <option
                key={ index }
                value={ vend.id }
              >
                { vend.name }

              </option>

            ))}

          </select>

        </label>
        Endereço
        <Input
          type="text"
          label=""
          value={ endereço }
          name="endereço"
          onChange={ ({ target }) => setEndereço(target.value) }
          testid="customer_checkout__input-address"
        />
        Número
        <Input
          type="number"
          label=""
          value={ numero }
          name="numero"
          onChange={ ({ target }) => setNumero(target.value) }
          testid="customer_checkout__input-addressNumber"
        />
        <Button
          label="FINALIZAR PEDIDO"
          name="FINALIZAR PEDIDO"
          testid="customer_checkout__button-submit-order"
          onClick={ onSubmitOrder }
          value={ false }
        />

      </form>
    </div>
  );
}

export default Checkout;
