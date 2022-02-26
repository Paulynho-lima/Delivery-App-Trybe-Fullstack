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
    </div>
  );
}

export default Cadastro;
