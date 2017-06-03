import React from 'react';

import Controls from './Controls';
import { INITIAL_DATA } from '../appData';
import Table from './Table';
import { searchByBrandOrFuel } from './core'

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
  };
  
  render() {
    return <div className="container">
      <Controls onSubmitSearch={this._searchHandler} />
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
};

export default TableContainer;