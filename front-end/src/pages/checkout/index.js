import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../api';
import helper from '../../helpers';
import Button from '../../components/button';
import Input from '../../components/input';
import './style.css';

const Arrays = [
  {
    id: 1,
    name: 'coca cola',
    quantity: 5,
    valor: 10,

  },
  {
    id: 2,
    name: 'cerveja',
    quantity: 10,
    valor: 50,

  },
];

function Checkout() {
  const [vendedores, setVendedores] = useState([]);
  const [IdSeller, setIdSeller] = useState(0);
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const [token, setToken] = useState(null);
  const [saleId, setSaleId] = useState('');
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
    await createSale({
      totalPrice: 10.50,
      deliveryAddress: endereço,
      deliveryNumber: numero,
      status: 'Pendente',
      sellerId: IdSeller,
      products: [{ productId: 2, quantity: 10 }],
    });

    history.push(`/customer/orders/${saleId.id}`);
  };

  console.log(vendedores);

  return (
    <div>
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
          {Arrays.map((arr, index) => (
            <tr key={ index }>
              <td>
                { index + 1 }
              </td>

              <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
                { arr.name }
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                { arr.quantity }
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-
                ${index}` }
              >
                { arr.valor }
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-
                ${index}` }
              >
                { Number(arr.valor) * Number(arr.quantity) }
              </td>

              <div>
                <Button
                  name="Remover"
                  testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick=""
                  value={ false }
                />
              </div>

            </tr>
          ))}
        </tbody>
        <tbody>
          <tr>

            <td data-testid="customer_checkout__element-order-total-price">
              {` Total: R$ ${Number(1000)}`}

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
