import React from 'react';

import './Controls.css';
import Button from '../../Button';
import SearchInput from '../../SearchInput';

const ControlsContainer = ({ onSubmitSearch, onClickNewCar }) => (
  <div className="container">
    <div className="Controls-wrapper">
      <div>
        <Button className="green" onClick={() => {onClickNewCar()}}>Novo Carro</Button>
      </div>
      <div className="Controls-search">
        <form onSubmit={(event) => onSubmitSearch(event)}>
          <SearchInput placeholder="Pesquisar" name="searchInput" />
        </form>
      </div>
    </div>
  </div>
);

export default ControlsContainer;