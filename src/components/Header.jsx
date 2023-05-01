import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import './Header.css';

export default function Header() {
  const { name } = useContext(AppContext);
  return (
    <nav className="containerNav">
      <div className="containerhl">
        <h3 className="h3">{name}</h3>
        <Link className="link" to="/">Login</Link>

      </div>
      <div>
        <h2 className="nameHarry">Harry Potter</h2>
      </div>
    </nav>
  );
}
