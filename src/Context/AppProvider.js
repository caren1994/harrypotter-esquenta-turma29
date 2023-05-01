import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const fields = 'yearOfBirth';
function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [initialStateApi, setInitialStateApi] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputText, setInputText] = useState('');
  const [columnFilter] = useState(fields);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState('ASC');

  useEffect(() => {
    const requestApi = async () => {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      const result = await response.json();
      setData(result);
      setInitialStateApi(result);
    };
    requestApi();
  }, []);

  const handleFilter = useCallback(() => {
    if (comparisonFilter.includes('maior que')) {
      const filtered = data.filter((e) => Number(e[columnFilter]) > Number(number));
      setData(filtered);
      setFilters([...filters,
        { columnFilter, comparisonFilter, number }]);
    } else if (comparisonFilter.includes('menor que')) {
      const filtered = data.filter((e) => Number(e[columnFilter]) < Number(number));
      setData(filtered);
      setFilters([...filters,
        { columnFilter, comparisonFilter, number }]);
    } else if (comparisonFilter.includes('igual a')) {
      const filtered = data.filter((e) => Number(e[columnFilter]) === Number(number));
      setData(filtered);
      setFilters([...filters,
        { columnFilter, comparisonFilter, number }]);
    }
  }, [columnFilter, comparisonFilter, data, filters, number]);

  const handleDeleteFilters = useCallback(() => {
    setData(initialStateApi);
    setFilters([]);
  }, [initialStateApi]);

  const handleButtonSort = useCallback(() => {
    if (sort.includes('ASC')) {
      const notExist = data.filter((e) => e[columnFilter] === null);
      const exist = data.filter((e) => e[columnFilter] !== null);
      const arraysort = exist
        .sort((a, b) => Number(a[columnFilter]) - Number(b[columnFilter]));
      setData([...arraysort, ...notExist]);
      setFilters([...filters,
        { columnFilter, sort }]);
    } else if (sort.includes('DESC')) {
      const notExist = data.filter((e) => e[columnFilter] === null);
      const exist = data.filter((e) => e[columnFilter] !== null);
      const arraysort = exist
        .sort((a, b) => Number(b[columnFilter]) - Number(a[columnFilter]));
      setData([...arraysort, ...notExist]);
      setFilters([...filters,
        { columnFilter, sort }]);
    }
  }, [columnFilter, sort, filters, data]);

  const context = useMemo(() => ({
    data,
    setData,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    inputText,
    setInputText,
    initialStateApi,
    setInitialStateApi,
    columnFilter,
    handleFilter,
    comparisonFilter,
    setComparisonFilter,
    number,
    setNumber,
    handleDeleteFilters,
    filters,
    handleButtonSort,
    sort,
    setSort,
  }), [data, setData, name, setName, email, setEmail, password, setPassword,
    inputText,
    setInputText, initialStateApi, setInitialStateApi, columnFilter, handleFilter,
    comparisonFilter, setComparisonFilter, number, setNumber, handleDeleteFilters,
    filters, handleButtonSort, sort, setSort]);
  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppProvider;
