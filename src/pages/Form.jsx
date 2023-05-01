import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import './Form.css';

fields = 'yearOfBirth';
export default function Form() {
  return (
    <div className="body">
      <Header />
      <form className="form">
        <label className="label" htmlFor="inputText">
          Pesquisar Personagem:
          <input
            type="text"
            className="inputF"
            id="inputText"
            value="projeto"
          />
        </label>
        <label className="label" htmlFor="column">
          field:
          <select
            name="field"
            id="column"
            className="inputF"
            defaultValue={ fields }
          >
            <option
              className="option"
              defaultValue={ fields }

            >
              {fields}
            </option>
          </select>
        </label>
        <label className="label" htmlFor="comparison">

          <select
            id="comparison"
            className="inputF"
            value="projeto"

          >
            <option className="option" value="maior que">maior que</option>
            <option className="option" value="menor que">menor que</option>
            <option className="option" value="igual a">igual a</option>
          </select>
        </label>
        <label className="label" htmlFor="number">
          <input
            type="number"
            className="inputF"
            id="number"
            value="projeto"
          />
        </label>
        <button
          type="button"
          className="buttonF"
        >
          Filtrar
        </button>
        <label className="labelR" htmlFor="sort">
          Ascendente
          <input
            type="radio"
            id="sort"
            name="sort"
            value="ASC"
          />

        </label>
        <label className="labelR" htmlFor="sortD">
          Descendente
          <input
            type="radio"
            name="sort"
            id="sortD"
            value="DESC"
          />

        </label>
        <button
          className="buttonO"
          type="button"
        >
          ORDENAR
        </button>
        <div>

          <div>
            <button
              type="button"
            >
              Excluir Filtros
            </button>
          </div>
        </div>
      </form>

      <Table />
    </div>
  );
}
