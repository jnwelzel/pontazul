import React from 'react';

import Input from '../Input';
import './SearchInput.css';
import searchIcon from './magnifyingGlass.svg';

const INPUT_STYLES = {
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  height: 'auto'
}

const SearchInput = (props) => (
  <div className="SearchInput-wrapper">
    <Input placeholder="Pesquisar" {...props} name="searchInput" style={INPUT_STYLES} />
    <button type="submit" className="SearchInput-button" style={{ backgroundImage: `url(${searchIcon})`}} />
  </div>
);

export default SearchInput;
