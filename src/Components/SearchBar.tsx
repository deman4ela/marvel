import React from 'react';
import { JsxElement } from 'typescript';
import '../index.css';

interface ISearchBarProps {
  handleSubmit: (event: React.SyntheticEvent) => void;
  handleChange: (event: React.ChangeEvent) => void;
}

function SearchBar(props: ISearchBarProps): JSX.Element {
  const { handleSubmit, handleChange } = props;

  return (
    <div className='searchBar'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='query' placeholder='Type a hero' onChange={handleChange} className='searchBar__input' />
        <button type='submit'className='searchBar__button'> Search </button>
      </form>
    </div>
  );
}

export default SearchBar;
