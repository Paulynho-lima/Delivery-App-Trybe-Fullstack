import React, { useState } from 'react';
import Input from '../../components/input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'email') return setEmail(value);
    setPassword(value);
  };

  return (
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
  );
}

export default Login;
