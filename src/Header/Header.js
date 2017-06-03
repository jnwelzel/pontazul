import React from 'react';

import './Header.css';
import logo from '../logo.svg';

const Header = () => (
  <div className="Header-background">
    <div className="container">
      <div className="Header-bar"><img src={logo} className="Header-logo" alt="Conta Azul" /></div>
    </div>
  </div>
);

export default Header;
