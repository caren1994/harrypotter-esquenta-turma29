import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <nav className="containerNav">
      <div className="containerhl">
        <h3 className="h3">projeto</h3>
        <Link className="link" to="/">Login</Link>

      </div>
      <div>
        <h2 className="nameHarry">Harry Potter</h2>
      </div>
    </nav>
  );
}
