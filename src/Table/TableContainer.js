import React from 'react';

import Controls from './Controls';
import { INITIAL_DATA } from '../appData';
import Table from './Table';
import { searchByBrandOrFuel } from './core';
import CarForm from './CarForm';

class TableContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      carsArray: INITIAL_DATA,
      showForm: false,
      currentPage: 1,
      selectedItems: [],
      filteredCarsArray: INITIAL_DATA
    };
    
    this._searchHandler = (event) => this.searchHandler(event);
    this._toggleForm = () => this.toggleForm();
  };
  
  render() {
    return <div className="container">
      <Controls onSubmitSearch={this._searchHandler} onClickNewCar={this._toggleForm} />
      {
        this.state.showForm ?
          <CarForm visible={this.state.showForm} /> :
          null
      }
      <Table carsArray={this.state.filteredCarsArray} />
    </div>
  };
  
  searchHandler(event) {
    event.preventDefault();
    const searchValue = event.target.elements.searchInput.value.trim();
    const searchResult = searchValue ?
      searchByBrandOrFuel(this.state.carsArray, searchValue) :
      this.state.carsArray;
    
    this.setState({
      filteredCarsArray: searchResult
    });
  };
  
  toggleForm() {
    console.log('shu')
    this.setState({
      showForm: !this.state.showForm
    });
  };
};

export default TableContainer;