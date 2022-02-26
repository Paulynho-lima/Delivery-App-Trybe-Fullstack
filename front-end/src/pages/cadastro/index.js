import React from 'react';
import Input from '../../components/input';

function Cadastro() {
  return (
    <div>
      <h2>Cadastro</h2>
      <Input
        type="text"
        label="Nome"
        value=""
        name="name"
        testid="common_register__input-name"
        onChange=""
      />
      <Input
        type="email"
        label="Email:"
        value=""
        name="email"
        onChange=""
        testid="common_register__input-email"
      />
      <Input
        type="password"
        label="Senha:"
        value=""
        name="password"
        onChange=""
        testid="common_register__input-password"
      />
    </div>
  );
}

export default Cadastro;
