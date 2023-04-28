import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const requestApi = async () => {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      const result = await response.json();
      setData(result);
    };
    requestApi();
  }, []);

  const context = useMemo(() => ({
    data,
    setData,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
  }), [data, setData, name, setName, email, setEmail, password, setPassword]);
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
