import React from 'react';

import Controls from './Controls';
import { INITIAL_DATA } from '../appData';
import Table from './Table';
import { searchByBrandOrFuel, compareCarPlates } from './core';
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
    this._submitFormHandler = (event, validationObject) => this.submitFormHandler(validationObject);
  };
  
  render() {
    return <div className="container">
      <Controls onSubmitSearch={this._searchHandler} onClickNewCar={this._toggleForm} />
      {
        this.state.showForm ?
          <CarForm onSubmitHandler={this._submitFormHandler} /> :
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
    this.setState({
      showForm: !this.state.showForm
    });
  };
  
  submitFormHandler({ validationErrors, plateInput, modelInput, brandInput, imageInput, fuelInput, costInput }) {
    if (validationErrors.length > 0) {
      console.log('Erros', validationErrors);
    } else {
      const newCar = {
        placa: plateInput,
        modelo: modelInput,
        marca: brandInput,
        imagem: imageInput,
        combustivel: fuelInput,
        valor: costInput
      };
      const newCarsArray = this.state.carsArray.concat([newCar]).sort(compareCarPlates)
      
      this.setState({
        carsArray: newCarsArray,
        filteredCarsArray: newCarsArray,
        showForm: false
      });
    }
  }
};

export default TableContainer;