import React from 'react';

import Controls from './Controls';
import { INITIAL_DATA } from '../appData';
import Table from './Table';
import { searchByBrandOrFuel, compareCarPlates } from './core';
import CarForm from './CarForm';
import Paginator from '../Paginator';
import { chunk } from '../utils/array';

const PAGE_SIZE = 5;

class TableContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      carsArray: INITIAL_DATA.slice().sort(compareCarPlates),
      showForm: false,
      currentPage: 1,
      selectedItems: [],
      filteredCarsArray: chunk(INITIAL_DATA.slice(), PAGE_SIZE),
      validationErrors: []
    };
    
    this._searchHandler = (event) => this.searchHandler(event);
    this._toggleForm = () => this.toggleForm();
    this._submitFormHandler = (event, validationObject) => this.submitFormHandler(validationObject);
    this._paginationHandler = (pageNumber) => this.paginationHandler(pageNumber);
  };
  
  render() {
    return <div className="container">
      <Controls onSubmitSearch={this._searchHandler} onClickNewCar={this._toggleForm} formIsVisible={this.state.showForm} />
      {
        this.state.showForm ?
          <CarForm onSubmitHandler={this._submitFormHandler} validationErrors={this.state.validationErrors} /> :
          null
      }
      <Table carsArray={this.state.filteredCarsArray[this.state.currentPage - 1]} />
      {
        this.state.filteredCarsArray.length > 1 ?
        <Paginator
          pagesCount={this.state.filteredCarsArray.length}
          currentPage={this.state.currentPage}
          onClickPage={this._paginationHandler}
        /> :
        null
      }
    </div>
  };
  
  searchHandler(event) {
    event.preventDefault();
    const searchValue = event.target.elements.searchInput.value.trim();
    const searchResult = searchValue ?
      searchByBrandOrFuel(this.state.carsArray, searchValue) :
      this.state.carsArray.slice();
    
    this.setState({
      filteredCarsArray: chunk(searchResult, PAGE_SIZE)
    });
  };
  
  toggleForm() {
    this.setState({
      showForm: !this.state.showForm,
      validationErrors: []
    });
  };
  
  submitFormHandler({ validationErrors, plateInput, modelInput, brandInput, imageInput, fuelInput, costInput }) {
    if (validationErrors.length > 0) {
      this.setState({
        validationErrors
      });
    } else {
      const newCar = {
        placa: plateInput,
        modelo: modelInput,
        marca: brandInput,
        imagem: imageInput,
        combustivel: fuelInput,
        valor: costInput
      };
      const newCarsArray = this.state.carsArray.slice();
      newCarsArray.push(newCar);
      
      this.setState({
        carsArray: newCarsArray.sort(compareCarPlates),
        filteredCarsArray: chunk(newCarsArray.slice(), PAGE_SIZE),
        showForm: false,
        currentPage: 1
      });
    }
  };
  
  paginationHandler(pageNumber) {
    this.setState({
      currentPage: pageNumber
    });
  };
};

export default TableContainer;