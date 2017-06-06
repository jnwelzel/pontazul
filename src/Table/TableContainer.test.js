import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import TableContainer from './TableContainer';
import CarTableItem from './CarTableItem';
import CarForm from './CarForm';

let wrapper;

beforeEach(() => {
  wrapper = mount(<TableContainer />);
})

it('lists three cars', () => {
  expect(wrapper.find(CarTableItem)).toHaveLength(3);
});

it('shows the form when clicking on "Novo carro"', () => {
  wrapper.find('button').first().simulate('click');
  
  expect(wrapper.find(CarForm)).not.toBeNull();
})
