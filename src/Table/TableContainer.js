import React from 'react';
import uuidV4 from 'uuid/v4';
import Alert from 'react-s-alert';

import Controls from './Controls';
import { INITIAL_DATA } from '../appData';
import Table from './Table';
import { searchByBrandOrFuel, compareCarPlates } from './core';
import CarForm from './CarForm';
import Paginator from '../Paginator';
import { chunk } from '../utils/array';
import Button from '../Button';
import './TableContainer.css';

const PAGE_SIZE = 5;

class TableContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      carsArray: INITIAL_DATA.slice().sort(compareCarPlates),
      showForm: false,
      currentPage: 1,
      selectedItems: [],
      filteredCarsArray: chunk(INITIAL_DATA.slice().sort(), PAGE_SIZE),
      validationErrors: [],
      allCarsSelected: false,
      carBeingEdited: null
    };
    
    this._searchHandler = (event) => this.searchHandler(event);
    this._toggleForm = () => this.toggleForm();
    this._submitFormHandler = (event, validationObject) => this.submitFormHandler(validationObject);
    this._paginationHandler = (pageNumber) => this.paginationHandler(pageNumber);
    this._onSelectCarHandler = (checked, id) => this.onSelectCarHandler(checked, id);
    this._onSelectAll = (checked) => this.onSelectAll(checked);
    
    this.alertConfig = {
      effect: 'slide',
      timeout: 2000
    }
  };
  
  render() {
    return <div className="container">
      <Controls onSubmitSearch={this._searchHandler} onClickNewCar={this._toggleForm} formIsVisible={this.state.showForm} />
      
      {
        this.state.showForm ?
          <CarForm onSubmitHandler={this._submitFormHandler} validationErrors={this.state.validationErrors} carBeingEdited={this.state.carBeingEdited} /> :
          null
      }
      
      {
        this.state.filteredCarsArray.length > 0 ?
        <Table
          carsArray={this.state.filteredCarsArray[this.state.currentPage - 1]}
          selectedCars={this.state.selectedItems}
          onSelectCar={this._onSelectCarHandler}
          allSelected={this.state.allCarsSelected}
          onSelectAll={this._onSelectAll}
        /> :
        <div className="TableContainer-empty">Nenhum carro encontrado</div>
      }
      
      {
        this.state.selectedItems.length > 0 ?
        <Button className="red TableContainer-excluir" onClick={(event) => {this.deleteCarsHandler()}}>Excluir ({this.state.selectedItems.length})</Button> :
        null
      }
      
      {
        this.state.selectedItems.length === 1 ?
        <Button className="blue TableContainer-editar" onClick={event => this.onClickEditHandler()}>Editar</Button> :
        null
      }
      
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
      const carObject = {
        id: this.state.carBeingEdited === null ? uuidV4() : this.state.carBeingEdited.id,
        placa: plateInput,
        modelo: modelInput,
        marca: brandInput,
        imagem: imageInput,
        combustivel: fuelInput,
        valor: costInput
      };
      let newCarsArray;
      
      if (this.state.carBeingEdited === null) {
        newCarsArray = this.state.carsArray.slice();
        newCarsArray.push(carObject);
      } else {
        newCarsArray = this.state.carsArray.map(carro => (carro.id === this.state.carBeingEdited.id ? carObject : carro));
        console.log('Editou carro!');
      }
      
      this.setState({
        carsArray: newCarsArray.sort(compareCarPlates),
        filteredCarsArray: chunk(newCarsArray.slice(), PAGE_SIZE),
        showForm: false,
        currentPage: 1,
        carBeingEdited: null,
        selectedItems: []
      }, () => Alert.success('Carro salvo com sucesso', this.alertConfig));
    }
  };
  
  paginationHandler(pageNumber) {
    this.setState({
      currentPage: pageNumber,
      selectedItems: [],
      allCarsSelected: false
    });
  };
  
  onSelectCarHandler(checked, id) {
    let newArray = this.state.selectedItems.slice();
    
    if (checked) {
      newArray.push(id);
    } else {
      newArray = newArray.filter(idInArray => (
        idInArray !== id
      ))
    }
    
    this.setState({
      selectedItems: newArray,
      allCarsSelected: newArray.length === this.state.filteredCarsArray[this.state.currentPage - 1].length
    });
  }
  
  onSelectAll(checked) {
    if (checked) {
      this.setState({
        allCarsSelected: true,
        selectedItems: this.state.filteredCarsArray[this.state.currentPage - 1].map(car => (car.id))
      });
    } else {
      this.setState({
        allCarsSelected: false,
        selectedItems: []
      });
    }
  }
  
  deleteCarsHandler() {
    const newCarsArray = this.state.carsArray.filter(car => !this.state.selectedItems.includes(car.id));
    const moreThanOneCar = this.state.selectedItems.length > 1;
    
    this.setState({
      carsArray: newCarsArray,
      selectedItems: [],
      allCarsSelected: false,
      filteredCarsArray: chunk(newCarsArray.slice(), PAGE_SIZE),
      currentPage: 1
    }, () => Alert.success(moreThanOneCar ? 'Carros excluídos com sucesso' : 'Carro excluído com sucesso', this.alertConfig))
  }
  
  onClickEditHandler() {
    this.setState({
      showForm: !this.state.showForm,
      validationErrors: [],
      carBeingEdited: this.state.carsArray.filter(car => (car.id === this.state.selectedItems[0]))[0]
    });
  }
};

export default TableContainer;