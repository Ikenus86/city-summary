import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Sondaggi Città</div>
      <nav>
        <ul>
          <li><Link to="/profilo">Profilo</Link></li>
          <li><Link to="/sondaggi">Sondaggi</Link></li>
          <li><Link to="/risultati">Risultati</Link></li>
          <li><Link to="/crea">Crea</Link></li>
        </ul>
      </nav>
      <div className="profile-icon">
        <img src="https://via.placeholder.com/40" alt="Icona Profilo" />
      </div>
    </header>
  );
};

export default Header;