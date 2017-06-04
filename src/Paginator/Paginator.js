import React from 'react';
import cx from 'classnames';

import './Paginator.css';

const getPageLinks = (pagesCount, currentPage, onClickPage) => {
  const pageLinks = [];
  
  for(let a = 1; a <= pagesCount; a = a + 1) {
    pageLinks.push(<div key={a} onClick={(event) => {onClickPage(a)}} className={cx('Paginator-item', {'Paginator-active': currentPage === a})}>{a}</div>);
  }
  
  return pageLinks;
}

const getNextPageNumber = (pagesCount, currentPage) => (
  currentPage === pagesCount ? currentPage : currentPage + 1
)

const getPreviousPageNumber = currentPage => (
  currentPage === 1 ? currentPage : currentPage - 1
)

const Paginator = ({ pagesCount, currentPage, onClickPage }) => (
  <div className="Paginator-wrapper">
    <div className="Paginator-item Paginator-previous"
      onClick={(event) => {onClickPage(getPreviousPageNumber(currentPage))}}>&lt;&lt;</div>
    
    {getPageLinks(pagesCount, currentPage, onClickPage)}
    
    <div className="Paginator-item Paginator-next"
      onClick={(event) => {onClickPage(getNextPageNumber(pagesCount, currentPage))}}>&gt;&gt;</div>
  </div>
);

export default Paginator;
