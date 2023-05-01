import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

export default function Login() {
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
            value="name"
          />
        </label>
        <label htmlFor="email" className="flex ">

          <input
            className="inputLogin"
            id="email"
            type="email"
            placeholder="email"
            value="email"

          />
        </label>
        <label htmlFor="password" className="flex">

          <input
            className="inputLogin"
            id="password"
            type="password"
            placeholder="password"
            value="password"

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
