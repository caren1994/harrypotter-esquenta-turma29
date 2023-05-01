import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import './Login.css';

export default function Login() {
  const { name, email, password,
    setName, setEmail, setPassword } = useContext(AppContext);
  const history = useHistory();

  return (
    <section className="containerForm">
      <form className="containerInputs">
        <h3>Login</h3>
        <label htmlFor="name" className="flex ">

          <input
            className="inputLogin"
            id="name"
            type="text"
            placeholder="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email" className="flex ">

          <input
            className="inputLogin"
            id="email"
            type="email"
            placeholder="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password" className="flex">

          <input
            className="inputLogin"
            id="password"
            type="password"
            placeholder="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          className="enter"
          type="button"
          onClick={ () => history.push('/form') }
        >
          Enter
        </button>
      </form>
    </section>
  );
}
