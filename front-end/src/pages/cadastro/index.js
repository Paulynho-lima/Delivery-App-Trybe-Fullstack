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
        testid=""
        onChange=""
        id="name"
      />
      <Input
        type="email"
        label="Email:"
        value=""
        name="email"
        onChange=""
        testid=""
      />
      <Input
        type="password"
        label="Senha:"
        value=""
        name="password"
        onChange=""
        testid=""
      />
    </div>
  );
}

export default Cadastro;
