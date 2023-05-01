import React, { useContext } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import AppContext from '../Context/AppContext';
import './Form.css';

export default function Form() {
  const { setInputText, columnFilter, setComparisonFilter,
    setNumber, inputText, number,
    comparisonFilter, handleFilter, filters,
    handleDeleteFilters, handleButtonSort, setSort } = useContext(AppContext);
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
            value={ inputText }
            onChange={ ({ target }) => setInputText(target.value) }
          />
        </label>
        <label className="label" htmlFor="column">
          field:
          <select
            name="field"
            id="column"
            className="inputF"
            defaultValue={ columnFilter }
          >
            <option
              className="option"
              defaultValue={ columnFilter }
            >
              {columnFilter}
            </option>
          </select>
        </label>
        <label className="label" htmlFor="comparison">

          <select
            id="comparison"
            className="inputF"
            value={ comparisonFilter }
            onChange={ ({ target }) => setComparisonFilter(target.value) }
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
            value={ number }
            onChange={ ({ target }) => setNumber(target.value) }
          />
        </label>
        <button
          type="button"
          className="buttonF"
          onClick={ handleFilter }
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
            onChange={ ({ target }) => setSort(target.value) }
          />

        </label>
        <label className="labelR" htmlFor="sortD">
          Descendente
          <input
            type="radio"
            name="sort"
            id="sortD"
            value="DESC"
            onChange={ ({ target }) => setSort(target.value) }
          />

        </label>
        <button
          className="buttonO"
          type="button"
          onClick={ handleButtonSort }
        >
          ORDENAR
        </button>
        <div>

          {
            filters.length > 0
              && (
                <div>
                  <button
                    type="button"
                    onClick={ handleDeleteFilters }
                  >
                    Excluir Filtros
                  </button>
                </div>
              )
          }
        </div>
      </form>

      <Table />
    </div>
  );
}
