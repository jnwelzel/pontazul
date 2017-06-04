import React from 'react';

import './Table.css';
import CarTableItem from './CarTableItem';

const getCars = carsArray => (
  carsArray.map((car, index) => (
    <CarTableItem key={index} car={car} />
  ))
)

const Table = ({ carsArray }) => (
  <div className="Table-wrapper">
    <div className="Table-headers">
      <div className="Table-checkbox"><input type="checkbox" /></div>
      <div className="Table-item">Placa</div>
      <div className="Table-item">Marca</div>
      <div className="Table-item">Modelo</div>
      <div className="Table-item">Foto</div>
      <div className="Table-item">Combustível</div>
      <div className="Table-item Table-text-right">Valor</div>
    </div>
    <div>{getCars(carsArray)}</div>
  </div>
)

export default Table
