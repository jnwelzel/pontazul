import React from 'react';

import './Controls.css';
import Button from '../../Button'

const ControlsContainer = ({ onSubmitSearch }) => (
  <div className="container">
    <div className="Controls-wrapper">
      <div>
        <Button className="green">Novo Carro</Button>
      </div>
      <div className="Controls-search">
        <form onSubmit={(event) => onSubmitSearch(event)}>
          <input placeholder="Pesquisar" name="searchInput" />
        </form>
      </div>
    </div>
  </div>
);

export default ControlsContainer;