import React from 'react';
import Input from '../../components/input';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    const { name: eName, value } = target;

    if (eName === 'email') return setEmail(value);
    if (eName === 'password') return setPassword(value);
    setName(value);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <Input
        type="text"
        label="Nome"
        value={ name }
        name="name"
        testid="common_register__input-name"
        onChange={ handleChange }
      />
      <Input
        type="email"
        label="Email:"
        value={ email }
        name="email"
        onChange={ handleChange }
        testid="common_register__input-email"
      />
      <Input
        type="password"
        label="Senha:"
        value={ password }
        name="password"
        onChange={ handleChange }
        testid="common_register__input-password"
      />
    </div>
  );
}

export default Cadastro;
