import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';

export default function Header() {
  const { name } = useContext(AppContext);
  return (
    <nav>
      <h3>{name}</h3>
      <Link to="/">Login</Link>
    </nav>
  );
}
