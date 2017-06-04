import React from 'react';

import './CarTableItem.css';
import { toBrazilianReal } from '../utils/format';

const getImage = imageURL => {
  if (imageURL) {
    return <a href={imageURL} rel="noopener noreferrer" className="CarTableItem-image" target="_blank">Imagem</a>
  }
  
  return 'Sem foto'
}

const CarTableItem = ({ car, isSelected = false }) => (
  <div className="CarTableItem-wrapper">
    <div className="CarTableItem-checkbox"><input type="checkbox" /></div>
    <div className="CarTableItem-column">{car.placa}</div>
    <div className="CarTableItem-column">{car.marca}</div>
    <div className="CarTableItem-column">{car.modelo}</div>
    <div className="CarTableItem-column">{getImage(car.imagem)}</div>
    <div className="CarTableItem-column">{car.combustivel || '-'}</div>
    <div className="CarTableItem-column Table-text-right">{toBrazilianReal(car.valor) || '-'}</div>
  </div>
);

export default CarTableItem;
