import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import Input from '../../components/input';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'email') return setEmail(value);
    setPassword(value);
  };

  const handleClick = () => {
    const data = {
      email,
      password,
    };

    api.post('/', data)
      .then((responseApi) => {
        helper.setStorage(responseApi.data);
        if (responseApi.data.role === 'customer') {
          history.push('/produtos');
          return;
        }
        history.push('/pedidos');
      }).catch((err) => setError(err.response.data));
  };

  const handleRegister = () => {
    history.push('/cadastro');
  };

  return (
    <form>
      <div>
        <Input
          type="email"
          label="Email:"
          value={ email }
          name="email-input"
          onChange={ handleChange }
          testid="common_login__input-email"
        />
        <Input
          type="password"
          label="Senha:"
          value={ password }
          name="password-input"
          onChange={ handleChange }
          testid="common_login__input-password"
        />
      </div>
      <div>
        <Button
          name="Login"
          testid="common_login__button-login"
          onClick={ handleClick }
          disabled="false"
        />
        <Button
          name="Ainda não tenho conta"
          testid="common_login__button-register"
          onClick={ handleRegister }
          disabled="false"
        />
      </div>
    </form>
  );
}

export default Login;

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;
