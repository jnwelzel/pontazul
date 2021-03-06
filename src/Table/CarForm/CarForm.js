import React from 'react';

import Input from '../../Input';
import './CarForm.css';
import Button from '../../Button';
import { validateCarForm } from '../core';
import Alert from '../../Alert';

class CarForm extends React.PureComponent {
  render() {
    return <div className="CarForm-wrapper">
      <form onSubmit={(event) => {this.props.onSubmitHandler(event, validateCarForm(event));}}>
        <div className="CarForm-inline">
          <div className="CarForm-input">
            <label htmlFor="plateInput">Placa *</label>
            <Input name="plateInput" placeholder="AAA-9999" className="CarForm-plate" maxLength="8" />
          </div>
          
          <div className="CarForm-input">
            <label htmlFor="modelInput">Modelo *</label>
            <Input name="modelInput" />
          </div>
          
          <div className="CarForm-input">
            <label htmlFor="brandInput">Marca *</label>
            <Input name="brandInput" />
          </div>
          
          <div className="CarForm-input">
            <label htmlFor="imageInput">Foto</label>
            <Input name="imageInput" />
          </div>
          
          <div className="CarForm-input">
            <label htmlFor="fuelInput">Combustível</label>
            <Input name="fuelInput" />
          </div>
          
          <div className="CarForm-input">
            <label htmlFor="costInput">Valor</label>
            <Input name="costInput" type="number" />
          </div>
        </div>
        
        <div className="CarForm-info">* Campos obrigatórios</div>
        
        {
          this.props.validationErrors.length > 0 ?
          <Alert alertTitle="Ops!" className="red" contentArray={this.props.validationErrors} /> :
          null
        }
        
        <Button className="blue" type="submit">Salvar</Button>
      </form>
    </div>
  }
  
  componentDidMount() {
    if(this.props.carBeingEdited !== null) {
      const { placa, modelo, marca, imagem, combustivel, valor } = this.props.carBeingEdited;
      
      document.getElementsByName('plateInput')[0].value = placa;
      document.getElementsByName('modelInput')[0].value = modelo;
      document.getElementsByName('brandInput')[0].value = marca;
      document.getElementsByName('imageInput')[0].value = imagem;
      document.getElementsByName('fuelInput')[0].value = combustivel;
      document.getElementsByName('costInput')[0].value = valor;
    }
  }
};

export default CarForm;
