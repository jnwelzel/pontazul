import React from 'react';

import Input from '../../Input';
import './CarForm.css';
import Button from '../../Button';

const CarForm = () => (
  <div className="CarForm-wrapper">
    <form className="CarForm-form">
      <div className="CarForm-input">
        <label htmlFor="plateInput">Placa</label>
        <Input name="plateInput" placeholder="AAA-9999" />
      </div>
      
      <div className="CarForm-input">
        <label htmlFor="modelInput">Modelo</label>
        <Input name="modelInput" />
      </div>

      <div className="CarForm-input">
        <label htmlFor="brandInput">Marca</label>
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
        <Input name="costInput" />
      </div>

      <Button>Salvar</Button>
    </form>
  </div>
);

export default CarForm;
