import React from 'react';

import Input from '../../Input';
import './CarForm.css';
import Button from '../../Button';
import { validateCarForm } from '../core';

const CarForm = ({ onSubmitHandler = () => {} }) => (
  <div className="CarForm-wrapper">
    <form className="CarForm-form" onSubmit={(event) => {onSubmitHandler(event, validateCarForm(event));}}>
      <div className="CarForm-input">
        <label htmlFor="plateInput">Placa *</label>
        <Input name="plateInput" placeholder="AAA-9999" className="CarForm-plate" />
      </div>

      <div className="CarForm-input">
        <label htmlFor="brandInput">Marca *</label>
        <Input name="brandInput" />
      </div>
      
      <div className="CarForm-input">
        <label htmlFor="modelInput">Modelo *</label>
        <Input name="modelInput" />
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

      <Button type="submit">Salvar</Button>
    </form>
    <div>* Campos obrigatórios</div>
  </div>
);

export default CarForm;
