import React from 'react';
import { JsxElement } from 'typescript';
import '../index.css';

function SearchBar(props: any) {
  const { handleSubmit, handleChange, handleClickAsc, handleClickDesc } = props;

  return (
    <div>
      <div className='searchBar'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='query' placeholder='Type a hero' onChange={handleChange} className='searchBar__input' />
          <button type='submit'className='searchBar__button'> Search </button>
        </form>
      </div >
      <div className='sorting'>
        <button type='submit'className='searchBar__button' onClick={handleClickAsc}> Sort A-Z </button>
        <button type='submit'className='searchBar__button' onClick={handleClickDesc}> Sort Z-A </button>
      </div>
    </div>
  );
}

export default SearchBar;
