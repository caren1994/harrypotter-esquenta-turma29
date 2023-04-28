import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';

const fields = ['yearOfBirth'];
export default function Form() {
  return (
    <div>
      <Header />
      <form>
        <h1>Harry Potter</h1>
        <label>
          Pesquisar Personagem:
          <input type="text" />
        </label>
        <label>
          field:
          <select
            name="field"
          >
            {fields.map((e, index) => (
              <option className="option" key={ index } value={ e }>
                {e}
              </option>))}
          </select>
        </label>
        <label>

          <select
            name="comparison"
          >
            <option className="option" value="maior que">maior que</option>
            <option className="option" value="menor que">menor que</option>
            <option className="option" value="igual a">igual a</option>
          </select>
        </label>
        <label>
          <input
            type="number"
          />
        </label>
        <label>
          Ascendente
          <input
            type="radio"
            name="sort"
            value="ASC"
          />

        </label>
        <label>
          Descendente
          <input
            type="radio"
            name="sort"
            value="DESC"
          />

        </label>
      </form>
      <Table />
    </div>
  );
}
