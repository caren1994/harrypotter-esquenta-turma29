import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../Context/AppContext';

export default function Login() {
  const { name, email, password,
    setName, setEmail, setPassword } = useContext(AppContext);
  const history = useHistory();

  return (
    <form>
      <label htmlFor="email" className="flex ">

        <input
          type="text"
          placeholder="name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email" className="flex ">

        <input
          type="email"
          placeholder="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password" className="flex">

        <input
          type="password"
          placeholder="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        type="button"
        onClick={ () => history.push('/form') }
      >
        Enter
      </button>
    </form>
  );
}
