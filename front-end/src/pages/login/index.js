import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import Input from '../../components/input';
import api from '../../api';
import helper from '../../helpers';
import { loginSchema } from '../../utils/schemas';
import schemaValidate from '../../utils/schemaValidate';
import { setUser } from '../../app/slices/user';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [redirectTo, setRedirectTo] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    helper.getStorage().then((user) => {
      setLoggedUser(user);
    });
  }, []);

  useEffect(() => {
    if (loggedUser) {
      dispatch(setUser(loggedUser));
      if (loggedUser.role === 'customer') {
        setRedirectTo('/customer/products');
        return;
      }
      setRedirectTo('/seller/orders');
    }
  }, [loggedUser, dispatch]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'common_login__input-email') return setEmail(value);
    setPassword(value);
  };

  const handleClick = () => {
    const data = {
      email,
      password,
    };

    api.post('/login', data)
      .then((responseApi) => {
        helper.setStorage(responseApi.data);
        dispatch(setUser(responseApi.data));
        if (responseApi.data.role === 'customer') {
          setRedirectTo(`/${responseApi.data.role}/products`);
          return;
        }
        setRedirectTo(`/${responseApi.data.role}/orders`);
      }).catch((err) => setError(err.response.data));
  };

  if (redirectTo) return <Redirect to={ redirectTo } />;

  const handleRegister = () => {
    setRedirectTo('/register');
  };

  return (
    <form>
      <div>
        <Input
          type="email"
          label="Email:"
          value={ email }
          name="common_login__input-email"
          onChange={ handleChange }
          testid="common_login__input-email"
        />
        <Input
          type="password"
          label="Senha:"
          value={ password }
          name="common_login__input-password"
          onChange={ handleChange }
          testid="common_login__input-password"
        />
      </div>
      <div>
        <Button
          label="Login"
          name="login-btn"
          id="login-btn"
          testid="common_login__button-login"
          onClick={ handleClick }
          value={ schemaValidate({ email, password }, loginSchema) }
        />
        <Button
          label="Ainda não tenho conta"
          name="register-btn"
          id="register-btn"
          testid="common_login__button-register"
          onClick={ handleRegister }
          value={ false }
        />
      </div>
      { error
          && <p data-testid="common_login__element-invalid-email">{error.message}</p> }
    </form>
  );
}

export default Login;

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;
