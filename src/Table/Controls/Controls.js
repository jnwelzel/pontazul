import React from 'react';

import './Controls.css';
import Button from '../../Button';
import SearchInput from '../../SearchInput';

const ControlsContainer = ({ onSubmitSearch, onClickNewCar, formIsVisible }) => (
  <div className="container">
    <div className="Controls-wrapper">
      <div>
        <Button className={formIsVisible ? "red" : "green"} onClick={() => {onClickNewCar()}}>{formIsVisible ? 'Cancelar' : 'Novo carro'}</Button>
      </div>
      <div className="Controls-search">
        <form onSubmit={(event) => onSubmitSearch(event)}>
          <SearchInput title="Pesquisar por marca ou combustível" />
        </form>
      </div>
    </div>
  </div>
);

export default ControlsContainer;